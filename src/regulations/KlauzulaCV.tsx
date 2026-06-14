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
	margin-bottom: 3rem;
	font-size: clamp(2rem, 6vw, 3.5rem);
	font-weight: 700;
`;

const ConsentBox = styled.div`
	background-color: #f8f9fa;
	border-left: 4px solid #F78F27;
	padding: 1.5rem;
	margin-bottom: 2rem;
	border-radius: 4px;
	
	p {
		margin: 0;
		line-height: 1.8;
		color: #222;
		font-family: 'Inter', sans-serif;
		font-size: clamp(0.95rem, 2.5vw, 1.075rem);
		text-align: justify;
	}
`;

const RegulationsList = styled.ol`
	font-family: 'Inter', sans-serif;
	color: #333;
	margin: 1rem 0;
	padding-left: 1.5rem;
	font-size: clamp(0.95rem, 2.5vw, 1.075rem);
	line-height: 1.8;
	
	li {
		margin-bottom: 1rem;
		text-align: justify;
	}
`;

const KlauzulaCV = () => {
	return (
		<>
			<SEO
				title="Klauzula CV | Inżynierskie Targi Pracy 2026"
				description="Klauzula przetwarzania danych osobowych dla uczestników Inżynierskich Targów Pracy 2026"
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
					<GearImage src={Gear5} alt="" />
				</GearWrapper> */}

				<ContentWrapper>
					<BackLink to="/regulaminy">Powrót do regulaminów</BackLink>
					<Title>Klauzula CV</Title>

					<ConsentBox>
						<p>
							Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do
							realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
							2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
							przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
							uchylenia dyrektywy 95/46/WE (RODO).
						</p>
					</ConsentBox>

					<RegulationsList>
						<li>
							Administratorem Pana/Pani danych osobowych jest Stowarzyszenie Studentów BEST AGH Kraków
							z siedzibą w Krakowie, przy ulicy Reymonta 17/E14.
						</li>
						<li>
							Dane będą przetwarzane w celu rejestracji CV uczestników XXVIII Inżynierskich Targów Pracy.
						</li>
						<li>
							Każdy z kandydatów ma możliwość dobrowolnego załączenia swojego CV. Mogą być one
							udostępniane wystawcom XXVIII Inżynierskich Targów Pracy w celach rekrutacyjnych.
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
					</RegulationsList>
				</ContentWrapper>
			</Page>
		</>
	);
};

export default KlauzulaCV;
