import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Gear1 from './assets/Subtract.svg';
import Gear2 from './assets/Subtract (1).svg';
import Gear3 from './assets/Subtract (2).svg';
import Gear4 from './assets/Subtract (3).svg';
import Gear5 from './assets/Subtract (4).svg';
import Gear6 from './assets/Subtract (5).svg';
import Gear7 from './assets/Subtract (6).svg';
import GearWithPeople from './assets/GearWithPeople.svg';
import GearWithBackground from './assets/GearWithBackground.svg';
import ITPMap from './assets/itp_map.svg';
import WoodwardLogo from './assets/sponsors/woodward_logo.svg';
import AptivLogo from './assets/sponsors/aptiv_logo.svg';
import AllInUJ from './assets/sponsors/all_in_uj_logo.svg';
import GEHealthcareLogo from './assets/sponsors/ge_healthcare_logo.svg';
import IBMLogo from './assets/sponsors/ibm_logo.svg';
import SponsorsCarousel from './SponsorsCarousel';
import GabrielIwaniuk from './assets/organizers/Gabriel_Iwaniuk.svg';
import NikodemSzafran from './assets/organizers/Nikodem_Szafran.svg';
import ZofiaPalarz from './assets/organizers/Zofia_Palarz.svg';
import Footer from '../footer/Footer';
const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 80px 60px 30px;
    background: #fff;
    position: relative;
    overflow: hidden;
    font-family: 'Alumni Sans', sans-serif;
    width: 100%;
    box-sizing: border-box;
`;

const HeroContent = styled.div`
    flex: 0;
    width: auto;
    z-index: 2;
    padding-left: 40px;
`;

const HeroTitle = styled.h1`
    font-size: 170px;
    font-weight: 500;
    line-height: 0.8;
    color: #1e1e1e;
    margin: 0 0 20px 0;
    letter-spacing: -0.5px;
    font-family: 'Alumni Sans', sans-serif;
`;

const OrganizersContainer = styled.section`
    padding: 80px 60px;
    background: #fff;
    text-align: center;
    font-family: 'Alumni Sans', sans-serif;
`;

const OrganizersTitle = styled.h2`
    font-size: 38px;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 60px 0;
    letter-spacing: 0.5px;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
`;

const OrganizerCard = styled.div<{ isMiddle?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    transform: ${props => props.isMiddle ? 'translateY(-40px)' : 'translateY(0)'};
    transition: transform 0.3s ease;

    &:hover {
        transform: ${props => props.isMiddle ? 'translateY(-60px)' : 'translateY(-20px)'};
    }
`;

const OrganizerImage = styled.img`
    width: 100%;
    height: 60vh;
    border-radius: 32px;
    object-fit: cover;
    margin-bottom: 24px;
`;

const OrganizerName = styled.h3`
    font-size: 5.5vh;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 1px 0;
    letter-spacing: 0.5px;
`;

const OrganizerRole = styled.p`
    font-size: 3.6vh;
    font-weight: 500;
    color: #f78f27;
    margin: 0 0 0px 0;
    letter-spacing: 0.5px;
`;

const OrganizerPhone = styled.p`
    font-size: 3.6vh;
    color: #1e1e1e;
    margin: 0 0 0px 0;
`;

const OrganizerEmail = styled.p`
    font-size: 3.6vh;
    color: #1e1e1e;
    margin: 0;
`;

const HeroSubtitle = styled.p`
    font-size: 40px;
    font-weight: 500;
    color: #f78f27;
    margin: 0;
    letter-spacing: 0.5px;
    font-family: 'Alumni Sans', sans-serif;
`;

const HeroSubtitleHour = styled.p`
    font-size: 40px;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    letter-spacing: 0.5px;
    font-family: 'Alumni Sans', sans-serif;
`

const SubtitleContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const HeroRightSection = styled.div`
flex: 1.5;
display: flex;
align - items: center;
justify - content: center;
position: relative;
height: 600px;
width: 100 %;
`;

const GearWrapper = styled.div<{
    size: number;
    top: number;
    left: number;
    delay?: number;
    reverse?: boolean;
}>`
position: absolute;
width: ${props => props.size}vw;
height: ${props => props.size}vw;
top: ${props => props.top}%;
left: ${props => props.left}%;
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.1s ease-out;
    
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;

const LocationText = styled.p`
position: absolute;
bottom: 0px;
right: 40px;
font-size: 40px;
font-weight: 500;
span-lettering: 0.9px;
color: #1e1e1e;
text-align: right;
margin: 0;
line-height: 0.7;
font-family: 'Alumni Sans', sans-serif;
`;

const AddressText = styled.p`
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #1e1e1e;
    margin: 8px 0 0 0;
    font-family: 'Alumni Sans', sans-serif;
`;

const WhoContainer = styled.section`
    padding: 80px 13vw;
    position: relative;
    overflow: hidden;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: justify;
`

const DecorativeGear = styled.img<{
    size: number;
    top: number;
    left: number;
}>`
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    opacity: 1;
`;

const WhoLeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

const WhoTitle = styled.h2`
    font-size: 64px;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 20px 0;
    font-family: 'Alumni Sans', sans-serif;
`;

const WhoContent = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #1e1e1e;
    margin: 0;
    line-height: 1.3;
    font-family: 'Alumni Sans', sans-serif;
`;

const WhoRightSection = styled.div`
    flex: 1;
    position: relative;
    height: 600px;
`


const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    gap: 15vw;
`
const CounterSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:0px;
`;

const CounterNumber = styled.h3`
    font-size: 80px;
    font-weight: 500;
    color: #f78f27;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    padding:0;
    `;

