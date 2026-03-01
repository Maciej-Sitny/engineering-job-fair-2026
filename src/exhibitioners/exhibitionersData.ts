export type Category =
    | 'Informatyka'
    | 'Elektronika'
    | 'Inżynieria i Zarządzanie Procesami Przemysłowymi'
    | 'Zarządzanie i Inżynieria Produkcji'
    | 'Inżynieria Mechaniczna'
    | 'Informatyka i Systemy Inteligentne'
    | 'Automatyka i Robotyka'
    | 'Inżynieria Biomedyczna'
    | 'Energetyka'
    | 'Inna';

export const ALL_CATEGORIES: Category[] = [
    'Informatyka',
    'Elektronika',
    'Inżynieria i Zarządzanie Procesami Przemysłowymi',
    'Zarządzanie i Inżynieria Produkcji',
    'Inżynieria Mechaniczna',
    'Informatyka i Systemy Inteligentne',
    'Automatyka i Robotyka',
    'Inżynieria Biomedyczna',
    'Energetyka',
    'Inna',
];

/** Keyed content areas for a company's detail page.
 *  null  → section not provided (tab hidden)
 *  string → text content (rendered with newlines + clickable URLs)
 *  string[] (Multimedia) → list of media items
 *  string (Lokalizacja stoiska) → path/URL to booth-map image
 */
export interface OszaryPrezentacji {
    'Dlaczego my?'?: string | null;
    'FAQ'?: string | null;
    'Informacja o firmie'?: string | null;
    /** path to booth-location image; null → tab hidden */
    'Lokalizacja stoiska'?: string | null;
    'Dołącz do nas'?: string | null;
    'Linki i kontakt'?: string | null;
    'Statystyki firmy'?: string | null;
    'Multimedia'?: string[] | null;
}

export interface Exhibitioner {
    id: string;
    name: string;
    categories: Category[];
    /** null = not a sponsor, otherwise the badge label shown on the card */
    sponsorLabel: string | null;
    shortDescription: string;
    website?: string;
    /** path to logo image (imported via ?url or direct import) */
    logo?: string;
    /** rich per-tab content; when present, ExhibitionerDetail uses it instead of shortDescription */
    obszaryPrezentacji?: OszaryPrezentacji;
    /** when true the card in the search is non-clickable (no detail page available yet) */
    detailDisabled?: boolean;
}

import logoCFE from './logos/logo_cfe.svg';
import logoDassault from './logos/logo_dassault_systemes.svg';
import logoCocaCola from './logos/logo_coca_cola.svg';
import logoE80 from './logos/logo_e80.svg';
import logoCAE from './logos/logo_cae.svg';
import logoBWI from './logos/logo_bwi.png';
import logoBBH from './logos/logo_brown_brothers.jpg';
import logoBorgWarner from './logos/logo_borg_warner.png';
import logoAVSystem from './logos/logo_avsystem.jpg';
import logoKZA from './logos/logo_kza.jpg';
import logoIv from './logos/logo_iv.jpg';
import logoCodibly from './logos/logo_codibly.jpg';
import logoKoleje from './logos/logo_koleje_malopolskie.jpg';
import logoSabre from './logos/logo_sabre.jpg';
import logoOrange from './logos/logo_orange.svg';
import logoPega from './logos/logo_pega.jpg';
import logoWoodward from './logos/woodward_logo.svg';


