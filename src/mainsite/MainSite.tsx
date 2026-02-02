import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Gear1 from '../assets/gears/Subtract.svg';
import Gear2 from '../assets/gears/Subtract (1).svg';
import Gear3 from '../assets/gears/Subtract (2).svg';
import Gear4 from '../assets/gears/Subtract (3).svg';
import Gear5 from '../assets/gears/Subtract (4).svg';
import Gear6 from '../assets/gears/Subtract (5).svg';
import Gear7 from '../assets/gears/Subtract (6).svg';
import GearWithPeople from './assets/GearWithPeople.svg';
import GearWithBackground from './assets/GearWithBackground.svg';
import ITPMap from './assets/mapa_targow.svg';
import WoodwardLogo from './assets/sponsors/woodward_logo.svg';
import AptivLogo from './assets/sponsors/aptiv_logo.svg';
import AllInUJ from './assets/sponsors/all_in_uj_logo.svg';
import GEHealthcareLogo from './assets/sponsors/ge_healthcare_logo.svg';
import IBMLogo from './assets/sponsors/ibm_logo.svg';
import SponsorsCarousel from './SponsorsCarousel';
import GabrielIwaniuk from '../assets/organizers/Gabriel_Iwaniuk.svg';
import NikodemSzafran from '../assets/organizers/Nikodem_Szafran.svg';
import ZofiaPalarz from '../assets/organizers/Zofia_Palarz.svg';
const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    position: relative;
    overflow: hidden;
    font-family: 'Alumni Sans', sans-serif;
    width: 100%;
    box-sizing: border-box;
    
    /* --- BASE: Mobile First --- */
    @media (max-width: 481px) {
    flex-direction: row;
    padding: 6rem 1rem;
    min-height: 50vh;
    align-items: flex-start;
    }   
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        padding: 3rem 1.5rem;
        align-items: center;
        min-height: 100vh;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        padding: 5rem 2rem 2rem;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding: 150px 60px 30px;
        min-height: 100vh;
    }
`;

const HeroContent = styled.div`
    flex: 0;
    width: auto;
    z-index: 2;
    
    /* --- BASE: Mobile First --- */
    padding-left: 10px;
    text-align: left;
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        padding-left: 20px;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding-left: 40px;
    }
`;

const HeroTitle = styled.h1`
    font-weight: 500;
    line-height: 0.8;
    color: #1e1e1e;
    margin: 0 0 20px 0;
    letter-spacing: -0.5px;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(3rem, 15vw, 5rem);
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(4rem, 12vw, 6rem);
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(5rem, 10vw, 8rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 170px;
    }
`;

const OrganizersContainer = styled.section`
    background: #fff;
    text-align: center;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    padding: 3rem 1rem;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        padding: 4rem 1.5rem;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        padding: 5rem 2rem;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding: 80px 60px;
    }
`;

const OrganizersTitle = styled.h2`
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 60px 0;
    letter-spacing: 0.5px;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    margin-bottom: 2rem;
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.75rem, 4vw, 2.25rem);
        margin-bottom: 3rem;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 38px;
        margin-bottom: 60px;
    }
`;

const CardsContainer = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    margin: 0 auto;
    
    /* --- BASE: Mobile First --- */
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 18rem;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        max-width: 20rem;
        gap: 2.5rem;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        grid-template-columns: repeat(3, 160px);
        gap: 1rem;
        max-width: none;
    }
    
    /* --- 900px+: Trochę większe --- */
    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 200px);
        gap: 1.5rem;
    }
    
    /* --- 1200px+: Desktop --- */
    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 320px);
        gap: 40px;
        max-width: 1400px;
    }
`;

