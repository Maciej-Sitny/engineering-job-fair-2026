import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import StrefahirmTlo from './assets/strefa-firm-tlo.svg';
import Gear1 from '../assets/gears/Subtract (1).svg';
import Gear2 from '../assets/gears/Subtract (2).svg';
import Gear3 from '../assets/gears/Subtract (3).svg';
import Gear4 from '../assets/gears/Subtract (4).svg';
import Gear5 from '../assets/gears/Subtract (5).svg';
import GabrielIwaniuk from '../assets/organizers/Gabriel_Iwaniuk.svg';
import MajaKonopka from '../assets/organizers/Maja_Konopka.svg';
import AgnieszkaPyka from '../assets/organizers/Agnieszka_Pyka.svg';
import NikodemWlodarczyk from '../assets/organizers/Nikodem_Wlodarczyk.svg';
import FRZdjecieGrupowe from './assets/FR-zdjecie-grupowe.svg';
import FacebookIcon from '../footer/assets/Facebook.svg';
import InstagramIcon from '../footer/assets/instagram.svg';
import LinkedinIcon from '../footer/assets/linkedin.svg';

/* ==========================================================================
   BUSINESS ZONE - RESPONSIVE STYLES (Mobile-First Approach)
   
   Progi responsywności:
   - Bazowe style: < 480px (bardzo małe telefony)
   - 481px - 768px: standardowe telefony i małe tablety
   - 769px - 1024px: tablety / małe laptopy
   - 1025px+: duże ekrany / desktop
   ========================================================================== */

/* ==========================================================================
   PAGE CONTAINER
   ========================================================================== */
const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    width: 100%;
    overflow-x: hidden; /* Zapobiega poziomemu scrollowi na mobile */
`;

/* ==========================================================================
   HERO SECTION
   ========================================================================== */
const HeroContainer = styled.section`
    /* --- BASE: Mobile First (< 480px) --- */
    display: flex;
    min-height: 70vh;
    padding: 6rem 1rem 1.5rem;
    background-image: url(${StrefahirmTlo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    font-family: 'Alumni Sans', sans-serif;
    width: 100%;
    box-sizing: border-box;
    position: relative;

    /* --- 481px - 768px: Standardowe telefony --- */
    @media (min-width: 481px) {
        min-height: 80vh;
        padding: 8rem 1.5rem 2rem;
    }

    /* --- 769px - 1024px: Tablety --- */
    @media (min-width: 769px) {
        min-height: 90vh;
        padding: 10rem 2rem 2rem;
    }

    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        min-height: 100vh;
        padding: 12.5rem 3.125rem 1.875rem;
    }
`;

const HeroContent = styled.div`
    z-index: 2;
    text-align: right; /* Poziomo: przy prawej krawędzi */
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Poziomo: przy prawej krawędzi */
    justify-content: center; /* Pionowo: na środku hero */
    width: 100%;
    flex: 1;
    max-width: 100%;
    padding-right: 1rem; /* Odstęp od prawej krawędzi */

    /* --- 769px+: Większy padding na większych ekranach --- */
    @media (min-width: 769px) {
        padding-right: 2rem;
    }

    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding-right: 3rem;
    }
`;

const EditionText = styled.div`
    /* --- BASE: Widoczne od razu, ale mniejsze --- */
    display: flex;
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 700;
    line-height: 0.85;
    color: #f78f27;
    opacity: 0.12;
    font-family: 'Alumni Sans', sans-serif;
    z-index: 1;
    flex-direction: column;
    align-items: flex-start;

    /* --- 481px+: Większe na telefonach --- */
    @media (min-width: 481px) {
        left: 0.5rem;
        opacity: 0.12;
    }

    /* --- 769px+: Bardziej widoczne na tabletach --- */
    @media (min-width: 769px) {
        left: 1rem;
        opacity: 0.15;
    }

    /* --- 1025px+: Pełna widoczność na desktop --- */
    @media (min-width: 1025px) {
        left: 6.25rem;
        opacity: 0.2;
    }