export const EXHIBITIONERS: Exhibitioner[] = [


    /* ── Rzeczywiste dane wystawców / sponsorów ─────────────────────────── */
    {
        id: 'sabre',
        name: 'Sabre',
        categories: ['Informatyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: 'SPONSOR GŁÓWNY',
        logo: logoSabre,
        shortDescription:
            'Sabre Corporation – wiodąca firma technologiczna napędzająca globalną branżę turystyczną, centrum R&D w Krakowie od 2000 roku.',
        obszaryPrezentacji: {
            'Dlaczego my?':
                'Jeśli jesteś osobą, która chce brać odpowiedzialność za powierzone zadania, rozwijać się przy ciekawych projektach i pracować w zespole, który naprawdę współpracuje – to miejsce dla Ciebie! W naszej firmie stawiamy na praktyczne wykorzystanie wiedzy i realny wpływ na realizowane projekty. Dajemy przestrzeń do nauki, zdobywania doświadczenia i dopasowania swoich umiejętności do konkretnych wyzwań. Dołącz do nas i zacznij budować swoją karierę już podczas studiów!',
            'Informacja o firmie':
                'Sabre Corporation to wiodąca firma zajmująca się rozwojem oprogramowania i technologii, które napędzają globalną branżę turystyczną, obsługując szeroką gamę podmiotów: linie lotnicze, hotele, biura podróży i innych dostawców z obszaru turystyki. Założone w 2000 roku, w Krakowie, centrum rozwoju Sabre Polska, jest jednym z kluczowych dla całej firmy. W Polsce zatrudnionych jest 900 pracowników.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas': 'Java, DevOps, Front-End, QA, C#, C++, SRE, AI, Python',
            'Linki i kontakt': 'www.sabre.com',
            'Statystyki firmy': 'Ponad 7000 pracowników globalnie',
            'FAQ': null,
            'Multimedia': [],
        },
    },
    {
        id: 'orange-polska',
        name: 'Orange Polska',
        categories: ['Informatyka', 'Elektronika'],
        sponsorLabel: 'SPONSOR',
        logo: logoOrange,
        shortDescription:
            'Jeden z wiodących dostawców usług telekomunikacyjnych i IT w Polsce – sieć 5G, cloud, AI i cyberbezpieczeństwo.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Orange Polska jest jednym z wiodących dostawców usług telekomunikacyjnych i IT dla biznesu w Polsce. Posiadamy największą infrastrukturę, dzięki której oferujemy usługi w najnowocześniejszych technologiach, w tym 5G. Prowadzimy własną działalność badawczo-rozwojową i jesteśmy dostawcą kompleksowych rozwiązań loT, ICT i cyberbezpieczeństwa.\n\nJeśli chcesz się rozwijać w jednym z 20 obszarów, np. IT, cloud, sieć, Al, cyberbezpieczeństwo, sprzedaż, marketing czy HR, to Twoja Przyszłość tu jest. Zyskujesz szansę udziału w projektach o ogólnokrajowym zasięgu, wpływ na rozwój nowoczesnych technologii oraz możliwość pracy w inspirującym i włączającym środowisku. Oferujemy Ci rozwój poprzez udział w szkoleniach, wewnętrznych programach stażowych i reskillingowych, które umożliwią realizację Twoich zawodowych aspiracji i osiąganie profesjonalnej doskonałości.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'W tym roku – w ramach praktyk „Let\'s Orange" mamy dla Ciebie aż 88 miejsc na praktykach, gdzie możesz rozwijać swój potencjał, zdobyć nowe umiejętności i odkryć swoją ścieżkę kariery w technologiach. Praktyki możesz odbywać w jednym z dziewięciu obszarów. W każdym z nich czeka od kilku do kilkudziesięciu miejsc. W zależności od poziomu Twoich umiejętności i wyników naszej gry rekrutacyjnej zaproponujemy Ci praktykę w konkretnym zespole.\n\nObszary, do których rekrutujemy:\n\n- Bezpieczeństwo Wewnętrzne\n- Cloud\n- Cyberbezpieczeństwo\n- Data/AI\n- Digital marketing/UX/UI\n- Energetyka\n- Finanse\n- IT\n- Telekomunikacja\n- Zarządzanie (Strategia, Rozwój, Innowacje)',
            'Linki i kontakt':
                'Dowiedz się więcej o praktykach i przejdź grę rekrutacyjną: https://praktyki.orange.pl/\nLinkedIn: https://pl.linkedin.com/company/orangepolska\nFacebook: https://www.facebook.com/OrangePraca/?locale=pl_PL',
            'Dlaczego my?': null,
            'FAQ': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'woodward-poland',
        name: 'Woodward Poland Sp z o.o.',
        categories: ['Automatyka i Robotyka', 'Energetyka', 'Elektronika'],
        sponsorLabel: 'SPONSOR',
        logo: logoWoodward,
        shortDescription:
            'Woodward – globalna kompania projektująca i serwisująca systemy sterowania dla sektora lotniczego i energetycznego.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Woodward, Inc jest niezależną firmą zajmującą się projektowaniem, produkcją i serwisem rozwiązań w zakresie systemów sterujących dla rynków lotniczego i energetycznego. Dostarczane przez nas innowacyjne systemy kierowania przepływami, energią elektryczną oraz położeniem pomagają naszym Klientom oferować produkty przyjaźniejsze dla środowiska, bardziej niezawodne i wydajniejsze. Nasi Klienci to wiodący producenci oryginalnego wyposażenia (OEM) oraz końcowi użytkownicy ich produktów. Jesteśmy globalną korporacją, z siedzibą główną w Fort Collins w stanie Colorado w Stanach Zjednoczonych. Jesteśmy również notowani na Amerykańskiej giełdzie papierów wartościowych na technologicznym indeksie NASDAQ, pod symbolem WWD.\nW branży lotniczej obsługujemy rynki samolotów pasażerskich, biznesowych, śmigłowców i sektor zbrojeniowy. Nasze technologie lotnicze obejmują przede wszystkim systemy sterowania napędami stosowane we wszystkich typach samolotów napędzanych turbinami odrzutowymi.\nW branży energetycznej oferujemy rozwiązania dla trzech głównych obszarów. Zapewniamy systemy kontroli do wszelkich urządzeń wytwarzających energię elektryczną, zarówno odnawialną, jak i z paliw kopalnych. Dostarczamy systemy sterowania na potrzeby kontroli jakości, dystrybucji i magazynowania energii we współczesnych i przyszłych sieciach energetycznych. Oferujemy również systemy tego typu używane w urządzeniach zasilających w sektorach wydobywania, dystrybucji, przetwarzania i konwersji energii w rozmaitych zastosowaniach.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Inżynier Oprogramowania, Inżynier Elektronik, Inżynier Mechanik, Inżynier ds. zgodności',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'pega',
        name: 'Pega',
        categories: ['Informatyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: 'SPONSOR',
        logo: logoPega,
        shortDescription: 'Pega – oprogramowanie do automatyzacji procesów biznesowych.',
    },
    {
        id: 'cfe-polska',
        name: 'CFE Polska',
        categories: ['Inna'],
        sponsorLabel: null,
        logo: logoCFE,
        shortDescription:
            'CFE jako generalny wykonawca, należący do belgijskiej multidyscyplinarnej Grupy CFE, istnieje na polskim rynku budowlanym od dwudziestu siedmiu lat.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'CFE jako generalny wykonawca, należący do belgijskiej multidyscyplinarnej Grupy CFE, istnieje na polskim rynku budowlanym od dwudziestu siedmiu lat. Firma posiada bogate doświadczenie w realizacji projektów przemysłowych, mieszkaniowych, handlowo-usługowych oraz hotelarskich. CFE stawia na partnerstwo, ludzi, filozofię lean i zrównoważony rozwój, angażując się w działania proekologiczne ukierunkowane na ochronę środowiska. To, co wyróżnia CFE, to przede wszystkim ludzie i koncentracja na obranej strategii. Firma posiada świetny zespół, bez którego sukces nie byłby możliwy. Obecnie zespół CFE składa się z ponad 200 pracowników, z czego 45% stanowią kobiety.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'poszukujemy studentów i absolwentów inżynierii lądowej, instalacji elektrycznych, instalacji HVAC,',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'bwi-poland',
        name: 'BWI Poland Technologies Sp. z o.o.',
        categories: ['Inżynieria Mechaniczna', 'Automatyka i Robotyka', 'Informatyka'],
        sponsorLabel: null,
        logo: logoBWI,
        shortDescription:
            'BWI Group projektuje i wytwarza oryginalne części zawieszeń samochodowych dla czołowych producentów aut na całym świecie.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'BWI Group projektuje i wytwarza oryginalne części zawieszeń samochodowych dla czołowych producentów aut na całym świecie. W Polsce firma posiada dwa oddziały: Centrum Techniczne w Balicach, będące nowoczesnym ośrodkiem badawczo-rozwojowym zatrudniającym ponad 300 osób oraz fabrykę amortyzatorów w Krośnie, największy zakład produkcyjny BWI, który zatrudnia ponad 1300 pracowników.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Poszukujemy do pracy Kandydatów z kierunków mechanicznych lub pokrewnych: Mechanika i Budowa Maszyn, Automatyka i Robotyka, Mechatronika, Inżynieria Materiałowa, Zarządzanie i Inżynieria produkcji ale również z kierunków związanych z IT.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'iv-poland',
        name: 'Iv Poland',
        categories: ['Automatyka i Robotyka', 'Energetyka', 'Elektronika'],
        sponsorLabel: null,
        logo: logoIv,
        shortDescription:
            'Iv Poland – lider w dziedzinie inżynierii, dostarczający kompleksowych rozwiązań w elektrotechnice, teletechnice, automatyce i HVAC.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Jesteśmy Iv Poland. Jako część Iv, jesteśmy liderem w dziedzinie inżynierii, dostarczając kompleksowych rozwiązań dedykowanych wielu branżom. Nasz zespół składa się z doświadczonych inżynierów i menadżerów, którzy są w stanie planować i wdrażać projekty oparte zarówno na sprawdzonych, jak i innowacyjnych rozwiązaniach najwyższej jakości.\n\nWspółpraca z nami to gwarancja profesjonalizmu, zaangażowania oraz dostępu do najnowszych osiągnięć technologicznych. Nasze zadania realizujemy na rynku krajowym, jak i międzynarodowym, kładąc szczególny nacisk na wykorzystanie głębokiej wiedzy technicznej, precyzję oraz innowacyjność.\n\nGłówne obszary naszej działalności to usługi projektowe i usługi wykonawcze w zakresie:\n\nelektrotechniki,\nteletechniki,\nautomatyki,\nsystemów zarządzania budynkami,\nHVAC.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Aktualnie poszukujemy Kandydatów szczególnie na letnie PŁATNE praktyki. Możemy zaprosić do zespołu elektrycznego, mechaników (HVAC) jak i BIM tym samym zapraszamy głównie studentów ostatniego roku studiów inżynierskich lub magisterskich takich kierunków jak: Inżynieria Ochrony Środowiska, Elektrotechnika oraz kierunki pokrewne.',
            'Linki i kontakt':
                'Strona WWW: https://iv-poland.pl/ , profil LinkedIn: https://www.linkedin.com/company/ivpolandspzoo/ profil FB: facebook.com/Ivpoland',
            'Dlaczego my?': null,
            'FAQ': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'brown-brothers-harriman',
        name: 'Brown Brothers Harriman',
        categories: ['Informatyka'],
        sponsorLabel: null,
        logo: logoBBH,
        shortDescription:
            'Prywatny bank inwestycyjny i globalny dostawca usług finansowych – centrum fintechowe w Krakowie.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Brown Brothers Harriman jest prywatnym bankiem inwestycyjnym i globalnym dostawca uslug finansowych dla funduszy inwestycyjnych i inwestorow instytucjonalnych. Firma posiada 17 biur zlokalizowanych w Azji, Europie i Ameryce Polnocnej oraz zatrudnia globalnie 5500 pracownikow. Biuro w Krakowie funkcjonuje od 2012 i stanowi centrum uslug fintechowych firmy, gdzie eksperci IT i biznesu scisle wspolpracuja w projektowaniu i tworzeniu innowacyjnych rozwiazan technologicznych do obslugi globalnych procesow finansowych i dostosowanych do potrzeb klientow firmy.\nJesli jestes studentem uczelni technicznej i szukasz mozliwosci, aby rozpoczac swoja kariere w swiecie technologii i finansow dolacz do jednego z programow stazowowych w IT lub w finansach oferowanych przez BBH. Przez okres 6 miesiecy stazysci staja sie integralna czescia zespolu i pracuja na rzeczywistych projektach z doswiadczonymi kolegami. Nasze programy stazowe traktujemy jako inwestycje w talenty, ktore, beda sie rozwijac i zdobywac praktyczne doswiadczenie, aby osiagac swoje cele zawodowe i zostac z nami na dluzej.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas': 'Ekonomia, informatyka',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'dassault-systemes',
        name: 'Dassault Systèmes',
        categories: ['Informatyka', 'Inżynieria Mechaniczna', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: null,
        logo: logoDassault,
        shortDescription:
            'Firma z ponad 40-letnim doświadczeniem oferująca platformę 3DEXPERIENCE wspierającą innowacje w 12 branżach.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Dassault Systèmes to firma z ponad 40-letnim doświadczeniem, której misją jest wspieranie rozwoju produktów, procesów oraz poprawa jakości życia ludzi.\nOferujemy platformę 3DEXPERIENCE, która obejmuje rozwiązania naszych 13 marek, wspierające 12 branż w obszarach takich jak: transport i mobilność, opieka zdrowotna, czy infrastruktura i przemysł.\nCzęsto mówimy, że nasze produkty mają wpływ na niemal każdy aspekt codziennego życia. Dzieje się tak dzięki wykorzystaniu technologii wirtualnych bliźniaków na platformie 3DEXPERIENCE, które umożliwiają ludziom i firmom wprowadzanie innowacji w zupełnie nowy sposób.\nW Dassault Systèmes jesteśmy globalną społecznością ponad 25 000 zaangażowanych osób, które – mimo różnorodności – łączy wspólny sposób myślenia „IF" oraz te same wartości. „IF" oznacza naszą pasję do odkrywania nowych możliwości, natomiast „WE" odzwierciedla przekonanie, że działając razem, możemy wprowadzać realne i znaczące zmiany.\nNasze wartości są dla nas źródłem inspiracji w realizacji naszej misji i wspólnym spełnianiu marzeń. Odzwierciedlają one sposób myślenia Dassault Systèmes, oparty na ciągłym podejmowaniu wyzwań i współpracy w procesie innowacji.\n\nDassault Systèmes is a 40+ year old company dedicated to helping improve products, processes and the lives of people.\nWe offer the 3DEXPERIENCE platform, which includes solutions from our 13 brands, supporting 12 industries in areas such as Transportation & Mobility, Life Science & Healthcare, or Industrial Equipment.\nWe like to say that our products touch nearly everything in your life! And we\'re doing it through the power of virtual twins on the 3DEXPERIENCE platform, empowering people and businesses to innovate in entirely new ways.\nAt Dassault Systèmes, we\'re a global community of more than 25,000 passionate individuals united in our diversity by sharing the same "IF" mindset and values. "IF" refers to our passion for exploring new possibilities and "WE" to our belief that by bringing our community together we can enable meaningful change.\nOur values are a real source of inspiration for us to accomplish our purpose and ultimately make dreams possible together. They reflect the Dassault Systèmes mindset of constantly challenging ourselves in our collaborative innovation journey.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Poszukujemy kandydatów o różnorodnym doświadczeniu i zestawie umiejętności, w tym studentów i absolwentów kierunków informatycznych, inżynierskich, biznesowych, ekonomicznych i pokrewnych. Cenimy umiejętności komunikacyjne, chęć nauki oraz zdolność do współpracy w międzynarodowym środowisku. Oferujemy możliwości rozwoju zarówno dla osób o profilach technicznych, jak i nietechnicznych, które chcą rozwijać swoje kompetencje i budować karierę w globalnej firmie.\nChoć wymagania zespołów różnią się w zależności od roli, w Krakowie skupiamy się przede wszystkim na trzech głównych obszarach: Badania i Rozwój (R&D), Wdrożenia (Services) oraz Wsparcie (Support).\n\nWe are looking for candidates with diverse backgrounds and skill sets, including students and graduates from IT, engineering, business, economics, and other related fields. We value curiosity, communication, willingness to learn and the ability to work collaboratively in an international environment. We offer opportunities for candidates with both technical and non-technical profiles who are interested in developing their skills and building a career in a global company.\nWhile our teams require different competencies depending on the role, in Kraków we primarily focus on three main areas: Research & Development (R&D), Services, and Support.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'flightscape-cae',
        name: 'Flightscape – Powered by CAE',
        categories: ['Informatyka'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription:
            'Flightscape – platforma decyzyjna dla centrów operacyjnych linii lotniczych, rozwijana przez CAE.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Flightscape – Powered by CAE is the ultimate decision‑making platform for airline Operations Control Centers.\nDesigned for the realities of today\'s complex aviation landscape, Flightscape provides real‑time insights through a single unified view, enabling teams to anticipate disruptions, respond with precision, and continuously optimize operational performance. By empowering proactive planning and intelligent resource management, the platform helps airlines uphold the highest standards of safety, efficiency, and sustainability.\nFlightscape is one of the many innovative products developed by CAE. At CAE, our mission is clear: to help make the world a safer place. For nearly 80 years, we have pioneered advancements in simulation, training, and mission readiness, supporting critical operations across the globe. Join a purpose‑driven organization where bold ideas are encouraged, collaboration fuels progress, and your growth drives our collective success.\n\nTo learn more: Flightscape | CAE (https://www.cae.com/civil-aviation/aviation-software/flightscape)',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'We are seeking motivated Software Engineering and Computer Science students eager to learn and make a difference by assisting with various software-related tasks.\nWe are thrilled to announce open positions for four exciting roles:\n-Software Developer with expertise in C++\n-Software Developer with expertise in Java\n-QA Automation Specialists with expertise in Java\n-DevOps Engineer\n\nYour contributions will be crucial as you provide technical support to senior engineers across design, testing, documentation, and implementation, and you will also play a key role in installing and integrating innovative software packages.\n\nAre you ready to:\n-Engage in various engineering activities, including designing and testing software, creating comprehensive documentation, implementing solutions, and installing and integrating software packages.\n-Collect and analyse data, preparing detailed reports to support decision-making processes.\n-Offer administrative and technical assistance to the Engineering department, ensuring smooth operations and effective project execution.\n\nOur ideal candidate has:\n-Legal authorization to work in Poland.\n-Ability to work from Kraków in a hybrid work model.\n-Availability to work full‑time starting July 1st.\n-An expected graduation date no later than July 2026; currently enrolled in an accredited bachelor\'s (or higher) engineering program, preferably Software Engineering or Computer Science. Graduates without active student status are also welcome.\n-Familiarity with core programming concepts and hands‑on experience in at least one of the following: Java, C++, test automation technologies, or DevOps‑related tooling.\n-Basic SQL knowledge.\n-A strong willingness to learn new procedures, tools, and applications.\n-English proficiency at B2 level or higher, both spoken and written.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'havi',
        name: 'HAVI Global Business Services',
        categories: ['Inna', 'Informatyka'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription:
            'HAVI keeps the world\'s biggest food brands moving – upraszczamy łańcuchy dostaw dla klientów w ponad 30 krajach.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'HAVI keeps the world\'s biggest food brands moving. We make supply chains simple, reliable, and sustainable, from sourcing to delivery.\nOur Global Business Services supports internal HAVI teams across 30+ countries with finance, procurement, and planning. We\'re all about collaboration, efficiency, and making an impact.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'We are looking for students and graduates of finance, economics, logistics, analytics, and IT-related fields. Candidates interested in finance and accounting (AP/AR, GL, Controlling, Master Data), procurement and supply chain planning (Procurement, Material Planning, Global Planning Analytics), as well as technology - especially ERP and SAP systems - will find great opportunities within our teams. We value analytical thinking, accuracy, eagerness to learn, teamwork, and motivation to grow in an international environment.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'coca-cola-hbc',
        name: 'Coca-Cola HBC Polska i Kraje Bałtyckie',
        categories: ['Inna', 'Inżynieria i Zarządzanie Procesami Przemysłowymi'],
        sponsorLabel: null,
        logo: logoCocaCola,
        shortDescription:
            'Strategiczny partner rozlewniczy The Coca‑Cola Company działający w Polsce, Litwie, Łotwie i Estonii.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Coca‑Cola HBC Polska i Kraje Bałtyckie jest częścią globalnej grupy Coca‑Cola HBC AG i działa jako jeden obszar biznesowy obejmujący Polskę, Litwę, Łotwę i Estonię.\nFirma jest strategicznym partnerem rozlewniczym The Coca‑Cola Company, odpowiadając za produkcję, pakowanie, dystrybucję oraz sprzedaż szerokiego portfolio napojów. Oferta obejmuje m.in. marki Coca‑Cola, Coca‑Cola Zero, Fanta, Sprite, Costa Coffee, Monster, a także wody, soki, herbaty i inne napoje niegazowane.\nOrganizacja działa w oparciu o rozbudowaną infrastrukturę produkcyjną i logistyczną, która w Polsce obejmuje trzy zakłady produkcyjne oraz sieć centrów dystrybucyjnych, zatrudniając łącznie tysiące pracowników w regionie.\nCoca‑Cola HBC Polska i Kraje Bałtyckie realizuje strategię opartą na zrównoważonym rozwoju, efektywności operacyjnej i odpowiedzialnym zarządzaniu zasobami, co przekłada się na wielokrotne wyróżnienia w międzynarodowych rankingach odpowiedzialnego biznesu.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Poszukujemy studentów oraz absolwentów kierunków biologicznych i inżynierskich. Oczekujemy kandydatów, którzy chcą rozwijać się w środowisku nowoczesnej firmy produkcyjnej i są gotowi do wsparcia naszych zespołów w obszarach: zapewnienia jakości, gdzie wymagana jest podstawowa wiedza z zakresu mikrobiologii lub fizyko-chemii, dokładność i umiejętność pracy zgodnie z procedurami; produkcji, gdzie cenimy zaangażowanie, odpowiedzialność oraz zainteresowanie procesami wytwarzania i kontrolą jakości; oraz zarządzania surowcami i koncentratami, gdzie istotna jest skrupulatność, dobra organizacja pracy oraz zainteresowanie obszarem bezpieczeństwa żywności i łańcucha dostaw. Od wszystkich kandydatów oczekujemy motywacji, gotowości do pracy w okresie letnim, chęci zdobywania nowej wiedzy, podstawowej znajomości narzędzi MS Office i języka angielskiego na poziomie komunikatywnym.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'e80-group',
        name: 'E80 Group',
        categories: ['Automatyka i Robotyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: null,
        logo: logoE80,
        shortDescription:
            'Światowy lider w dziedzinie inteligentnych, w pełni automatycznych systemów logistycznych – oddział inżynieryjny w Krakowie.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'E80 Group jest światowym liderem w dziedzinie inteligentnych w pełni automatycznych systemów logistycznych. Główna siedziba firmy znajduje się we Włoszech. W Polsce ulokowany jest prężnie rozwijający się oddział inżynieryjny z siedzibą w Krakowie. Firma ma swoje oddziały również w USA, Wielkiej Brytanii, Brazylii, Szwecji, Francji, Australii oraz Dubaju. E80 Group znany jest na świecie głownie z bezobsługowych wózków widłowych sterowanych laserowo LGV, wysp paletyzujących oraz inteligentnych systemów zarządzania magazynem AS/RS.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Poszukujemy kandydatów z następujących kierunków studiów: automatyka, robotyka, informatyka, mechatronika, zarządzanie, elektrotechnika, elektronika.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'codibly',
        name: 'Codibly S.A.',
        categories: ['Informatyka', 'Energetyka'],
        sponsorLabel: null,
        logo: logoCodibly,
        shortDescription:
            'Firma technologiczno-konsultingowa specjalizująca się w oprogramowaniu, integracji systemów i rozwiązaniach cloud dla e-mobility i OZE.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Codibly to firma technologiczno-konsultingowa, specjalizująca się w tworzeniu oprogramowania, integracji systemów oraz rozwiązaniach data i cloud dla branż e-mobility i odnawialnych źródeł energii. Naszym celem jest wspieranie organizacji w cyfrowej transformacji poprzez tworzenie skalowalnych produktów i platform, które usprawniają zarządzanie energią oraz wspierają rozwój elektromobilności. Jako część grupy Spyrosoft realizujemy międzynarodowe projekty, łącząc zaawansowane kompetencje technologiczne z głęboką wiedzą branżową i partnerskim podejściem, co pozwala nam dostarczać rozwiązania na najwyższym poziomie.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Zapraszamy studentów i absolwentów kierunków inżynierskich oraz osoby zainteresowane rozwojem w obszarze tworzenia oprogramowania i projektów technologicznych. Szukamy kandydatów, którzy chcą zdobywać doświadczenie w tworzeniu oprogramowania, integracjach systemowych, rozwiązaniach chmurowych oraz projektach dla sektora energetycznego i elektromobilności. Cenimy zaangażowanie, chęć nauki i gotowość do pracy zespołowej w środowisku projektowym.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'avsystem',
        name: 'AVSystem',
        categories: ['Informatyka'],
        sponsorLabel: null,
        logo: logoAVSystem,
        shortDescription:
            'Krakowska firma produktowa z 2006 roku – zaawansowane oprogramowanie do zarządzania urządzeniami i infrastrukturą telekomunikacyjną.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'Firma powstała w 2006 roku w Krakowie. Od początku koncentruje się na rozwoju własnych produktów software\'owych w obszarze zarządzania urządzeniami i infrastrukturą telekomunikacyjną. Dzięki konsekwentnej strategii produktowej oraz współpracy z globalnymi operatorami, AVSystem zbudował silną pozycję międzynarodową, obsługując klientów w wielu krajach Europy, obu Ameryk i Azji.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Poszukujemy osób o silnym zapleczu technicznym, które chcą pracować nad zaawansowanymi systemami wykorzystywanymi przez operatorów telekomunikacyjnych i dostawców IoT na całym świecie. Cenimy inżynierskie podejście, odpowiedzialność za jakość oraz gotowość do rozwiązywania złożonych problemów technologicznych.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'kza',
        name: 'Krakowskie Zakłady Automatyki S.A.',
        categories: ['Automatyka i Robotyka', 'Elektronika'],
        sponsorLabel: null,
        logo: logoKZA,
        shortDescription:
            'Wiodąca firma w branży sterowania ruchem kolejowym – projektowanie i montaż nowoczesnych urządzeń sterowania w największych polskich ośrodkach.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'O Krakowskich Zakładach Automatyki S.A.\nKrakowskie Zakłady Automatyki S.A. to wiodąca firma w branży sterowania ruchem kolejowym. Od lat realizujemy projekty związane z przebudową oraz montażem nowoczesnych urządzeń sterowania ruchem, budując nowoczesną, bezpieczną i efektywną infrastrukturę kolejową.\nJako lider w branży, Krakowskie Zakłady Automatyki S.A. posiadają wieloletnie doświadczenie w realizacji zaawansowanych projektów infrastrukturalnych. Specjalizujemy się w projektowaniu, przebudowie oraz montażu nowoczesnych urządzeń sterowania ruchem kolejowym, zapewniając kompleksowe wsparcie na każdym etapie inwestycji.\nRealizujemy największe i najbardziej skomplikowane projekty modernizacji kolei w takich ośrodkach, jak Warszawa, Kraków, Trójmiasto, Szczecin, Katowice, Łódź i Poznań. Wdrażamy pionierskie rozwiązania na polskiej kolei, wprowadzając innowacje, które podnoszą efektywność i bezpieczeństwo transportu kolejowego.\nBiuro Krakowskich Zakładów Automatyki S.A. mieści się w Krakowie, przy ul. Wielickiej 30. Posiadamy również produkcję i magazyn w Wieliczce, przedstawicielstwo w Poznaniu oraz biuro w Warszawie. Zatrudniamy około 230 pracowników.\nPracownikom, którzy wykonują zadania na budowie, poza siedzibą firmy i miejscem zamieszkania, zapewniamy pokrycie kosztów zakwaterowania oraz diet, a także posiłki regeneracyjne, odzież roboczą i narzędzia zgodne z zasadami BHP oraz wewnętrznymi standardami firmy.\nJako firma, która ceni wartości społeczne i kulturalne, aktywnie angażujemy się w inicjatywy wspierające rozwój społeczności lokalnych.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Aktualnie mamy otwartych kilka etatów na stanowiska takie jak Elektromonter (k/m), Monter – teletechnik (k/m), Technik automatyk / monter sterowania ruchem kolejowym (k/m), Inżynier budowy (k/m).\n\nJesteśmy także otwarci na absolwentów szkół średnich kierunków: elektryka, elektronika, elektrotechnika, mechatronika, telekomunikacja, teletechnika, informatyka,\noraz na absolwentów uczelni wyższych kierunków: elektrotechnika, telekomunikacja, transport kolejowy bez doświadczenia zawodowego.\n\nW Krakowskich Zakładach Automatyki S.A. oferujemy możliwości rozwoju oraz podnoszenia kwalifikacji zawodowych, jak i zdobywania uprawnień budowlanych oraz projektowych.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'borgwarner',
        name: 'BorgWarner',
        categories: ['Elektronika', 'Automatyka i Robotyka', 'Inżynieria Mechaniczna'],
        sponsorLabel: null,
        logo: logoBorgWarner,
        shortDescription:
            'Globalny lider w innowacyjnych i zrównoważonych rozwiązaniach motoryzacyjnych – elektronika mocy i elektromobilność.',
        obszaryPrezentacji: {
            'Informacja o firmie':
                'BorgWarner jest globalnym liderem w obszarze innowacyjnych i zrównoważonych rozwiązań dla rynku motoryzacyjnego. Tworzymy środowisko, w którym spotykają się utalentowani specjaliści, ambitne wyzwania technologiczne oraz przełomowe rozwiązania, realnie wpływające na przyszłość mobilności. Łączymy wiedzę, doświadczenie i niezależne myślenie naszych pracowników, wspólnie dążąc do realizacji wizji czystszego i bardziej energooszczędnego świata.\n\nW BorgWarner projektujemy i wytwarzamy systemy, które wyznaczają kierunek rozwoju współczesnej motoryzacji. Współpracując z czołowymi inżynierami, technologami oraz producentami OEM na świecie, aktywnie przyspieszamy transformację branży w stronę elektromobilności.\n\nNasze portfolio obejmuje zaawansowane rozwiązania w zakresie elektroniki mocy (Power Electronics), które odgrywają kluczową rolę w rozwoju nowoczesnych układów napędowych i systemów elektryfikacji pojazdów.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Zapraszamy do aplikowania studentów kierunków technicznych, w szczególności elektroniki, elektrotechniki, automatyki i robotyki, mechaniki oraz innych pokrewnych specjalizacji inżynierskich.',
            'Dlaczego my?': null,
            'FAQ': null,
            'Linki i kontakt': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },
    {
        id: 'koleje-malopolskie',
        name: 'Koleje Małopolskie',
        categories: ['Inna', 'Informatyka'],
        sponsorLabel: null,
        logo: logoKoleje,
        shortDescription:
            'Nowoczesny regionalny przewoźnik multimodalny należący w 100% do Województwa Małopolskiego.',
        obszaryPrezentacji: {
            'Dlaczego my?':
                'Koleje Małopolskie to nowoczesny przewoźnik multimodalny. Firma dynamicznie się rozwija, co wpływa także na rozwój pracowników.',
            'Informacja o firmie':
                'Koleje Małopolskie – o co w tym chodzi?\nW skrócie: to „nasz" regionalny przewoźnik. Firma nie należy do prywatnego inwestora, ale w 100% do Województwa Małopolskiego. Oznacza to, że Marszałek i Zarząd Województwa mają tu decydujący głos (pełnią rolę tzw. Zgromadzenia Wspólników), a kapitał zakładowy Spółki to prawie 97 mln zł.\nCo robimy (oprócz tego, że jeździmy)?\nSpółka ma status użyteczności publicznej, więc jej celem nie jest tylko „zarabianie kasy", ale przede wszystkim ogarnięcie transportu w regionie. Ich główne zadania to:\n• Gęstsza siatka połączeń: Pociągi mają jeździć częściej i w stałych odstępach czasu.\n• Lepszy tabor: Kupują nowe pociągi (te z klimą, Wi-Fi i gniazdkami).\n• Integracja transportu: bilet na pociąg, autobus i tramwaj sensownie połączony.\n• Dostępność: Likwidacja barier dla osób z niepełnosprawnościami czy rowerzystów.\n• Zasięg: Nie tylko trasy wokół Krakowa, ale też połączenia międzywojewódzkie.',
            'Lokalizacja stoiska': null,
            'Dołącz do nas':
                'Poszukujemy studentów i absolwentów kierunków związanych z transportem kolejowym i autobusowym, także informatyków',
            'Linki i kontakt': 'www.kolejemalopolskie.com.pl',
            'FAQ': null,
            'Statystyki firmy': null,
            'Multimedia': [],
        },
    },

    /* ── Nowe firmy – dane w przygotowaniu ──────────────────────────────── */

    {
        id: 'philip-morris',
        name: 'Philip Morris Polska Distribution Sp. z o.o.',
        categories: ['Inna'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'Philip Morris Polska Distribution Sp. z o.o.',
    },
    {
        id: 'accevo',
        name: 'Accevo Sp. z o.o.',
        categories: ['Informatyka'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'Accevo Sp. z o.o.',
    },
    {
        id: 'duna-polska',
        name: 'Duna Polska S.A.',
        categories: ['Inna'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'Duna Polska S.A.',
    },
    {
        id: 'ndi-sa',
        name: 'NDI SA',
        categories: ['Inna'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'NDI SA',
    },
    {
        id: 'cae',
        name: 'CAE',
        categories: ['Informatyka'],
        sponsorLabel: null,
        logo: logoCAE,
        detailDisabled: true,
        shortDescription: 'CAE – lider w symulacji lotniczej i szkoleniach dla pilotów.',
    },
    {
        id: 'air-liquide',
        name: 'Air Liquide Global E&C Solutions Poland S.A.',
        categories: ['Energetyka', 'Inna'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'Air Liquide Global E&C Solutions Poland S.A.',
    },
    {
        id: 'valeo',
        name: 'VALEO',
        categories: ['Elektronika', 'Inżynieria Mechaniczna', 'Automatyka i Robotyka'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'VALEO – innowacyjne rozwiązania dla przemysłu motoryzacyjnego.',
    },
    {
        id: 'vinci-construction',
        name: 'VINCI Construction Usługi Wsparcia Sp. z o.o.',
        categories: ['Inna'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'VINCI Construction Usługi Wsparcia Sp. z o.o.',
    },
    {
        id: 'kirchhoff-automotive',
        name: 'KIRCHHOFF Automotive',
        categories: ['Inżynieria Mechaniczna', 'Automatyka i Robotyka'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'KIRCHHOFF Automotive – producent podzespołów dla branży motoryzacyjnej.',
    },
    {
        id: 'spie-energy',
        name: 'SPIE Energy Poland S.A.',
        categories: ['Energetyka', 'Elektronika'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'SPIE Energy Poland S.A.',
    },
    {
        id: 'accenture',
        name: 'Accenture',
        categories: ['Informatyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'Accenture – globalna firma konsultingowa i technologiczna.',
    },
    {
        id: 'velvet-care',
        name: 'Velvet CARE',
        categories: ['Inna', 'Inżynieria i Zarządzanie Procesami Przemysłowymi'],
        sponsorLabel: null,
        detailDisabled: true,
        shortDescription: 'Velvet CARE – wiodący producent papierowych produktów higienicznych.',
    },
];