const OrganizerCard = styled.div<{ isMiddle?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    
    /* --- BASE: Mobile First --- */
    width: 100%;
    transform: translateY(0);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        width: 160px;
    }
    
    /* --- 900px+: Trochę większe --- */
    @media (min-width: 900px) {
        width: 200px;
    }
    
    /* --- 1200px+: Desktop --- */
    @media (min-width: 1200px) {
        width: 320px;
        transform: ${props => props.isMiddle ? 'translateY(-40px)' : 'translateY(0)'};
    }

    @media (hover: hover) {
        &:hover {
            transform: ${props => props.isMiddle ? 'translateY(-60px)' : 'translateY(-20px)'};
        }
    }
`;

const OrganizerImage = styled.img`
    width: 100%;
    border-radius: 1.5rem;
    object-fit: cover;
    
    /* --- BASE: Mobile First --- */
    aspect-ratio: 3/4;
    height: auto;
    margin-bottom: 1rem;
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        border-radius: 2rem;
        margin-bottom: 1.5rem;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        height: 60vh;
        aspect-ratio: unset;
        border-radius: 32px;
        margin-bottom: 24px;
    }
`;

const OrganizerName = styled.h3`
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 1px 0;
    letter-spacing: 0.5px;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.1rem, 2.5vh, 1.5rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 5.5vh;
    }
`;

const OrganizerRole = styled.p`
    font-weight: 500;
    color: #f78f27;
    margin: 0 0 0px 0;
    letter-spacing: 0.5px;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(0.85rem, 1.8vh, 1.2rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 3.6vh;
    }
`;

const OrganizerPhone = styled.p`
    color: #1e1e1e;
    margin: 0 0 0px 0;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(0.85rem, 1.8vh, 1.2rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 3.6vh;
    }
`;

const OrganizerEmail = styled.p`
    color: #1e1e1e;
    margin: 0;
    word-break: break-word;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.1rem, 4.5vw, 1.5rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(0.75rem, 1.6vh, 1.1rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 3.6vh;
    }
`;

const HeroSubtitle = styled.p`
    font-weight: 500;
    color: #f78f27;
    margin: 0;
    letter-spacing: 0.5px;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(1.5rem, 4vw, 2rem);
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.75rem, 3vw, 2.5rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 40px;
    }
`;

const HeroSubtitleHour = styled.p`
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    letter-spacing: 0.5px;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.25rem, 5vw, 1.75rem);
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(1.5rem, 4vw, 2rem);
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.75rem, 3vw, 2.5rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 40px;
    }
`;

const SubtitleContainer = styled.div`
    display: flex;
    
    /* --- BASE: Mobile First --- */
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        gap: 1rem;
        justify-content: flex-start;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        gap: 24px;
    }
`;

const HeroRightSection = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    
    /* --- BASE: Mobile First --- */
    height: 250px;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        height: 300px;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        height: 400px;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        height: 600px;
    }
`;

const MobileGearsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
    
    /* Ukryte - gears są teraz w HeroRightSection */
    display: none;
