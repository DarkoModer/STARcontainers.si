export interface CityData {
  slug: string;
  name: string;
  region: string;
  population: string;
  description: string;
  keywords: string[];
}

export interface KeywordData {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  content: string;
}

export const cities: CityData[] = [
  {
    slug: 'ljubljana',
    name: 'Ljubljana',
    region: 'Osrednjeslovenska',
    population: '295.000',
    description:
      'Ljubljana je glavno in največje mesto Slovenije, središče gospodarstva, kulture in prometa. Z mestno obvoznico in odlično povezavo z avtocestnim omrežjem omogoča hitro dostavo kontejnerjev v vsak del mesta in okolice.',
    keywords: ['kontejner Ljubljana', 'ladijski kontejner Ljubljana', 'kontejnerji Ljubljana', 'kupi kontejner Ljubljana', 'kontejner za prodajo Ljubljana'],
  },
  {
    slug: 'maribor',
    name: 'Maribor',
    region: 'Podravska',
    population: '96.000',
    description:
      'Maribor je drugo največje mesto Slovenije in gospodarstveno središče Štajerske. Zahvaljujoč bližini avstrijske meje in dobri povezavi z avtocesto je idealna lokacija za dostavo kontejnerjev v severovzhodno Slovenijo.',
    keywords: ['kontejner Maribor', 'ladijski kontejner Maribor', 'kontejnerji Maribor', 'kupi kontejner Maribor', 'kontejner za prodajo Maribor'],
  },
  {
    slug: 'celje',
    name: 'Celje',
    region: 'Savinjska',
    population: '38.000',
    description:
      'Celje je tretje največje mesto v Sloveniji in pomembno gospodarstveno središče Spodnjega Posavja. Leži ob avtocesti A1, ki povezuje Ljubljano in Maribor, kar omogoča učinkovito dostavo kontejnerjev.',
    keywords: ['kontejner Celje', 'ladijski kontejner Celje', 'kontejnerji Celje', 'kupi kontejner Celje', 'kontejner za prodajo Celje'],
  },
  {
    slug: 'kranj',
    name: 'Kranj',
    region: 'Gorenjska',
    population: '37.000',
    description:
      'Kranj je gospodarsko središče Gorenjske in četrto največje mesto v Sloveniji. Njegova strateška lega med Ljubljano in Jesenicami ob avtocesti A2 zagotavlja hitro dostavo kontejnerjev po vsej Gorenjski.',
    keywords: ['kontejner Kranj', 'ladijski kontejner Kranj', 'kontejnerji Kranj', 'kupi kontejner Kranj', 'kontejner za prodajo Kranj'],
  },
  {
    slug: 'koper',
    name: 'Koper',
    region: 'Obalno-kraška',
    population: '26.000',
    description:
      'Koper je največje primorsko mesto in dom edinega slovenskega pristanišča. Kot vhodna točka za ladijski transport kontejnerjev je Koper ključna lokacija z najhitrejšim dostopom do kontejnerjev v Sloveniji.',
    keywords: ['kontejner Koper', 'ladijski kontejner Koper', 'kontejnerji Koper', 'kupi kontejner Koper', 'kontejner za prodajo Koper'],
  },
  {
    slug: 'ptuj',
    name: 'Ptuj',
    region: 'Podravska',
    population: '18.000',
    description:
      'Ptuj je najstarejše mesto v Sloveniji in pomembno središče Podravja. Leži ob avtocesti A4, ki povezuje Maribor s hrvaško mejo, kar omogoča zanesljivo dostavo kontejnerjev v vzhodno Slovenijo.',
    keywords: ['kontejner Ptuj', 'ladijski kontejner Ptuj', 'kontejnerji Ptuj', 'kupi kontejner Ptuj', 'kontejner za prodajo Ptuj'],
  },
  {
    slug: 'nova-gorica',
    name: 'Nova Gorica',
    region: 'Goriška',
    population: '13.000',
    description:
      'Nova Gorica je mlado mesto ob meji z Italijo in gospodarsko središče Goriške regije. Bližina italijanske meje in avtocestne povezave omogočajo učinkovito dostavo kontejnerjev v zahodno Slovenijo.',
    keywords: ['kontejner Nova Gorica', 'ladijski kontejner Nova Gorica', 'kontejnerji Nova Gorica', 'kupi kontejner Nova Gorica', 'kontejner za prodajo Nova Gorica'],
  },
  {
    slug: 'murska-sobota',
    name: 'Murska Sobota',
    region: 'Pomurska',
    population: '11.000',
    description:
      'Murska Sobota je največje mesto Prekmurja in gospodarsko središče severovzhodne Slovenije. Čeprav leži obrobno, zagotavljamo dostavo kontejnerjev tudi v to regijo v roku 48 ur.',
    keywords: ['kontejner Murska Sobota', 'ladijski kontejner Murska Sobota', 'kontejnerji Murska Sobota', 'kupi kontejner Murska Sobota', 'kontejner za prodajo Murska Sobota'],
  },
  {
    slug: 'novo-mesto',
    name: 'Novo Mesto',
    region: 'Jugovzhodna Slovenija',
    population: '23.000',
    description:
      'Novo Mesto je največje mesto Dolenjske in pomembno gospodarsko središče jugovzhodne Slovenije. Avtocestna povezava A2 omogoča dostavo kontejnerjev po vsej regiji.',
    keywords: ['kontejner Novo Mesto', 'ladijski kontejner Novo Mesto', 'kontejnerji Novo Mesto', 'kupi kontejner Novo Mesto', 'kontejner za prodajo Novo Mesto'],
  },
  {
    slug: 'brezice',
    name: 'Brežice',
    region: 'Posavska',
    population: '6.500',
    description:
      'Brežice so pomembno obmejno mesto ob hrvaški meji in središče Posavja. Strateška lega ob avtocesti A2 Zagreb–Ljubljana omogoča hitro dostavo kontejnerjev iz južne smeri.',
    keywords: ['kontejner Brežice', 'ladijski kontejner Brežice', 'kontejnerji Brežice', 'kupi kontejner Brežice', 'kontejner za prodajo Brežice'],
  },
  {
    slug: 'velenje',
    name: 'Velenje',
    region: 'Savinjska',
    population: '33.000',
    description:
      'Velenje je industrijsko središče Zasavja in Savinjske doline. Zaradi močne industrijske tradicije je povpraševanje po kontejnerjih za skladiščenje in transport visoko.',
    keywords: ['kontejner Velenje', 'ladijski kontejner Velenje', 'kontejnerji Velenje', 'kupi kontejner Velenje', 'kontejner za prodajo Velenje'],
  },
  {
    slug: 'trbovlje',
    name: 'Trbovlje',
    region: 'Zasavska',
    population: '14.000',
    description:
      'Trbovlje so središče Zasavja z dolgo industrijsko tradicijo. Kontejnerji so priljubljeni za skladiščenje opreme in materialov v tej industrijski regiji.',
    keywords: ['kontejner Trbovlje', 'ladijski kontejner Trbovlje', 'kontejnerji Trbovlje', 'kupi kontejner Trbovlje', 'kontejner za prodajo Trbovlje'],
  },
  {
    slug: 'izola',
    name: 'Izola',
    region: 'Obalno-kraška',
    population: '16.000',
    description:
      'Izola je obalno mesto z bogato ribiško in ladjedelniško tradicijo. Bližina koprskega pristanišča omogoča direkten dostop do kontejnerjev s kratkim dobavnim rokom.',
    keywords: ['kontejner Izola', 'ladijski kontejner Izola', 'kontejnerji Izola', 'kupi kontejner Izola', 'kontejner za prodajo Izola'],
  },
  {
    slug: 'slovenska-bistrica',
    name: 'Slovenska Bistrica',
    region: 'Podravska',
    population: '8.000',
    description:
      'Slovenska Bistrica leži med Mariborom in Celjem ob avtocesti A1, kar omogoča odlično dostopnost za dostavo kontejnerjev v osrednje Štajersko.',
    keywords: ['kontejner Slovenska Bistrica', 'ladijski kontejner Slovenska Bistrica', 'kontejnerji Slovenska Bistrica', 'kupi kontejner Slovenska Bistrica', 'kontejner za prodajo Slovenska Bistrica'],
  },
  {
    slug: 'domzale',
    name: 'Domžale',
    region: 'Osrednjeslovenska',
    population: '12.000',
    description:
      'Domžale so industrijsko središče ob robu Ljubljane z odlično avtocestno povezavo. Zaradi bližine glavnega mesta je dostava kontejnerjev izjemno hitra.',
    keywords: ['kontejner Domžale', 'ladijski kontejner Domžale', 'kontejnerji Domžale', 'kupi kontejner Domžale', 'kontejner za prodajo Domžale'],
  },
];

