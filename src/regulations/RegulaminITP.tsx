import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Gear1 from '../assets/gears/Subtract.svg';
import Gear2 from '../assets/gears/Subtract (1).svg';
import Gear3 from '../assets/gears/Subtract (2).svg';
import Gear4 from '../assets/gears/Subtract (3).svg';

const Page = styled.section`
	max-width: 100%;
	display: flex;
	background-color: #fff;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	overflow: hidden;
	min-height: 100vh;
	
	padding: 5rem 1rem 3rem;

	@media (min-width: 481px) {
		padding: 6rem 1.5rem 4rem;
	}

	@media (min-width: 769px) {
		padding: 7rem 2rem 5rem;
	}

	@media (min-width: 1025px) {
		padding: 7.5rem 4vw 5rem;
	}
`;

const GearWrapper = styled.div<{
    size: number;
    top: number;
    left: number;
    reverse?: boolean;
}>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
	transform: rotate(0deg);
	top: ${props => props.top}vh;
	left: ${props => props.left}vw;
	width: ${props => props.size}vw;
	height: ${props => props.size}vw;

	// @keyframes ${props => props.reverse ? 'spin-reverse' : 'spin'} {
	// 	0% {
	// 		transform: rotate(0deg);
	// 	}
	// 	100% {
	// 		transform: rotate(${props => props.reverse ? '-' : ''}360deg);
	// 	}
	// }

	// animation: ${props => props.reverse ? 'spin-reverse' : 'spin'} 20s linear infinite;

	@media (max-width: 768px) {
		display: none;
	}
`;

const GearImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	opacity: 0.6;
`;

const ContentWrapper = styled.div`
	max-width: 900px;
	width: 100%;
	background-color: #fff;
	position: relative;
	z-index: 10;
	
	padding: 2rem 1rem;

	@media (min-width: 769px) {
		padding: 2.5rem;
	}

	@media (min-width: 1025px) {
		padding: 3rem;
	}
`;

const BackLink = styled(Link)`
	font-family: 'Alumni Sans', sans-serif;
	display: inline-flex;
	align-items: center;
	color: #F78F27;
	text-decoration: none;
	font-size: clamp(1rem, 2.5vw, 1.25rem);
	font-weight: 600;
	margin-bottom: 2rem;
	transition: opacity 0.3s;

	&:hover {
		opacity: 0.7;
	}

	&::before {
		content: '← ';
		margin-right: 0.5rem;
	}
`;

const Title = styled.h1`
	font-family: 'Alumni Sans', sans-serif;
	color: #1e1e1e;
	text-align: center;
	margin-bottom: 1rem;
	font-size: clamp(2rem, 6vw, 3.5rem);
	font-weight: 700;
`;

const Subtitle = styled.p`
	font-family: 'Alumni Sans', sans-serif;
	color: #666;
	text-align: center;
	margin-bottom: 3rem;
	font-size: clamp(1.25rem, 3vw, 1.75rem);
	font-weight: 600;
`;

const ParagraphTitle = styled.h2`
	font-family: 'Alumni Sans', sans-serif;
	color: #F78F27;
	font-size: clamp(1.5rem, 4vw, 2rem);
	font-weight: 700;
	margin-bottom: 1.5rem;
	margin-top: 2.5rem;
`;

const Paragraph = styled.p`
	font-family: 'Inter', sans-serif;
	color: #333;
	margin: 1rem 0;
	font-size: clamp(0.95rem, 2.5vw, 1.075rem);
	line-height: 1.8;
	text-align: justify;
`;

const RegulationsList = styled.ul`
	font-family: 'Inter', sans-serif;
	color: #333;
	margin: 1rem 0;
	padding-left: 1.5rem;
	font-size: clamp(0.95rem, 2.5vw, 1.075rem);
	line-height: 1.8;
	
	li {
		margin-bottom: 1rem;
	}
`;

const DefinitionItem = styled.div`
	margin-bottom: 1.5rem;
	font-family: 'Inter', sans-serif;
	color: #333;
	font-size: clamp(0.95rem, 2.5vw, 1.075rem);
	line-height: 1.8;
`;

const DefinitionTerm = styled.span`
	font-weight: 700;
	color: #1e1e1e;
`;