`;

const GearWrapper = styled.div<{
    size: number;
    top: number;
    left: number;
    delay?: number;
    reverse?: boolean;
}>`
    position: absolute;
    left: ${props => props.left}%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-out;
    
    /* --- BASE: Mobile First --- */
    width: ${props => props.size * 1.1}vw;
    height: ${props => props.size * 1.1}vw;
    top: calc(50% + ${props => (props.top - 20) * 0.7}%);
    left: ${props => props.left * 1.4 - 38}%;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        width: ${props => props.size * 0.75}vw;
        height: ${props => props.size * 0.75}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.5}%);
        left: ${props => props.left * 0.9}%;
    }

    /* --- 481px+: Większe telefony --- */
    @media (min-width: 600px) {
        width: ${props => props.size * 0.75}vw;
        height: ${props => props.size * 0.75}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.6}%);
        left: ${props => props.left * 0.9}%;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        width: ${props => props.size * 0.9}vw;
        height: ${props => props.size * 0.9}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.70}%);
        left: ${props => props.left * 0.9}%;
    }
    
    /* --- 1025px+: 50% rozmiaru --- */
    @media (min-width: 1025px) {
        display: flex;
        width: ${props => props.size * 0.7}vw;
        height: ${props => props.size * 0.7}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.55}%);
        left: ${props => props.left * 0.95}%;
    }
    
    /* --- 1200px+: 65% rozmiaru --- */
    @media (min-width: 1200px) {
        width: ${props => props.size * 0.85}vw;
        height: ${props => props.size * 0.85}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.70}%);
        left: ${props => props.left * 0.9}%;
    }
    
    /* --- 1400px+: 80% rozmiaru --- */
    @media (min-width: 1400px) {
        width: ${props => props.size * 0.85}vw;
        height: ${props => props.size * 0.85}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.8}%);
        left: ${props => props.left * 0.9}%;
    }
    
    /* --- 1600px+: Pełny rozmiar --- */
    @media (min-width: 1600px) {
        width: ${props => props.size}vw;
        height: ${props => props.size}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.98}%);
        left: ${props => props.left * 0.9}%;
    }
        
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const WhoGearWrapper = styled.div<{
    size: number;
    top: number;
    left: number;
    delay?: number;
    reverse?: boolean;
}>`
    position: absolute;
    left: ${props => props.left}%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-out;
    
    /* --- BASE: Mobile First --- */
    display:none;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        width: ${props => props.size * 1}vw;
        height: ${props => props.size * 1}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.8}%);
        left: ${props => props.left * 0.85}%;
    }

    /* --- 600px+: Większe telefony --- */
    @media (min-width: 600px) {
        width: ${props => props.size * 0.93}vw;
        height: ${props => props.size * 0.93}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.9}%);
        left: ${props => props.left * 0.8}%;
    }
    
 /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        width: ${props => props.size * 0.9}vw;
        height: ${props => props.size * 0.9}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.7}%);
        left: ${props => props.left * 0.8}%;
    }

    /* --- 769px+: Tablety --- */
    @media (min-width: 900px) {
        width: ${props => props.size * 0.9}vw;
        height: ${props => props.size * 0.9}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.83}%);
        left: ${props => props.left * 0.85}%;
    }
    
    /* --- 1025px+: 50% rozmiaru --- */
    @media (min-width: 1025px) {
        display: flex;
        width: ${props => props.size * 0.8}vw;
        height: ${props => props.size * 0.8}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.55}%);
        left: ${props => props.left * 0.95}%;
    }
    
    /* --- 1200px+: 65% rozmiaru --- */
    @media (min-width: 1200px) {
        width: ${props => props.size * 0.85}vw;
        height: ${props => props.size * 0.85}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.65}%);
        left: ${props => props.left * 0.9}%;
    }
    
    /* --- 1400px+: 80% rozmiaru --- */
    @media (min-width: 1400px) {
        width: ${props => props.size * 0.85}vw;
        height: ${props => props.size * 0.85}vw;
        top: calc(50% + ${props => (props.top - 50) * 0.75}%);
        left: ${props => props.left * 0.9}%;
    }
    
    /* --- 1600px+: Pełny rozmiar --- */
    @media (min-width: 1600px) {
        width: ${props => props.size}vw;
        height: ${props => props.size}vw;
        top: calc(50% + ${props => (props.top - 50) * 1.1}%);
        left: ${props => props.left * 0.9}%;
    }
        
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const MobileGearWrapper = styled.div<{
    size: number;
    top: number;
    left: number;
}>`
    position: absolute;
    width: ${props => props.size}vw;
    height: ${props => props.size}vw;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.85;
        
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const LocationText = styled.p`
    font-weight: 500;
    letter-spacing: 0.9px;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    position: absolute;
    text-align: right;
    line-height: 0.7;
    right: 10px;

    @media (max-width: 401px) {
        font-size: clamp(0.7rem, 10vw, 6rem);
        bottom: -20px;
    }

    @media (min-width: 401px) {
        font-size: clamp(0.7rem, 5vw, 3rem);
        bottom: 100px;
    }

    /* --- BASE: Mobile First --- */
    @media (max-width: 481px) {
        font-size: clamp(0.7rem, 5vw, 3rem);
        bottom: -80px;
    }
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(0.9rem, 5vw, 1.4rem);
        right: 15px;
        bottom: 0;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        right: 20px;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 40px;
        right: 40px;
        bottom: 70px;
    }
`;