`;

const EditionNumber = styled.div`
    /* --- Skalowanie względne - duży rozmiar na wszystkich ekranach --- */
    font-size: 50vw;
    font-family: 'Alumni Sans', sans-serif;
    font-weight: 500;
    margin: 0;
    line-height: 0.7;

    /* --- 769px+: Trochę mniejszy na tabletach --- */
    @media (min-width: 769px) {
        font-size: 38vw;
    }

    /* --- 1025px+: Pełny rozmiar na desktop --- */
    @media (min-width: 1025px) {
        font-size: 40vw;
    }
`;

const EditionLabel = styled.div`
    /* --- Skalowanie względne - duży rozmiar na wszystkich ekranach --- */
    font-size: 18vw;
    letter-spacing: 0.1vw;
    padding-left: 0.5vw;
    font-family: 'Alumni Sans', sans-serif;
    font-weight: 300;
    line-height: 0.6;
    margin: 0;

    /* --- 769px+: Trochę mniejszy na tabletach --- */
    @media (min-width: 769px) {
        font-size: 14vw;
    }

    /* --- 1025px+: Pełny rozmiar na desktop --- */
    @media (min-width: 1025px) {
        font-size: 15vw;
    }
`;

const HeroTitle = styled.h1`
    /* --- BASE: Responsywny font z clamp --- */
    font-size: clamp(2.5rem, 11vw, 11rem);
    font-weight: 500;
    line-height: 1.1;
    color: #ffffff;
    margin: 0 0 1rem 0;
    font-family: 'Alumni Sans', sans-serif;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 2;
    justify-content: center;
    align-items: center;

    /* --- 769px+: Większy margines na tabletach --- */
    @media (min-width: 769px) {
        margin: 0 0 1.25rem 0;
        line-height: 1.2;
    }
`;

const HeroSubtitle = styled.p`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(1rem, 4vw, 3rem);
    font-weight: 300;
    color: #ffffff;
    margin: 0;
    margin-top: auto;
    line-height: 1.2;
    font-family: 'Alumni Sans', sans-serif;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);

    /* --- 769px+: Lepsza czytelność na większych ekranach --- */
    @media (min-width: 769px) {
        line-height: 1;
    }
`;

/* ==========================================================================
   COUNTER SECTION
   ========================================================================== */
const CounterContainer = styled.div`
    /* --- BASE: Kolumna na mobile --- */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    gap: 2rem;
    margin: 1.5rem 1rem;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;

    /* --- 481px+: Wiersz na większych telefonach --- */
    @media (min-width: 481px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        margin: 2rem;
    }

    /* --- 769px+: Większe odstępy na tabletach --- */
    @media (min-width: 769px) {
        gap: 8vw;
        margin: 2.5rem;
    }

    /* --- 1025px+: Pełne odstępy na desktop --- */
    @media (min-width: 1025px) {
        gap: 15vw;
        margin: 2.5rem;
    }
`;

const CounterSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
`;

const CounterNumber = styled.h3`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(2.5rem, 10vw, 5rem);
    font-weight: 600;
    color: #f78f27;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    padding: 0;
`;

const CounterLabel = styled.p`
    /* --- BASE: Responsywny font z centrowaniem --- */
    font-size: clamp(1rem, 4vw, 2.2rem);
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    padding: 0;
    text-align: center;
`;

/* ==========================================================================
   BECOME EXHIBITOR SECTION
   ========================================================================== */
const BecomeExhibitorContainer = styled.section`
    /* --- BASE: Kolumna na mobile --- */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    background: #fff;
    gap: 2rem;
    position: relative;
    margin: 2rem 1rem;
    width: calc(100% - 2rem);
    max-width: 100%;
    border: 0.1px solid #d1d1d1ff;
    border-radius: 1.25rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    /* --- 481px+: Większy padding --- */
    @media (min-width: 481px) {
        padding: 2.5rem 2rem;
        margin: 3rem 1.5rem;
        width: calc(100% - 3rem);
        border-radius: 1.5rem;
    }

    /* --- 769px+: Wiersz na tabletach --- */
    @media (min-width: 769px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
        margin: 4rem 3rem;
        width: 85%;
        border-radius: 1.875rem;
    }

    /* --- 1025px+: Pełny layout desktop --- */
    @media (min-width: 1025px) {
        padding: 5rem;
        margin: 5rem 6.25rem;
        width: 70%;
    }
`;

