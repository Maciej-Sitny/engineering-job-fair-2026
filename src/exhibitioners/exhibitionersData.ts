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

export interface Exhibitioner {
    id: string;
    name: string;
    categories: Category[];
    /** null = not a sponsor, otherwise the badge label shown on the card */
    sponsorLabel: string | null;
    shortDescription: string;
    website?: string;
}

export const EXHIBITIONERS: Exhibitioner[] = [
    {
        id: 'aptiv',
        name: 'Aptiv',
        categories: ['Elektronika', 'Informatyka', 'Automatyka i Robotyka'],
        sponsorLabel: 'SPONSOR GŁÓWNY',
        shortDescription:
            'Globalny lider technologiczny tworzący bezpieczniejsze, bardziej zielone i połączone rozwiązania dla branży motoryzacyjnej.',
        website: 'https://www.aptiv.com',
    },
    {
        id: 'woodward',
        name: 'Woodward',
        categories: ['Automatyka i Robotyka', 'Energetyka', 'Inżynieria Mechaniczna'],
        sponsorLabel: null,
        shortDescription:
            'Producent zaawansowanych systemów sterowania dla sektora energetycznego i przemysłowego.',
        website: 'https://www.woodward.com',
    },
    {
        id: 'krakow-dla-was',
        name: 'KrakówDlaWas.info',
        categories: ['Inna'],
        sponsorLabel: null,
        shortDescription:
            'Portal informacyjny o życiu studenckim, wydarzeniach i możliwościach w Krakowie.',
        website: 'https://www.krakowdlawas.info',
    },
    {
        id: 'pega',
        name: 'Pega',
        categories: ['Informatyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: null,
        shortDescription:
            'Dostawca oprogramowania do automatyzacji procesów biznesowych i zarządzania decyzjami opartego na AI.',
        website: 'https://www.pega.com',
    },
    {
        id: 'motorola-solutions',
        name: 'Motorola Solutions',
        categories: ['Informatyka', 'Elektronika', 'Automatyka i Robotyka'],
        sponsorLabel: null,
        shortDescription:
            'Firma technologiczna specjalizująca się w rozwiązaniach z zakresu bezpieczeństwa publicznego i komunikacji.',
        website: 'https://www.motorolasolutions.com',
    },
    {
        id: 'ge-healthcare',
        name: 'GE Healthcare',
        categories: ['Inżynieria Biomedyczna', 'Informatyka'],
        sponsorLabel: 'SPONSOR',
        shortDescription:
            'Światowy lider w dziedzinie technologii medycznych, diagnostyki obrazowej i cyfrowych rozwiązań zdrowotnych.',
        website: 'https://www.gehealthcare.com',
    },
    {
        id: 'ibm',
        name: 'IBM',
        categories: ['Informatyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: null,
        shortDescription:
            'Gigant technologiczny oferujący rozwiązania chmurowe, sztuczną inteligencję i usługi konsultingowe.',
        website: 'https://www.ibm.com',
    },
    {
        id: 'google',
        name: 'Google',
        categories: ['Informatyka', 'Informatyka i Systemy Inteligentne'],
        sponsorLabel: null,
        shortDescription:
            'Firma technologiczna tworząca produkty i usługi z obszaru wyszukiwania, chmury, reklamy i AI.',
        website: 'https://www.google.com',
    },
    {
        id: 'abb',
        name: 'ABB',
        categories: ['Automatyka i Robotyka', 'Energetyka', 'Inżynieria Mechaniczna'],
        sponsorLabel: null,
        shortDescription:
            'Lider w automatyzacji przemysłowej, robotyce i technologiach elektroenergetycznych.',
        website: 'https://www.abb.com',
    },
    {
        id: 'rockwell',
        name: 'Rockwell Automation',
        categories: ['Automatyka i Robotyka', 'Inżynieria i Zarządzanie Procesami Przemysłowymi'],
        sponsorLabel: null,
        shortDescription:
            'Wiodący dostawca automatyki przemysłowej i cyfrowej transformacji dla producentów na całym świecie.',
        website: 'https://www.rockwellautomation.com',
    },
    {
        id: 'siemens',
        name: 'Siemens',
        categories: [
            'Automatyka i Robotyka',
            'Energetyka',
            'Inżynieria i Zarządzanie Procesami Przemysłowymi',
            'Elektronika',
        ],
        sponsorLabel: null,
        shortDescription:
            'Globalny gigant technologiczny działający w obszarach przemysłu, infrastruktury, transportu i opieki zdrowotnej.',
        website: 'https://www.siemens.com',
    },
    {
        id: 'delphi',
        name: 'Delphi Technologies',
        categories: ['Elektronika', 'Inżynieria Mechaniczna', 'Automatyka i Robotyka'],
        sponsorLabel: null,
        shortDescription:
            'Dostawca nowoczesnych rozwiązań napędowych i systemów zarządzania silnikiem dla przemysłu motoryzacyjnego.',
        website: 'https://www.delphi.com',
    },
];