export const keywords: KeywordData[] = [
  {
    slug: 'kontejner-cena',
    title: 'Kontejner cena – Trenutne cene ladijskih kontejnerjev 2024 | STAR Containers',
    h1: 'Kontejner cena – Pregled cen ladijskih kontejnerjev v Sloveniji',
    description:
      'Preverite aktualne cene ladijskih kontejnerjev v Sloveniji. Primerjava cen 10ft, 20ft, 40ft, High Cube in hladilnih kontejnerjev. BREZPLAČNO povpraševanje.',
    keywords: ['kontejner cena', 'cena ladijskega kontejnerja', 'kontejnerji cene', 'koliko stane kontejner', 'cena 20ft kontejnerja', 'cena 40ft kontejnerja', 'kontejner cena Slovenija'],
    content: `Cene ladijskih kontejnerjev se gibljejo od 1.790 € za najmanjše 10ft kontejnerje do 9.900 € za 40ft HC hladilne kontejnerje (vse cene brez DDV). Na ceno vplivajo predvsem velikost kontejnerja, tip (standard, High Cube, hladilni), stanje (novo ali rabljeno) in trenutna razpoložljivost na trgu.

Naše cene so vsebinsko primerne in med najkonkurenčnejšimi v Sloveniji. Vsi kontejnerji so certificirani po ISO standardih, pregledani in pripravljeni za takojšnjo uporabo. Cena vključuje pregled in certificiranje – brez skritih stroškov.

Za točno ponudbo nas kontaktirajte. Cene se lahko razlikujejo glede na trenutno zalog in specifične zahteve.`,
  },
  {
    slug: 'ladijski-kontejner',
    title: 'Ladijski kontejner za prodajo – Vrste, velikosti, cene | STAR Containers',
    h1: 'Ladijski kontejner – Popoln vodnik po vrstah in velikostih',
    description:
      'Vse o ladijskih kontejnerjih: standardni, High Cube, hladilni. Velikosti 10ft, 20ft, 40ft. Certificirani kontejnerji za prodajo z dostavo po Sloveniji.',
    keywords: ['ladijski kontejner', 'ladijski kontejnerji', 'vrste ladijskih kontejnerjev', 'velikosti kontejnerjev', 'ISO kontejner', 'kontejner za transport'],
    content: `Ladijski kontejnerji (ISO kontejnerji) so standardizirane kovinske enote, namenjene transportu blaga po morju, cesti in železnici. Izdelani so iz visokokakovostnega jekla, so vodoodporni, protipožarni in opremljeni z varnimi zaklepami.

Standardne velikosti so 10ft, 20ft in 40ft dolžine. High Cube različice nudijo 30 cm več višine za volumen tovore. Hladilni kontejnerji (reefer) vzdržujejo temperature od -25°C do +25°C.

Vsi naši kontejnerji so pregledani in certificirani po mednarodnih standardih. Primerne za skladiščenje, transport, gradbene projekte in adaptacije.`,
  },
  {
    slug: 'kontejner-za-skladiscenje',
    title: 'Kontejner za skladiščenje – Varno in suho shranjevanje | STAR Containers',
    h1: 'Kontejner za skladiščenje – Varno in suho skladiščenje brez kompromisov',
    description:
      'Ladijski kontejnerji kot idealna rešitev za skladiščenje. Vodoodporni, varni, certificirani. Dostava po Sloveniji v 48h. Od 1.790 € (brez DDV).',
    keywords: ['kontejner za skladiščenje', 'skladiščni kontejner', 'kontejner shramba', 'kontejner za shranjevanje', 'skladiščenje v kontejnerju', 'kontejner garaža'],
    content: `Ladijski kontejnerji so odlična rešitev za skladiščenje raznovrstnega blaga, opreme, orodja in materialov. Izdelani iz vodoodpornega jekla z varnimi zaklepi zagotavljajo zaščito pred vlago, vdorom in požarom.

Kontejnerji za skladiščenje so primerni za: gradbišča, kmetije, industrijske cone, športna društva, domače delavnice in začasne skladiščne prostore. Ne zahtevajo gradbenega dovoljenja za postavitev.

Na voljo vseh velikosti – od kompaktnih 10ft za manjše potrebe do 40ft High Cube za obsežno skladiščenje.`,
  },
  {
    slug: 'kontejner-za-gradbiscite',
    title: 'Kontejner za gradbišče – Mobilni servisni in skladišni prostori | STAR Containers',
    h1: 'Kontejner za gradbišče – Zanesljiva mobilna skladišča in servisne enote',
    description:
      'Kontejnerji za gradbišča: skladiščenje materialov, orodjarne, servisne enote. Hitra dostava, prilagoditve po meri. Od 1.790 € (brez DDV).',
    keywords: ['kontejner za gradbišče', 'gradbiščni kontejner', 'kontejner gradbeništvo', 'servisni kontejner', 'kontejner za orodje', 'kontejner na gradbišču'],
    content: `Kontejnerji na gradbiščih so nepogrešljivi za varno hrambo orodja, materialov in opreme. Lahko se uporabljajo kot orodjarne, servisne delavnice, garderobe ali pisarne.

Prednosti kontejnerjev za gradbišča: hitra postavitev brez temeljev, mobilnost (enostaven prevoz na novo lokacijo), vzdržljivost v vremenskih razmerah in varnost z visokokakovostnimi zaklepi.

Prilagodimo lahko konture, dodamo odprtine, poliche, električne instalacije in prezračevalne sisteme po vaših specifikacijah.`,
  },
  {
    slug: 'rabljeni-kontejnerji',
    title: 'Rabljeni kontejnerji – Kakovostni rabljeni ladijski kontejnerji | STAR Containers',
    h1: 'Rabljeni kontejnerji – Kakovostne rabljene enote po ugodnih cenah',
    description:
      'Rabljeni ladijski kontejnerji v odličnem stanju. Pregledani, certificirani, vodoodporni. Cene od 990 €. Dostava po Sloveniji.',
    keywords: ['rabljeni kontejnerji', 'rabljen kontejner', 'kontejnerji rabljeni', 'poceni kontejner', 'rabljeni ladijski kontejner', 'drugi kontejnerji'],
    content: `Rabljeni kontejnerji so ekonomična izbira za stranke, ki iščejo kakovostne skladiščne rešitve po nižji ceni. Vsi rabljeni kontejnerji pri Star Containers so temeljito pregledani, vodoodporni in funkcionalno brezhibni.

Razvrščeni so v kategorije glede na starost in videz. Tudi rabljeni kontejnerji ohranjajo vse strukturne in varnostne lastnosti ISO standardov.

Idealni za: skladiščenje, garaže, gradbišča, kmetijske namene in adaptacije. Cene rabljenih kontejnerjev so do 40% nižje od novih.`,
  },
  {
    slug: 'kontejner-20ft',
    title: '20ft kontejner – Standardni 20 čeveljski ladijski kontejner | STAR Containers',
    h1: '20ft kontejner – Najbolj priljubljena velikost ladijskega kontejnerja',
    description:
      '20ft ladijski kontejner: dimenzije 5.90m × 2.35m × 2.39m, prostornina 33m³. Certificiran, vodoodporen. Cena od 1.990 € (brez DDV). Dostava 48h.',
    keywords: ['20ft kontejner', '20 čevljev kontejner', 'kontejner 20ft cena', '20ft ladijski kontejner', 'kontejner 6m', 'standardni 20ft kontejner'],
    content: `20ft kontejner je najbolj priljubljena in vsestranska velikost ladijskega kontejnerja. Z dimenzijami 5.90m × 2.35m × 2.39m in prostornino 33 m³ ponuja optimalno razmerje med prostorom in ceno.

Uporaba: mednarodni transport, skladiščenje, gradbišča, adaptacije, garaže. Primeren za vozila, palete (11 EUR paleto), orodje in opremo.

Teža praznega kontejnerja: približno 2.230 kg. Največja nosilnost: 25.000 kg. Vsi naši 20ft kontejnerji so ISO certificirani.`,
  },
  {
    slug: 'kontejner-40ft',
    title: '40ft kontejner – Veliki 40 čeveljski ladijski kontejner | STAR Containers',
    h1: '40ft kontejner – Maksimalen prostor za vaše potrebe',
    description:
      '40ft ladijski kontejner: dimenzije 12.03m × 2.35m × 2.39m, prostornina 67m³. Certificiran, vodoodporen. Cena od 2.700 € (brez DDV). Dostava 48h.',
    keywords: ['40ft kontejner', '40 čevljev kontejner', 'kontejner 40ft cena', '40ft ladijski kontejner', 'kontejner 12m', 'veliki kontejner'],
    content: `40ft kontejner je največji standardni ladijski kontejner z dimenzijami 12.03m × 2.35m × 2.39m in prostornino 67 m³. Dvakrat večji prostor kot 20ft kontejner z ugodnejšo ceno na kubični meter.

Idealen za: obsežno skladiščenje, velike gradbene projekte, industrijsko logistiko, adaptacije v bivalne ali poslovne prostore.

Teža praznega kontejnerja: približno 3.750 kg. Največja nosilnost: 28.000 kg. Na voljo tudi v High Cube različici z dodatno višino.`,
  },
  {
    slug: 'high-cube-kontejner',
    title: 'High Cube kontejner – Višji ladijski kontejnerji | STAR Containers',
    h1: 'High Cube kontejner – 30 cm več višine za večji volumen',
    description:
      'High Cube kontejnerji z višino 2.70m. 20ft HC in 40ft HC. Večja prostornina, enaka tla. Cena od 2.490 € (brez DDV). Dostava po Sloveniji.',
    keywords: ['high cube kontejner', 'HC kontejner', 'visoki kontejner', 'kontejner high cube cena', '40ft high cube', '20ft high cube', 'kontejner 2.70m'],
    content: `High Cube (HC) kontejnerji so za 30 cm višji od standardnih kontejnerjev – z notranjo višino 2.70 m namesto 2.39 m. Ta dodatni prostor omogoča skladiščenje višjih palet in opreme ter povečuje volumen za približno 12%.

Na voljo v velikostih 20ft HC (37 m³) in 40ft HC (76 m³). Primerne za: skladiščenje visokih palet, transport voluminoznega blaga, adaptacije z višjimi stropi.

Vsi HC kontejnerji so certificirani po ISO standardih in vodoodporni.`,
  },
  {
    slug: 'hladilni-kontejner',
    title: 'Hladilni kontejner – Refrigerated reefer kontejnerji | STAR Containers',
    h1: 'Hladilni kontejner – Kontrolirana temperatura od -25°C do +25°C',
    description:
      'Hladilni (reefer) kontejnerji za transport in skladiščenje pri kontrolirani temperaturi. -25°C do +25°C. Cena od 6.990 € (brez DDV). Dostava po Sloveniji.',
    keywords: ['hladilni kontejner', 'reefer kontejner', 'kontejner hlajenje', 'hladilni kontejner cena', 'refrigerated kontejner', 'kontejner za hlajenje', 'kontejner zamrzovalnik'],
    content: `Hladilni kontejnerji (reefer) so opremljeni z zmogljivimi hladilnimi enotami, ki vzdržujejo konstantno temperaturo od -25°C do +25°C. Uporabljajo se za transport in skladiščenje živil, zdravil, kemikalij in drugih temperaturno občutljivih izdelkov.

20ft hladilni kontejner ponuja prostornino 28 m³ z notranjimi dimenzijami 5.44m × 2.29m × 2.27m, cena od 6.990 € (brez DDV). 40ft HC hladilni kontejner ponuja prostornino 67 m³ z dimenzijami 11.58m × 2.29m × 2.55m, cena od 9.900 € (brez DDV). Opremljeni z digitalnim krmilnikom temperature.

Zahtevajo priklop na električno omrežje (380V/50Hz). Na voljo tudi z agregatom na dizel za samostojno obratovanje.`,
  },
  {
    slug: 'kontejner-dostava',
    title: 'Kontejner dostava – Hitra dostava kontejnerjev po Sloveniji | STAR Containers',
    h1: 'Dostava kontejnerjev – Po vsej Sloveniji v 48 urah',
    description:
      'Dostava ladijskih kontejnerjev po vsej Sloveniji. Rok 48 ur. Dostava s kamionom s klikalko. Brezplačen nasvet za pripravo terena.',
    keywords: ['kontejner dostava', 'dostava kontejnerja', 'kontejner dostava cena', 'prevoz kontejnerja', 'dostava kontejnerjev Slovenija', 'kamion za kontejner'],
    content: `Star Containers zagotavlja dostavo kontejnerjev po vsej Sloveniji v roku 48 ur od potrditve naročila. Dostavo izvajamo z lastnimi vozili – kamioni s klikalko za enostaven odlag kontejnerja na želeno lokacijo.

Priprava terena: potreben je ravno teren (beton, asfalt, tlakovci) z dovolj prostora za odlag (dolžina kontejnerja + 5 m za kamion). Višinski prostor za klikalko: min. 5 m.

Dostava je vključena v končno ponudbo. Za lokacije s težavnim dostopom nudimo individualne rešitve.`,
  },
];