const BecomeExhibitorContent = styled.div`
    /* --- BASE: Pełna szerokość na mobile --- */
    flex: 1;
    width: 100%;
    max-width: 100%;

    /* --- 769px+: Ograniczona szerokość --- */
    @media (min-width: 769px) {
        flex: 2;
        max-width: 37.5rem;
    }
`;

const BecomeExhibitorTitle = styled.h2`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(1.75rem, 5vw, 3.125rem);
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 1.25rem 0;
    font-family: 'Alumni Sans', sans-serif;
    line-height: 1.1;

    /* --- 769px+: Większy margines --- */
    @media (min-width: 769px) {
        margin: 0 0 1.875rem 0;
    }
`;

const BecomeExhibitorDescription = styled.p`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(1.125rem, 3vw, 2rem);
    font-weight: 400;
    color: #1e1e1e;
    margin: 0 0 1.5rem 0;
    font-family: 'Alumni Sans', sans-serif;
    line-height: 1.3;

    /* --- 769px+: Większy margines i lepszy line-height --- */
    @media (min-width: 769px) {
        margin: 0 0 2.5rem 0;
        line-height: 1.2;
    }
`;

const StepsList = styled.ol`
    list-style: none;
    counter-reset: step-counter;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* --- 769px+: Większe odstępy --- */
    @media (min-width: 769px) {
        gap: 1.25rem;
    }
`;

const StepItem = styled.li`
    /* --- BASE: Responsywny font --- */
    counter-increment: step-counter;
    font-size: clamp(0.95rem, 2.5vw, 1.375rem);
    font-weight: 400;
    color: #1e1e1e;
    font-family: 'Alumni Sans', sans-serif;
    line-height: 1.3;
    padding-left: 2rem;
    position: relative;

    &::before {
        content: counter(step-counter) ".";
        position: absolute;
        left: 0;
        font-weight: 500;
        color: #1e1e1e;
    }

    /* --- 769px+: Większy padding --- */
    @media (min-width: 769px) {
        padding-left: 2.5rem;
        line-height: 1.1;
    }
`;

const GearsContainer = styled.div`
    /* --- BASE: Ukryte na mobile dla lepszego UX --- */
    display: none;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 15rem;

    /* --- 769px+: Widoczne na tabletach --- */
    @media (min-width: 769px) {
        display: flex;
        min-height: 18.75rem;
    }

    /* --- 1025px+: Pełna wysokość na desktop --- */
    @media (min-width: 1025px) {
        min-height: 25rem;
    }
`;

const GearImage = styled.img<{ size: number; top: string; left: string }>`
    position: absolute;
    /* --- Responsywne rozmiary zębatek --- */
    width: ${props => props.size * 0.5}px;
    height: ${props => props.size * 0.5}px;
    top: ${props => props.top};
    left: ${props => props.left};
    max-width: 100%;

    /* --- 769px+: Większe zębatki --- */
    @media (min-width: 769px) {
        width: ${props => props.size * 0.7}px;
        height: ${props => props.size * 0.7}px;
    }

    /* --- 1025px+: Pełny rozmiar --- */
    @media (min-width: 1025px) {
        width: ${props => props.size}px;
        height: ${props => props.size}px;
    }
`;

/* ==========================================================================
   ORGANIZERS SECTION
   ========================================================================== */
const OrganizersSection = styled.section`
    /* --- BASE: Mniejszy padding na mobile --- */
    padding: 3rem 1rem;
    background: #fff;
    width: 100%;
    box-sizing: border-box;

    /* --- 481px+: Większy padding --- */
    @media (min-width: 481px) {
        padding: 4rem 1.5rem;
    }

    /* --- 769px+: Padding dla tabletów --- */
    @media (min-width: 769px) {
        padding: 5rem 3rem;
    }

    /* --- 1025px+: Pełny padding desktop --- */
    @media (min-width: 1025px) {
        padding: 6.25rem;
    }
`;

const OrganizersTitle = styled.h2`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(1.5rem, 5vw, 3.5rem);
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 2rem 0;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
    padding: 0 1rem;

    /* --- 769px+: Większy margines --- */
    @media (min-width: 769px) {
        margin: 0 0 3.75rem 0;
    }
`;