const MobileLocationText = styled.div`
    text-align: center;
    margin-top: 0rem;
    
    /* Ukryte - LocationText jest teraz w widocznym HeroRightSection */
    display: none;
`;

const AddressText = styled.p`
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #1e1e1e;
    margin: 8px 0 0 0;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(0.55rem, 4vw, 2.5rem);
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(0.7rem, 3vw, 2rem);
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.25rem, 2vw, 1.75rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 30px;
    }
`;

const WhoContainer = styled.section`
    position: relative;
    overflow: hidden;
    background: #fff;
    display: flex;
    text-align: justify;
    
    /* --- BASE: Mobile First --- */
    flex-direction: row;
    padding: 4rem 1.5rem 3rem;
    align-items: center;
    justify-content: space-between;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        padding: 5rem 2rem 4rem;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        padding: 8rem 5vw 6rem;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding: 200px 13vw 160px;
    }
`;

const DecorativeGear = styled.img<{
    size: number;
    top: number;
    left: number;
}>`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    
    /* --- BASE: Ukryte poniżej 1025px --- */
    display: none;
    
    /* --- 1025px+: 50% rozmiaru --- */
    @media (min-width: 1025px) {
        display: block;
        opacity: 0.7;
        width: ${props => props.size * 0.5}px;
        height: ${props => props.size * 0.5}px;
    }
    
    /* --- 1200px+: 65% rozmiaru --- */
    @media (min-width: 1200px) {
        opacity: 0.8;
        width: ${props => props.size * 0.65}px;
        height: ${props => props.size * 0.65}px;
    }
    
    /* --- 1400px+: 80% rozmiaru --- */
    @media (min-width: 1400px) {
        opacity: 0.9;
        width: ${props => props.size * 0.8}px;
        height: ${props => props.size * 0.8}px;
    }
    
    /* --- 1600px+: Pełny rozmiar --- */
    @media (min-width: 1600px) {
        opacity: 1;
        width: ${props => props.size}px;
        height: ${props => props.size}px;
    }
`;

const MobileDecorativeGear = styled.img<{
    size: number;
    top: number;
    left: number;
}>`
    position: absolute;
    width: ${props => props.size}vw;
    height: ${props => props.size}vw;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    opacity: 0.12;
    pointer-events: none;
    
    /* Ukryte - WhoRightSection jest teraz widoczny */
    display: none;
`;

const WhoLeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    
    /* --- BASE: Mobile First --- */
    width: 100%;
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        width: auto;
    }
`;

const WhoTitle = styled.h2`
    font-weight: 500;
    color: #1e1e1e;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    margin: 0 0 0.75rem 0;
    text-align: left;
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin: 0 0 1.5rem 0;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 64px;
        margin: 0 0 20px 0;
    }
`;

const WhoContent = styled.p`
    font-weight: 400;
    color: #1e1e1e;
    margin: 0;
    line-height: 1.3;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1rem, 4vw, 1.25rem);
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(1rem, 3vw, 1.25rem);
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1rem, 3vw, 2rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 20px;
    }
`;

const WhoRightSection = styled.div`
    flex: 1;
    position: relative;
    
    /* --- BASE: Mobile First --- */
    display: block;
    height: 200px;
    display:none;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        height: 280px;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        height: 400px;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        height: 600px;
    }
`;


const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    
    /* --- BASE: Mobile First --- */
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 1rem;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        gap: 2.5rem;
        padding: 4rem 1.5rem;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        flex-direction: row;
        gap: 8vw;
        padding: 5rem 2rem;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        gap: 15vw;
        padding-top: 80px;
    }
`;

const CounterSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
`;

const CounterNumber = styled.h3`
    font-weight: 500;
    color: #f78f27;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    padding: 0;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(3rem, 15vw, 5rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(3.5rem, 8vw, 5rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 80px;
    }