const RegulaminITP = () => {
    return (
        <>
            <SEO
                title="Regulamin | Inżynierskie Targi Pracy 2026"
                description="Regulamin XXVIII Inżynierskich Targów Pracy 2026"
            />
            <Page>
                <GearWrapper size={15} top={5} left={2} reverse>
                    <GearImage src={Gear1} alt="" />
                </GearWrapper>
                <GearWrapper size={12} top={20} left={85}>
                    <GearImage src={Gear2} alt="" />
                </GearWrapper>
                <GearWrapper size={18} top={50} left={5} reverse>
                    <GearImage src={Gear3} alt="" />
                </GearWrapper>
                <GearWrapper size={14} top={70} left={80}>
                    <GearImage src={Gear4} alt="" />
                </GearWrapper>
                {/* <GearWrapper size={10} top={85} left={10} reverse>
                    <GearImage src={Gear5} alt="" /> */}
                {/* </GearWrapper> */}

                <ContentWrapper>
                    <BackLink to="/regulaminy">Powrót do regulaminów</BackLink>
                    <Title>Regulamin XXVIII Inżynierskich Targów Pracy</Title>
                    <Subtitle>11.03.2026 r.</Subtitle>

                    <ParagraphTitle>§1 POSTANOWIENIA OGÓLNE</ParagraphTitle>
                    <RegulationsList>
                        <li>
                            Niniejszy regulamin XXVIII Inżynierskich Targów Pracy (zwany dalej "Regulaminem") określa zasady i warunki, na których odbywają się XXVIII Inżynierskie Targi Pracy (zwane dalej „ITP").
                        </li>
                        <li>
                            Organizatorem wydarzenia jest Stowarzyszenie Studentów BEST AGH Kraków,
                            z siedzibą pod adresem: DS "Alfa" Blok 1 ul. Reymonta 17/E14 30-059 Kraków (zwany dalej „Organizatorem").
                        </li>
                        <li>
                            Wszelkie kwestie niewymienione reguluje prawo Rzeczpospolitej Polskiej.
                        </li>
                    </RegulationsList>

                    <ParagraphTitle>§2 TERMIN I MIEJSCE</ParagraphTitle>
                    <Paragraph>
                        ITP odbywa się w dniu 11 marca 2026 r. na Stadionie Miejskim im. Henryka Reymana w Krakowie, przy ul. Władysława Reymonta 20.
                    </Paragraph>

                    <ParagraphTitle>§3 DEFINICJE</ParagraphTitle>
                    <Paragraph>
                        Na potrzeby niniejszego regulaminu poniższym pojęciom przypisuje się następujące znaczenie:
                    </Paragraph>
                    <DefinitionItem>
                        <DefinitionTerm>Uczestnik</DefinitionTerm> – pełnoletnia osoba fizyczna posiadająca zdolność do czynności prawnych, która w dniu 11.03.2026 r. będzie obecna na Stadionie Miejskim im. Henryka Reymana w Krakowie, przy ul. Władysława Reymonta 20.
                    </DefinitionItem>

                    <ParagraphTitle>§4 WARUNKI UCZESTNICTWA</ParagraphTitle>
                    <RegulationsList>
                        <li>
                            Udział w ITP jest dobrowolny, bezpłatny i otwarty.
                        </li>
                        <li>
                            Uczestnik bierze odpowiedzialność za wszelkie uszczerbki na swoim zdrowiu niepowstałe z winy Organizatora.
                        </li>
                        <li>
                            Uczestnik odpowiada za wyrządzone przez siebie szkody na terenie obiektu, gdzie odbywać się będą ITP.
                        </li>
                        <li>
                            Uczestnik w dniu wydarzenia musi mieć ukończony 18. rok życia.
                        </li>
                    </RegulationsList>

                    <ParagraphTitle>§5 ZASADY PORZĄDKOWE</ParagraphTitle>
                    <RegulationsList>
                        <li>
                            Uczestnicy na ITP są zobowiązani do poszanowania praw i godności osobistej innych Uczestników. Uczestników obowiązuje bezwzględny zakaz nękania innych Uczestników. Za nękanie przyjmuje się: obraźliwe komentarze słowne dotyczące płci, tożsamości płciowej, wieku, orientacji seksualnej, niepełnosprawności, wyglądu fizycznego, rozmiaru ciała, pochodzenia etnicznego, religii, umyślne zastraszanie, prześladowanie i niepożądaną uwagę seksualną. Ponadto podczas ITP zabrania się używania słów oraz symboli powszechnie uznanych za niedozwolone, w tym wulgaryzmów lub określeń mogących powodować obrazę uczuć religijnych lub światopoglądowych, oraz wskazujących na dyskryminację.
                        </li>
                        <li>
                            Uczestnicy są zobowiązani zgłosić niezwłocznie do Organizatora wszelkie przypadki nieodpowiednich zachowań (w szczególności tych wskazanych powyżej) innych Uczestników.
                        </li>
                        <li>
                            Uczestnicy zobowiązują się do przestrzegania regulaminu obiektu, na terenie którego odbywa się ITP oraz stosować się do poleceń porządkowych Ochrony, a także Organizatora i osób przez niego wyznaczonych. Niestosowanie się do poleceń porządkowych może skutkować wyproszeniem z miejsca, w którym odbywa się wydarzenie.
                        </li>
                        <li>
                            Podczas trwania ITP Uczestników obowiązuje całkowity zakaz wnoszenia oraz spożywania alkoholu oraz substancji psychoaktywnych.
                        </li>
                        <li>
                            Uczestnikom zabrania się jakiegokolwiek modyfikowania infrastruktury elektrycznej zapewnionej przez Organizatora, w szczególności: odklejania taśmy ochronnej, odłączania przewodów zasilających oraz dołączania dodatkowych przewodów zasilających bez wyraźnej zgody Organizatora.
                        </li>
                        <li>
                            Uczestników uprasza się o dbanie o wizerunek ITP oraz Organizatora.
                        </li>
                    </RegulationsList>

                    <ParagraphTitle>§6 POSTANOWIENIA KOŃCOWE</ParagraphTitle>
                    <RegulationsList>
                        <li>
                            Niniejszy Regulamin wchodzi w życie z dniem opublikowania na stronie Internetowej ITP lub Organizatora i/lub podania do wiadomości uczestników.
                        </li>
                        <li>
                            Uczestnicy zobowiązani są do przestrzegania postanowień Regulaminu. Organizator zastrzega sobie prawo do wyproszenia Uczestnika z miejsca wydarzenia w przypadku naruszenia któregokolwiek postanowienia Regulaminu.
                        </li>
                        <li>
                            Uczestnicy, którzy mimo wezwania do zaprzestania łamania postanowień Regulaminu nie zastosują się do poleceń Organizatora, zobowiązani są do natychmiastowego opuszczenia miejsca odbywania się ITP i nie przysługują im z tego tytułu żadne roszczenia względem Organizatora.
                        </li>
                        <li>
                            Organizator zastrzega sobie prawo do zmiany terminu, formy lub odwołania wydarzenia z przyczyn, które uniemożliwiają przeprowadzenie ITP w terminie oraz formie określonych w Regulaminie.
                        </li>
                        <li>
                            Organizator zastrzega sobie prawo do zmiany Regulaminu przed rozpoczęciem wydarzenia. Wszelkie zmiany Regulaminu, w tym w zakresie terminów wydarzenia zostaną niezwłocznie opublikowane na stronie internetowej ITP. Zmiany wchodzą w życie w momencie ich publikacji na oficjalnej stronie internetowej wydarzenia i/lub podania do wiadomości uczestników.
                        </li>
                        <li>
                            Organizator jest uprawniony do utrwalania przebiegu ITP za pomocą urządzeń rejestrujących obraz i dźwięk.
                        </li>
                        <li>
                            Uczestnik wyraża zgodę na upublicznienie jego wizerunku do celów promocji ITP na plakatach, na stronie internetowej, w ofercie lub w mediach społecznościowych ITP oraz Organizatora.
                        </li>
                        <li>
                            We wszelkich sprawach organizacyjnych, w tym w kwestiach spornych w trakcie ITP decyduje Organizator.
                        </li>
                        <li>
                            Udział w ITP jest jednoznaczny z akceptacją postanowień niniejszego Regulaminu.
                        </li>
                    </RegulationsList>
                </ContentWrapper>
            </Page >
        </>
    );
};

export default RegulaminITP;