const OrganizersGrid = styled.div`
    /* --- BASE: 1 kolumna na mobile --- */
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 20rem;
    margin: 0 auto;

    /* --- 481px+: 2 kolumny na większych telefonach --- */
    @media (min-width: 481px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 40rem;
    }

    /* --- 769px+: 2 kolumny z większymi odstępami --- */
    @media (min-width: 769px) {
        gap: 2.5rem;
        max-width: 50rem;
    }

    /* --- 1025px+: 4 kolumny na desktop --- */
    @media (min-width: 1025px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem;
        max-width: 87.5rem;
    }
`;

const OrganizerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    width: 100%;
    min-width: 0;

    /* --- Hover tylko na urządzeniach z myszką --- */
    @media (hover: hover) {
        &:hover {
            transform: translateY(-1.25rem);
        }
    }
`;

const OrganizerVisual = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 3/4;
    margin-bottom: 1rem;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);

    /* --- 769px+: Większy border-radius i cień --- */
    @media (min-width: 769px) {
        margin-bottom: 1.5rem;
        border-radius: 2rem;
        box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);
    }
`;

const OrganizerImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
`;

const OrganizerName = styled.h3`
    /* --- BASE: Responsywny font - 3x większy --- */
    font-size: clamp(2rem, 8vw, 2.5rem);
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 0.25rem 0;
    letter-spacing: 0.5px;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
`;

const OrganizerRole = styled.p`
    /* --- BASE: Responsywny font - 3x większy --- */
    font-size: clamp(1.5rem, 6vw, 1.75rem);
    font-weight: 500;
    color: #f78f27;
    margin: 0 0 0.5rem 0;
    letter-spacing: 0.5px;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
`;

const OrganizerPhone = styled.p`
    /* --- BASE: Responsywny font - 3x większy --- */
    font-size: clamp(1.5rem, 5vw, 1.75rem);
    color: #1e1e1e;
    margin: 0 0 0.25rem 0;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
`;

const OrganizerEmail = styled.p`
    /* --- BASE: Responsywny font - 3x większy --- */
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
    word-break: break-word;
    overflow-wrap: break-word;
`;

/* ==========================================================================
   SOCIAL MEDIA SECTION
   ========================================================================== */
const SocialMediaSection = styled.section`
    /* --- BASE: Mniejszy padding na mobile --- */
    padding: 3rem 1rem;
    background: #fff;
    width: 100%;
    box-sizing: border-box;

    /* --- 481px+: Większy padding --- */
    @media (min-width: 481px) {
        padding: 4rem 1.5rem;
    }

    /* --- 769px+: Padding dla tabletów --- */
    @media (min-width: 769px) {
        padding: 5rem 3rem;
    }

    /* --- 1025px+: Pełny padding desktop --- */
    @media (min-width: 1025px) {
        padding: 6.25rem;
    }
`;

const SocialMediaTitle = styled.h2`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(1.5rem, 5vw, 3.5rem);
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 2rem 0;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;

    /* --- 769px+: Większy margines --- */
    @media (min-width: 769px) {
        margin: 0 0 3.75rem 0;
    }
`;

const SocialMediaContent = styled.div`
    /* --- BASE: Kolumna odwrócona na mobile (tekst najpierw) --- */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    max-width: 87.5rem;
    margin: 0 auto;

    /* --- 481px+: Większy gap --- */
    @media (min-width: 481px) {
        gap: 2.5rem;
    }

    /* --- 769px+: Wiersz na tabletach --- */
    @media (min-width: 769px) {
        flex-direction: row;
        gap: 3rem;
    }

    /* --- 1025px+: Pełny gap desktop --- */
    @media (min-width: 1025px) {
        gap: 5rem;
    }
`;

const SocialMediaImageContainer = styled.div`
    /* --- BASE: Pełna szerokość na mobile --- */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const SocialMediaImage = styled.img`
    /* --- BASE: Responsywny obrazek --- */
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 1rem;

    /* --- 769px+: Większy max-width --- */
    @media (min-width: 769px) {
        max-width: 37.5rem;
    }
`;

const SocialMediaTextContainer = styled.div`
    /* --- BASE: Pełna szerokość na mobile --- */
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    /* --- 769px+: Większy gap --- */
    @media (min-width: 769px) {
        gap: 1.5rem;
    }
`;