export const containerTypes = [
  { name: '10ft Standard', slug: '10ft-standard', price: '1.790', capacity: '14 m³', dims: '2.99m × 2.44m × 2.59m' },
  { name: '20ft Standard', slug: '20ft-standard', price: '1.990', capacity: '33 m³', dims: '5.90m × 2.35m × 2.39m' },
  { name: '40ft Standard', slug: '40ft-standard', price: '2.700', capacity: '67 m³', dims: '12.03m × 2.35m × 2.39m' },
  { name: '20ft High Cube', slug: '20ft-high-cube', price: '2.490', capacity: '37 m³', dims: '5.90m × 2.35m × 2.70m' },
  { name: '40ft High Cube', slug: '40ft-high-cube', price: '2.790', capacity: '76 m³', dims: '12.03m × 2.35m × 2.70m' },
  { name: '20ft Hladilni', slug: '20ft-hladilni', price: '6.990', capacity: '28 m³', dims: '5.44m × 2.29m × 2.27m' },
  { name: '40ft HC Hladilni', slug: '40ft-hc-hladilni', price: '9.900', capacity: '67 m³', dims: '11.58m × 2.29m × 2.55m' },
  { name: '20ft Rabljeni', slug: '20ft-rabljeni', price: '1.490', capacity: '33 m³', dims: '5.90m × 2.35m × 2.39m' },
  { name: '40ft HC Rabljeni', slug: '40ft-hc-rabljeni', price: '2.190', capacity: '76 m³', dims: '12.03m × 2.35m × 2.70m' },
];