`;

const CounterLabel = styled.p`
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    padding: 0;
    text-align: center;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1.25rem, 5vw, 2rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.25rem, 3vw, 2rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 35px;
    }
`;

const MapContainer = styled.section`
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3vh 60px;
    /* --- BASE: Mobile First --- */
    min-height: auto;
    width: 90%;
    margin: 2vh auto 10vh;
    padding: 0 10px 5rem 0.5rem;

    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        padding: 0 35px 5rem 1rem;
        width: 95%;
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        padding: 0 5% 10vh 5%;
        height: 500px;
        max-width: 90%;
        margin: 0 auto;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding: 0 5% 20vh 5%;
        height: 480px;
        max-width: 80%;
        margin: 0 auto;
    }

        /* --- 1025px+: Desktop --- */
    @media (min-width: 1400px) {
        padding: 0 5% 20vh 5%;
        height: 480px;
        max-width: 80%;
        margin: 5vh auto;
    }

        /* --- 1025px+: Desktop --- */
    @media (min-width: 1750px) {
        padding: 0 5% 20vh 5%;
        height: 480px;
        max-width: 80%;
        margin: 13vh auto;
    }

    img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

const MapTitle = styled.h1`
    font-weight: 500;
    color: #1e1e1e;
    margin: 30px 0 0vh 0;
    text-align: center;
    font-family: 'Alumni Sans', sans-serif;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1rem, 6vw, 3rem);
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(2.5rem, 5vw, 4rem);
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 64px;
    }
`;

const CarouselTitle = styled.h3`
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
    background: #fff;
    
    /* --- BASE: Mobile First --- */
    font-size: clamp(1rem, 8vw, 1.5rem);
    padding: 0 1rem;
    
    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        font-size: clamp(1.25rem, 3.5vw, 1.75rem);
    }
    
    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        font-size: clamp(1.5rem, 3vw, 2.25rem);
        padding: 0;
    }
    
    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        font-size: 38px;
    }
`;