const CounterLabel = styled.p`
    font-size:35px;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0;
    font-family: 'Alumni Sans', sans-serif;
    padding:0;
`;

const MapContainer = styled.section`
    padding: 30vh 0;
    width: 100%;
    height: 600px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const MapTitle = styled.h1`
    font-size: 64px;
    font-weight: 500;
    color: #1e1e1e;
    margin: 0 0 20px 0;
    font-family: 'Alumni Sans', sans-serif;
`;

const MapImage = styled.img`
    width: 80%;
    height: 100%;

`;

const CarouselTitle = styled.h3`
    font-size: 38px;
    font-weight: 500;
    color: #1e1e1e;
    margin:0;
    font-family: 'Alumni Sans', sans-serif;
    text-align: center;
    background: #fff;

`;

function MainSite() {
    const gearRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroTitle>Inżynierskie<br />Targi Pracy</HeroTitle>
                    <SubtitleContainer><HeroSubtitle>11 MARCA 2026</HeroSubtitle><HeroSubtitleHour> 10:00-16:00</HeroSubtitleHour></SubtitleContainer>
                </HeroContent>

                <HeroRightSection>
                    <GearWrapper size={13.5} top={53} left={65} ref={(el) => { gearRefs.current[0] = el; }}>
                        <img src={Gear4} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={6.7} top={37} left={85} ref={(el) => { gearRefs.current[1] = el; }}>
                        <img src={Gear2} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={10.5} top={40} left={22} reverse ref={(el) => { gearRefs.current[2] = el; }}>
                        <img src={Gear3} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={8.25} top={58} left={45} reverse ref={(el) => { gearRefs.current[3] = el; }}>
                        <img src={Gear5} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={5.5} top={70} left={30} reverse ref={(el) => { gearRefs.current[4] = el; }}>
                        <img src={Gear6} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={4.7} top={65} left={13} ref={(el) => { gearRefs.current[5] = el; }}>
                        <img src={Gear7} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={22.2} top={0} left={40} ref={(el) => { gearRefs.current[6] = el; }}>
                        <img src={Gear1} alt="gear" />
                    </GearWrapper>

                    <LocationText>
                        Stadion Miejski im. Henryka Reymana<br />
                        <AddressText>ul. Reymonta 20, 30-059 Kraków</AddressText>
                    </LocationText>
                </HeroRightSection>
            </HeroContainer>

            <WhoContainer>
                {/* <DecorativeGear src={Gear2} size={127} top={-40} left={80} alt="gear decoration" />
                <DecorativeGear src={Gear4} size={260} top={150} left={-100} alt="gear decoration" />
                <DecorativeGear src={Gear5} size={127} top={200} left={85} alt="gear decoration" /> */}
                <WhoLeftSection>
                    <WhoTitle>Kim jesteśmy?</WhoTitle>
                    <WhoContent>Inżynierskie Targi Pracy organizowane przez Stowarzyszenie Studentów BEST AGH Kraków już od 28 lat łączą środowisko akademickiez biznesem. To wydarzenie, podczas którego studenci i absolwenci mają szansę poznać potencjalnych pracodawców, a firmy mogą dotrzeć do przyszłych specjalistów z różnych dziedzin inżynierii i technologii. <br /><br />

                        Tegoroczna edycja odbędzie się 11 marca i stanie się miejscem spotkań, inspiracji oraz wymiany doświadczeń pomiędzy młodymi talentamia przedstawicielami firm. <br /><br />

                        Na naszej stronie internetowej znajdziecie informacje o wystawcach i ich aktualnych ofertach pracy oraz staży. Uczestnicy mogą również przesłać swoje CV do naszej bazy, co pozwoli pracodawcom lepiej poznać ich kompetencje i doświadczenie.</WhoContent>
                </WhoLeftSection>
                <WhoRightSection>
                    <GearWrapper size={30} top={0} left={20}>
                        <img src={GearWithPeople} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={12} top={70} left={70} reverse>
                        <img src={GearWithBackground} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={9} top={50} left={90}>
                        <img src={Gear7} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={6} top={75} left={40}>
                        <img src={Gear3} alt="gear" />
                    </GearWrapper>
                    <GearWrapper size={4} top={85} left={30}>
                        <img src={Gear4} alt="gear" />
                    </GearWrapper>
                </WhoRightSection>
            </WhoContainer>

            <CounterContainer>
                <CounterSubContainer>
                    <CounterNumber>30</CounterNumber>
                    <CounterLabel>Liczba Firm</CounterLabel>
                </CounterSubContainer>
                <CounterSubContainer>
                    <CounterNumber>200</CounterNumber>
                    <CounterLabel>Liczba Odwiedzających</CounterLabel>
                </CounterSubContainer>
                <CounterSubContainer>
                    <CounterNumber>60</CounterNumber>
                    <CounterLabel>Liczba nwm czego</CounterLabel>
                </CounterSubContainer>
            </CounterContainer>
            <MapContainer>
                {/* <MapTitle>Mapa Wydarzenia</MapTitle> */}
                <MapImage src={ITPMap} alt="ITP Map" />
            </MapContainer>
            <CarouselTitle>Sprawdź kto zaufał nam we wcześniejszych edycjach:</CarouselTitle>
            <SponsorsCarousel slides={[WoodwardLogo, AptivLogo, AllInUJ, GEHealthcareLogo, IBMLogo]} />

            <OrganizersContainer>
                <OrganizersTitle>Zaufaj nam też i Ty!</OrganizersTitle>
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
            <Footer />
        </>
    );
}

export default MainSite;
