export type WorkMode = 'Stacjonarny' | 'Zdalny' | 'Hybrydowy';
export type EmploymentType = 'Pełny etat' | 'Pół etatu' | 'Staż' | 'Umowa zlecenie';

export const ALL_WORK_MODES: WorkMode[] = ['Stacjonarny', 'Zdalny', 'Hybrydowy'];
export const ALL_EMPLOYMENT_TYPES: EmploymentType[] = [
    'Pełny etat',
    'Pół etatu',
    'Staż',
    'Umowa zlecenie',
];

export interface JobOffer {
    id: string;
    exhibitionerId: string;
    companyName: string;
    title: string;
    workMode: WorkMode;
    employmentType: EmploymentType;
    location: string;
    applyUrl?: string;
}

export const JOB_OFFERS: JobOffer[] = [
    {
        id: 'aptiv-1',
        exhibitionerId: 'aptiv',
        companyName: 'Aptiv',
        title: 'Software Engineer',
        workMode: 'Hybrydowy',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.aptiv.com/careers',
    },
    {
        id: 'aptiv-2',
        exhibitionerId: 'aptiv',
        companyName: 'Aptiv',
        title: 'Embedded Systems Developer',
        workMode: 'Stacjonarny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.aptiv.com/careers',
    },
    {
        id: 'aptiv-3',
        exhibitionerId: 'aptiv',
        companyName: 'Aptiv',
        title: 'Stażysta – Automatyka',
        workMode: 'Stacjonarny',
        employmentType: 'Staż',
        location: 'Kraków',
        applyUrl: 'https://www.aptiv.com/careers',
    },
    {
        id: 'woodward-1',
        exhibitionerId: 'woodward',
        companyName: 'Woodward',
        title: 'Controls Engineer',
        workMode: 'Hybrydowy',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.woodward.com/careers',
    },
    {
        id: 'woodward-2',
        exhibitionerId: 'woodward',
        companyName: 'Woodward',
        title: 'Mechanical Design Engineer',
        workMode: 'Stacjonarny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.woodward.com/careers',
    },
    {
        id: 'ge-healthcare-1',
        exhibitionerId: 'ge-healthcare',
        companyName: 'GE Healthcare',
        title: 'Biomedical Engineer',
        workMode: 'Hybrydowy',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.gehealthcare.com/careers',
    },
    {
        id: 'ge-healthcare-2',
        exhibitionerId: 'ge-healthcare',
        companyName: 'GE Healthcare',
        title: 'Software Developer – Medical Devices',
        workMode: 'Zdalny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.gehealthcare.com/careers',
    },
    {
        id: 'ibm-1',
        exhibitionerId: 'ibm',
        companyName: 'IBM',
        title: 'Cloud Solutions Architect',
        workMode: 'Zdalny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.ibm.com/careers',
    },
    {
        id: 'ibm-2',
        exhibitionerId: 'ibm',
        companyName: 'IBM',
        title: 'AI/ML Engineer',
        workMode: 'Hybrydowy',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.ibm.com/careers',
    },
    {
        id: 'motorola-solutions-1',
        exhibitionerId: 'motorola-solutions',
        companyName: 'Motorola Solutions',
        title: 'Java Software Engineer',
        workMode: 'Hybrydowy',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.motorolasolutions.com/careers',
    },
    {
        id: 'motorola-solutions-2',
        exhibitionerId: 'motorola-solutions',
        companyName: 'Motorola Solutions',
        title: 'QA Automation Engineer',
        workMode: 'Zdalny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.motorolasolutions.com/careers',
    },
    {
        id: 'pega-1',
        exhibitionerId: 'pega',
        companyName: 'Pega',
        title: 'Platform Engineer',
        workMode: 'Hybrydowy',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.pega.com/careers',
    },
    {
        id: 'siemens-1',
        exhibitionerId: 'siemens',
        companyName: 'Siemens',
        title: 'Automation & Robotics Intern',
        workMode: 'Stacjonarny',
        employmentType: 'Staż',
        location: 'Kraków',
        applyUrl: 'https://www.siemens.com/careers',
    },
    {
        id: 'siemens-2',
        exhibitionerId: 'siemens',
        companyName: 'Siemens',
        title: 'Electrical Engineer',
        workMode: 'Stacjonarny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.siemens.com/careers',
    },
    {
        id: 'abb-1',
        exhibitionerId: 'abb',
        companyName: 'ABB',
        title: 'Robotics Application Engineer',
        workMode: 'Stacjonarny',
        employmentType: 'Pełny etat',
        location: 'Kraków',
        applyUrl: 'https://www.abb.com/careers',
    },
];