function MainSite() {
    const gearRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollFactor = scrollY * 0.1;

            gearRefs.current.forEach((gear, index) => {
                if (gear) {
                    const isReverse = index % 2 === 0;
                    const rotation = isReverse ? -scrollFactor : scrollFactor;
                    gear.style.transform = `rotate(${rotation}deg)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounter(setCounter1, 30, 2000);
                        animateCounter(setCounter2, 200, 2000);
                        animateCounter(setCounter3, 60, 2000);

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

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, []);

    return (
        <>
            <SEO
                title="Inżynierskie Targi Pracy 2026 | 11 marca | Kraków"
                description="28. edycja Inżynierskich Targów Pracy w Krakowie. Poznaj pracodawców z branży IT, inżynierii i technologii. 11 marca 2026, Stadion Miejski im. Henryka Reymana. Wstęp wolny!"
                canonicalUrl="https://itp.best.krakow.pl/"
            />
            <HeroContainer>
                <MobileGearsContainer>
                    <MobileGearWrapper size={35} top={5} left={50}>
                        <img src={Gear1} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                    <MobileGearWrapper size={22} top={35} left={70}>
                        <img src={Gear4} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                    <MobileGearWrapper size={18} top={20} left={-5}>
                        <img src={Gear3} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                    <MobileGearWrapper size={12} top={55} left={5}>
                        <img src={Gear2} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                    <MobileGearWrapper size={14} top={60} left={80}>
                        <img src={Gear5} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                    <MobileGearWrapper size={10} top={75} left={25}>
                        <img src={Gear6} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                    <MobileGearWrapper size={8} top={80} left={60}>
                        <img src={Gear7} alt="" aria-hidden="true" />
                    </MobileGearWrapper>
                </MobileGearsContainer>

                <HeroContent>
                    <HeroTitle>Inżynierskie<br />Targi Pracy</HeroTitle>
                    <SubtitleContainer><HeroSubtitle>11 MARCA 2026</HeroSubtitle><HeroSubtitleHour> 10:00-16:00</HeroSubtitleHour></SubtitleContainer>
                </HeroContent>

                <MobileLocationText>
                    <LocationText>
                        Stadion Miejski im. Henryka Reymana<br />
                        <AddressText>ul. Reymonta 20, 30-059 Kraków</AddressText>
                    </LocationText>
                </MobileLocationText>

                <HeroRightSection>
                    <GearWrapper size={13} top={46} left={65} ref={(el) => { gearRefs.current[0] = el; }}>
                        <img src={Gear4} alt="" aria-hidden="true" />
                    </GearWrapper>
                    <GearWrapper size={6.7} top={30} left={85} ref={(el) => { gearRefs.current[1] = el; }}>
                        <img src={Gear2} alt="" aria-hidden="true" />
                    </GearWrapper>
                    <GearWrapper size={10.5} top={35} left={24} reverse ref={(el) => { gearRefs.current[2] = el; }}>
                        <img src={Gear3} alt="" aria-hidden="true" />
                    </GearWrapper>
                    <GearWrapper size={8.25} top={53} left={45} reverse ref={(el) => { gearRefs.current[3] = el; }}>
                        <img src={Gear5} alt="" aria-hidden="true" />
                    </GearWrapper>
                    <GearWrapper size={5.5} top={68} left={34} reverse ref={(el) => { gearRefs.current[4] = el; }}>
                        <img src={Gear6} alt="" aria-hidden="true" />
                    </GearWrapper>
                    <GearWrapper size={4.7} top={60} left={15} ref={(el) => { gearRefs.current[5] = el; }}>
                        <img src={Gear7} alt="" aria-hidden="true" />
                    </GearWrapper>
                    <GearWrapper size={22.2} top={-17} left={40} ref={(el) => { gearRefs.current[6] = el; }}>
                        <img src={Gear1} alt="" aria-hidden="true" />
                    </GearWrapper>

                    <LocationText>
                        Stadion Miejski im. Henryka Reymana<br />
                        <AddressText>ul. Reymonta 20, 30-059 Kraków</AddressText>
                    </LocationText>
                </HeroRightSection>
            </HeroContainer>

            <WhoContainer>
                {/* Desktop decorative gears */}
                <DecorativeGear src={Gear4} size={70} top={0} left={360} alt="" aria-hidden="true" />
                <DecorativeGear src={Gear5} size={110} top={0} left={230} alt="" aria-hidden="true" />
                <DecorativeGear src={Gear6} size={230} top={75} left={40} alt="" aria-hidden="true" />
                <DecorativeGear src={Gear3} size={140} top={90} left={300} alt="" aria-hidden="true" />
                <DecorativeGear src={Gear3} size={100} top={300} left={30} alt="" aria-hidden="true" />

                {/* Mobile decorative gears */}
                <MobileDecorativeGear src={Gear4} size={18} top={2} left={75} alt="" aria-hidden="true" />
                <MobileDecorativeGear src={Gear5} size={25} top={0} left={-5} alt="" aria-hidden="true" />
                <MobileDecorativeGear src={Gear6} size={30} top={25} left={70} alt="" aria-hidden="true" />
                <MobileDecorativeGear src={Gear3} size={22} top={50} left={-8} alt="" aria-hidden="true" />
                <MobileDecorativeGear src={Gear2} size={15} top={70} left={80} alt="" aria-hidden="true" />
                <MobileDecorativeGear src={Gear7} size={12} top={85} left={5} alt="" aria-hidden="true" />

                <WhoLeftSection>
                    <WhoTitle>Kim jesteśmy?</WhoTitle>
                    <WhoContent>Inżynierskie Targi Pracy organizowane przez Stowarzyszenie Studentów BEST AGH Kraków już od 28 lat łączą środowisko akademickiez biznesem. To wydarzenie, podczas którego studenci i absolwenci mają szansę poznać potencjalnych pracodawców, a firmy mogą dotrzeć do przyszłych specjalistów z różnych dziedzin inżynierii i technologii. <br /><br />

                        Tegoroczna edycja odbędzie się 11 marca i stanie się miejscem spotkań, inspiracji oraz wymiany doświadczeń pomiędzy młodymi talentamia przedstawicielami firm. <br /><br />

                        Na naszej stronie internetowej znajdziecie informacje o wystawcach i ich aktualnych ofertach pracy oraz staży. Uczestnicy mogą również przesłać swoje CV do naszej bazy, co pozwoli pracodawcom lepiej poznać ich kompetencje i doświadczenie.</WhoContent>
                </WhoLeftSection>
                <WhoRightSection>
                    <WhoGearWrapper size={30} top={0} left={20}>
                        <img src={GearWithPeople} alt="Zespół organizatorów Inżynierskich Targów Pracy" />
                    </WhoGearWrapper>
                    <WhoGearWrapper size={12} top={84} left={75} reverse>
                        <img src={GearWithBackground} alt="" aria-hidden="true" />
                    </WhoGearWrapper>
                    <WhoGearWrapper size={9} top={55} left={103}>
                        <img src={Gear7} alt="" aria-hidden="true" />
                    </WhoGearWrapper>
                    <WhoGearWrapper size={6} top={90} left={45}>
                        <img src={Gear3} alt="" aria-hidden="true" />
                    </WhoGearWrapper>
                    <WhoGearWrapper size={4} top={103} left={28}>
                        <img src={Gear4} alt="" aria-hidden="true" />
                    </WhoGearWrapper>
                </WhoRightSection>
            </WhoContainer >

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
            <MapTitle>Mapa targów</MapTitle>
            <MapContainer>
                <img src={ITPMap} alt="Mapa Inżynierskich Targów Pracy 2026 na Stadionie Miejskim w Krakowie - rozmieszczenie stoisk firm" />
            </MapContainer>
            <CarouselTitle>Sprawdź kto zaufał nam we wcześniejszych edycjach:</CarouselTitle>
            <SponsorsCarousel slides={[WoodwardLogo, AptivLogo, AllInUJ, GEHealthcareLogo, IBMLogo]} />

            <OrganizersContainer id="kontakt">
                <OrganizersTitle>Zaufaj nam i Ty!</OrganizersTitle>
                <CardsContainer>
                    <OrganizerCard>
                        <OrganizerImage src={GabrielIwaniuk} alt="Gabriel Iwaniuk" />
                        <OrganizerName>Gabriel Iwaniuk</OrganizerName>
                        <OrganizerRole>Koordynator ds. Kontaktu z Firmami</OrganizerRole>
                        <OrganizerPhone>663 971 716</OrganizerPhone>
                        <OrganizerEmail>gabriel.iwaniuk@BEST.krakow.pl</OrganizerEmail>
                    </OrganizerCard>

                    <OrganizerCard isMiddle>
                        <OrganizerImage src={NikodemSzafran} alt="Nikodem Szafran" />
                        <OrganizerName>Nikodem Szafran</OrganizerName>
                        <OrganizerRole>Główny Koordynator</OrganizerRole>
                        <OrganizerPhone>730 259 633</OrganizerPhone>
                        <OrganizerEmail>nikodem.szafran@BEST.krakow.pl</OrganizerEmail>
                    </OrganizerCard>

                    <OrganizerCard>
                        <OrganizerImage src={ZofiaPalarz} alt="Zofia Palarz" />
                        <OrganizerName>Zofia Palarz</OrganizerName>
                        <OrganizerRole>Koordynator ds. Logistyki</OrganizerRole>
                        <OrganizerPhone>501 358 126</OrganizerPhone>
                        <OrganizerEmail>zofia.palarz@BEST.krakow.pl</OrganizerEmail>
                    </OrganizerCard>
                </CardsContainer>
            </OrganizersContainer>
        </>
    );
}

export default MainSite;