const SocialMediaSubtitle = styled.h3`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(1.25rem, 4vw, 2.5rem);
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    line-height: 1.2;
`;

const SocialMediaDescription = styled.p`
    /* --- BASE: Responsywny font --- */
    font-size: clamp(0.9rem, 2vw, 1.25rem);
    font-weight: 400;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    line-height: 1.5;
`;

const SocialMediaLinks = styled.div`
    /* --- BASE: Linki w kolumnie --- */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;

    /* --- 769px+: Większy gap i margines --- */
    @media (min-width: 769px) {
        gap: 1.25rem;
        margin-top: 1.25rem;
    }
`;

const SocialMediaLink = styled.a`
    /* --- BASE: Responsywny font --- */
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: #1e1e1e;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: 500;
    font-family: 'Alumni Sans', sans-serif;
    transition: color 0.3s ease;

    /* --- Większy gap na większych ekranach --- */
    @media (min-width: 769px) {
        gap: 1rem;
    }

    /* --- Hover tylko na urządzeniach z myszką --- */
    @media (hover: hover) {
        &:hover {
            color: #f78f27;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }

    /* --- Aktywny stan dla mobile (dotknięcie) --- */
    &:active {
        color: #f78f27;
    }
`;

const SocialIcon = styled.img`
    /* --- BASE: Responsywna ikona --- */
    width: clamp(1.75rem, 5vw, 2.5rem);
    height: clamp(1.75rem, 5vw, 2.5rem);
    filter: brightness(0);
    transition: transform 0.3s ease;
`;

