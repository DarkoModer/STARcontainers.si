import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface InquiryRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Rate limiting - stores IP addresses with request timestamps
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

async function sendEmail(data: InquiryRequest): Promise<boolean> {
  const smtpHost = "mailbox.star.si";
  const smtpPort = 465;
  const smtpUser = "maj@star.si";
  const smtpPass = Deno.env.get("SMTP_PASSWORD") || "";

  if (!smtpPass) {
    console.error("SMTP_PASSWORD not configured");
    return false;
  }

  // Create email content
  const emailContent = `
From: ${smtpUser}
To: info@starcontainers.si
Subject: Novo povpraševanje - ${data.service}
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8

NOVO POVRAČEVANJE
==================

Ime: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Vrsta: ${data.service}

Sporočilo:
${data.message}
`;

  // Connect to SMTP server using Deno's TCP
  try {
    const conn = await Deno.connectTls({
      hostname: smtpHost,
      port: smtpPort,
    });

    const reader = conn.readable.getReader();
    const writer = conn.writable.getWriter();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    async function sendCommand(cmd: string): Promise<string> {
      await writer.write(encoder.encode(cmd + "\r\n"));
      const result = await reader.read();
      return decoder.decode(result.value || new Uint8Array());
    }

    async function readResponse(): Promise<string> {
      const result = await reader.read();
      return decoder.decode(result.value || new Uint8Array());
    }

    // Read initial greeting
    await readResponse();

    // EHLO
    await sendCommand("EHLO mailbox.star.si");
    await readResponse();

    // AUTH LOGIN
    await sendCommand("AUTH LOGIN");
    await readResponse();

    // Send username (base64)
    await sendCommand(btoa(smtpUser));
    await readResponse();

    // Send password (base64)
    await sendCommand(btoa(smtpPass));
    await readResponse();

    // MAIL FROM
    await sendCommand(`MAIL FROM:<${smtpUser}>`);
    await readResponse();

    // RCPT TO
    await sendCommand("RCPT TO:<info@starcontainers.si>");
    await readResponse();

    // DATA
    await sendCommand("DATA");
    await readResponse();

    // Send email content
    await sendCommand(emailContent + "\r\n.");
    await readResponse();

    // QUIT
    await sendCommand("QUIT");
    await readResponse();

    reader.releaseLock();
    writer.releaseLock();
    conn.close();

    return true;
  } catch (error) {
    console.error("SMTP error:", error);
    return false;
  }
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Get client IP for rate limiting
  const forwardedFor = req.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

  // Check rate limit
  if (!checkRateLimit(clientIp)) {
    return new Response(
      JSON.stringify({ error: "Preveč zahtev. Poskusite znova čez eno minuto." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const data: InquiryRequest = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: "Manjkajo obvezni podatki" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email
    const success = await sendEmail(data);

    if (success) {
      return new Response(
        JSON.stringify({ success: true, message: "Povpraševanje uspešno poslano" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Napaka pri pošiljanju" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Napaka strežnika" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
