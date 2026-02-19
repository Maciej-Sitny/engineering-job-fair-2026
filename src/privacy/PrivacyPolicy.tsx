import styled from 'styled-components';
import SEO from '../components/SEO';
import Gear1 from '../assets/gears/Subtract.svg';
import Gear2 from '../assets/gears/Subtract (1).svg';
import Gear3 from '../assets/gears/Subtract (2).svg';
import Gear4 from '../assets/gears/Subtract (3).svg';
import Gear5 from '../assets/gears/Subtract (4).svg';

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
	
	/* --- BASE: Mobile First --- */
	padding: 5rem 1rem 3rem;

	/* --- 481px+: Większe telefony --- */
	@media (min-width: 481px) {
		padding: 6rem 1.5rem 4rem;
	}

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		padding: 7rem 2rem 5rem;
	}

	/* --- 1025px+: Desktop --- */
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
	transition: transform 0.2s ease-out;
	z-index: 0;
	
	/* --- BASE: Ukryte na mobile --- */
	display: none;
	opacity: 0;

	/* --- 769px+: Widoczne, ale mniejsze na tabletach --- */
	@media (min-width: 769px) {
		display: flex;
		opacity: 0.4;
		width: ${props => props.size * 0.5}vw;
		height: ${props => props.size * 0.5}vw;
		top: ${props => props.top}%;
		left: ${props => props.left}%;
	}

	/* --- 1025px+: Pełny rozmiar na desktop --- */
	@media (min-width: 1025px) {
		opacity: 0.5;
		width: ${props => props.size}vw;
		height: ${props => props.size}vw;
	}

	@media (hover: hover) {
		&:hover {
			transform: ${props => (props.reverse ? 'rotate(-12deg)' : 'rotate(12deg)')};
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Content = styled.div`
	position: relative;
	z-index: 1;
	max-width: 900px;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.95);
	border-radius: 12px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	
	/* --- BASE: Mobile --- */
	padding: 2rem 1.5rem;

	/* --- 481px+: Większe telefony --- */
	@media (min-width: 481px) {
		padding: 2.5rem 2rem;
	}

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		padding: 3rem 3rem;
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		padding: 4rem 4rem;
	}
`;

const Title = styled.h1`
	font-weight: 600;
	color: #111;
	letter-spacing: 1px;
	font-family: 'Alumni Sans', 'Arial Black', sans-serif;
	margin: 0 0 2rem 0;
	text-align: center;
	
	/* --- BASE: Mobile --- */
	font-size: clamp(2rem, 8vw, 3rem);

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		font-size: clamp(2.5rem, 6vw, 3.5rem);
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: 3.5rem;
	}
`;

const ConsentBox = styled.div`
	background-color: #f8f9fa;
	border-left: 4px solid #333;
	padding: 1.5rem;
	margin-bottom: 2rem;
	border-radius: 4px;
	
	p {
		margin: 0;
		line-height: 1.7;
		color: #222;
		font-size: 1rem;
		text-align: justify;
		
		@media (min-width: 769px) {
			font-size: 1.1rem;
		}
	}
`;

const TextContent = styled.div`
	color: #333;
	line-height: 1.8;
	
	ol {
		padding-left: 1.2rem;
		margin: 1rem 0;
		
		@media (min-width: 769px) {
			padding-left: 1.5rem;
		}
	}
	
	li {
		margin-bottom: 1.2rem;
		font-size: 0.95rem;
		text-align: justify;
		color: #444;
		
		@media (min-width: 769px) {
			font-size: 1.05rem;
			margin-bottom: 1.5rem;
		}
		
		&::marker {
			color: #666;
			font-weight: 600;
		}
	}
`;

const PrivacyPolicy = () => {
    return (
        <Page>
            <SEO
                title="Polityka Prywatności | Inżynierskie Targi Pracy 2026"
                description="Polityka przetwarzania danych osobowych dla uczestników Inżynierskich Targów Pracy 2026 zgodnie z RODO."
                canonicalUrl="https://itp.best.krakow.pl/klauzula-cv"
            />

            {/* Dekoracyjne zębatki w tle */}
            <GearWrapper size={18} top={8} left={8}>
                <img src={Gear1} alt="" aria-hidden="true" />
            </GearWrapper>
            <GearWrapper size={15} top={15} left={85} reverse>
                <img src={Gear2} alt="" aria-hidden="true" />
            </GearWrapper>
            <GearWrapper size={12} top={45} left={5} reverse>
                <img src={Gear3} alt="" aria-hidden="true" />
            </GearWrapper>
            <GearWrapper size={20} top={70} left={88}>
                <img src={Gear4} alt="" aria-hidden="true" />
            </GearWrapper>
            <GearWrapper size={10} top={85} left={12} reverse>
                <img src={Gear5} alt="" aria-hidden="true" />
            </GearWrapper>

            <Content>
                <Title>Klauzula</Title>

                <ConsentBox>
                    <p>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do
                        realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                        2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                        przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
                        uchylenia dyrektywy 95/46/WE (RODO).
                    </p>
                </ConsentBox>

                <TextContent>
                    <ol>
                        <li>
                            Administratorem Pana/Pani danych osobowych jest Stowarzyszenie Studentów BEST AGH Kraków
                            z siedzibą w Krakowie, przy ulicy Reymonta 17/E14.
                        </li>
                        <li>
                            Dane będą przetwarzane w celu rejestracji CV uczestników XXVIII Inżynierskich Targów Pracy.
                        </li>
                        <li>
                            Każdy z kandydatów ma możliwość dobrowolnego załączenia swojego CV. Mogą być one
                            udostępniane wystawcom XXV Inżynierskich Targów Pracy w celach rekrutacyjnych.
                        </li>
                        <li>
                            Dane uczestników oraz CV będą przechowywane przez następne 6 miesięcy po zakończeniu
                            projektu Inżynierskich Targów Pracy.
                        </li>
                        <li>
                            Ma Pan/Pani prawo dostępu do swoich danych osobowych, uzyskania ich kopii, sprostowania,
                            usunięcia lub ograniczenia przetwarzania.
                        </li>
                        <li>
                            Ma Pan/Pani prawo do wniesienia sprzeciwu wobec dalszego przetwarzania, a w przypadku
                            wyrażenia zgody na przetwarzanie danych do zażądania ich usunięcia. Skorzystanie prawa
                            cofnięcia zgody nie ma wpływu na przetwarzanie, które miało miejsce do momentu wycofania zgody.
                        </li>
                        <li>
                            Przysługuje Pani/u prawo wniesienia skargi do organu nadzorczego, do Prezes UODO
                            (na adres Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00 – 193 Warszawa).
                        </li>
                    </ol>
                </TextContent>
            </Content>
        </Page>
    );
};

export default PrivacyPolicy;