export default function BusinessZone() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    const organizers = [
        {
            id: 'gabriel-iwaniuk',
            name: 'Gabriel Iwaniuk',
            role: 'Koordynator ds. Kontaktu z Firmami',
            phone: '663 971 716',
            email: 'gabriel.iwaniuk@BEST.krakow.pl',
            image: GabrielIwaniuk,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
        },
        {
            id: 'maja-konopka',
            name: 'Maja Konopka',
            role: 'Koordynator ds. Kontaktu z Firmami',
            phone: '518 118 158',
            email: 'maja.konopka@BEST.krakow.pl',
            image: MajaKonopka,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
        },
        {
            id: 'agnieszka-pyka',
            name: 'Agnieszka Pyka',
            role: 'Koordynator ds. Kontaktu z Firmami',
            phone: '609 966 816',
            email: 'agnieszka.pyka@BEST.krakow.pl',
            image: AgnieszkaPyka,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
        },
        {
            id: 'nikodem-wlodarczyk',
            name: 'Nikodem Włodarczyk',
            role: 'Koordynator ds. Kontaktu z Firmami',
            phone: '502 724 542',
            email: 'nikodem.wlodarczyk@BEST.krakow.pl',
            image: NikodemWlodarczyk,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounter(setCounter1, 30, 2000);
                        animateCounter(setCounter2, 200, 2000);
                        animateCounter(setCounter3, 60, 2000);

                        // Zatrzymaj obserwację po pierwszej animacji
                        if (counterRef.current) {
                            observer.unobserve(counterRef.current);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current && !hasAnimated) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOutQuad * target);
            setter(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setter(target);
            }
        };
        requestAnimationFrame(animate);
    };

    return (
        <Page>
            <HeroContainer>
                <EditionText>
                    <EditionNumber>28</EditionNumber>
                    <EditionLabel>edycja</EditionLabel>
                </EditionText>
                <HeroContent>
                    <HeroTitle>Inżynierskie Targi Pracy</HeroTitle>
                    <HeroSubtitle>
                        Sprawdź jak dołączyć do grona <br /> naszych Wystawców
                    </HeroSubtitle>
                </HeroContent>
            </HeroContainer>
            <CounterContainer ref={counterRef}>
                <CounterSubContainer>
                    <CounterNumber>{counter1}</CounterNumber>
                    <CounterLabel>Liczba Firm</CounterLabel>
                </CounterSubContainer>
                <CounterSubContainer>
                    <CounterNumber>{counter2}</CounterNumber>
                    <CounterLabel>Liczba Odwiedzających</CounterLabel>
                </CounterSubContainer>
                <CounterSubContainer>
                    <CounterNumber>{counter3}</CounterNumber>
                    <CounterLabel>Liczba nwm czego</CounterLabel>
                </CounterSubContainer>
            </CounterContainer>
            <BecomeExhibitorContainer>
                <BecomeExhibitorContent>
                    <BecomeExhibitorTitle>
                        Jak zostać Wystawcą - krok po kroku
                    </BecomeExhibitorTitle>
                    <BecomeExhibitorDescription>
                        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </BecomeExhibitorDescription>
                    <StepsList>
                        <StepItem>
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </StepItem>
                        <StepItem>
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </StepItem>
                        <StepItem>
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </StepItem>
                        <StepItem>
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </StepItem>
                    </StepsList>
                </BecomeExhibitorContent>
                <GearsContainer>
                    <GearImage src={Gear1} size={130} top="90%" left="64%" style={{ transform: 'translate(-50%, -50%)' }} />
                    <GearImage src={Gear2} size={120} top="13%" left="84%" /> //
                    <GearImage src={Gear3} size={140} top="60%" left="25%" /> //
                    <GearImage src={Gear4} size={290} top="0%" left="38%" /> //
                    <GearImage src={Gear5} size={190} top="50%" left="76%" /> //
                    <GearImage src={Gear1} size={100} top="95%" left="17%" style={{ transform: 'translate(-50%, -50%)' }} />

                </GearsContainer>
            </BecomeExhibitorContainer>
            <OrganizersSection>
                <OrganizersTitle>Skontaktuj się z naszymi przedstawicielami</OrganizersTitle>
                <OrganizersGrid>
                    {organizers.map((organizer) => (
                        <OrganizerCard key={organizer.id}>
                            <OrganizerVisual>
                                <OrganizerImage
                                    src={organizer.image}
                                    alt={organizer.name}
                                />
                            </OrganizerVisual>
                            <OrganizerName>{organizer.name}</OrganizerName>
                            <OrganizerRole>{organizer.role}</OrganizerRole>
                            <OrganizerPhone>{organizer.phone}</OrganizerPhone>
                            <OrganizerEmail>{organizer.email}</OrganizerEmail>
                        </OrganizerCard>
                    ))}
                </OrganizersGrid>
            </OrganizersSection>
            <SocialMediaSection>
                <SocialMediaTitle>Odwiedź nasze social media</SocialMediaTitle>
                <SocialMediaContent>
                    <SocialMediaImageContainer>
                        <SocialMediaImage src={FRZdjecieGrupowe} alt="Zespół Inżynierskich Targów Pracy" />
                    </SocialMediaImageContainer>
                    <SocialMediaTextContainer>
                        <SocialMediaSubtitle>Dołącz do naszej społeczności, aby być na bieżąco!</SocialMediaSubtitle>
                        <SocialMediaDescription>
                            Dołącz do naszych social mediów i zobacz, co dzieje się u nas na co dzień. Publikujemy krótkie wskazówki, kulisy projektów, zapowiedzi nowych funkcji i materiały, których nie znajdziesz nigdzie indziej.
                        </SocialMediaDescription>
                        <SocialMediaDescription>
                            Obserwuj nas, jeśli chcesz szybciej łapać nowości i mieć realny wpływ na to, co tworzymy.
                        </SocialMediaDescription>
                        <SocialMediaLinks>
                            <SocialMediaLink href="https://www.facebook.com/BEST.itp" target="_blank" rel="noopener noreferrer">
                                <SocialIcon src={FacebookIcon} alt="Facebook" />
                                Inżynierskie Targi Pracy
                            </SocialMediaLink>
                            <SocialMediaLink href="https://www.instagram.com/itp_best/" target="_blank" rel="noopener noreferrer">
                                <SocialIcon src={InstagramIcon} alt="Instagram" />
                                Inżynierskie Targi Pracy
                            </SocialMediaLink>
                            <SocialMediaLink href="https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/" target="_blank" rel="noopener noreferrer">
                                <SocialIcon src={LinkedinIcon} alt="LinkedIn" />
                                Inżynierskie Targi Pracy
                            </SocialMediaLink>
                        </SocialMediaLinks>
                    </SocialMediaTextContainer>
                </SocialMediaContent>
            </SocialMediaSection>
        </Page>
    );
}
