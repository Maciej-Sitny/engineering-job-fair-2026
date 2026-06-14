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
	margin-bottom: 3rem;
	font-size: clamp(2rem, 6vw, 3.5rem);
	font-weight: 700;
`;

const ParagraphTitle = styled.h2`
	font-family: 'Alumni Sans', sans-serif;
	color: #F78F27;
	font-size: clamp(1.5rem, 4vw, 2rem);
	font-weight: 700;
	margin-bottom: 1.5rem;
	margin-top: 2rem;
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

const RODO = () => {
    return (
        <>
            <SEO
                title="RODO | Inżynierskie Targi Pracy 2026"
                description="Informacje o przetwarzaniu danych osobowych na XXVIII Inżynierskich Targach Pracy 2026"
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
                    <Title>RODO</Title>

                    <ParagraphTitle>§1 INFORMACJE O PRZETWARZANIU DANYCH</ParagraphTitle>
                    <RegulationsList>
                        <li>
                            Administratorem Pana/i danych osobowych jest Stowarzyszenie Studentów BEST AGH Kraków z siedzibą w Krakowie, przy ulicy​ ​Reymonta 17​/E14, e-mail: ​krakow@best.krakow.pl.
                        </li>
                        <li>
                            Dane będą przetwarzane w celu udziału w konkursach o nagrody na Stoisku Konkursowym.
                        </li>
                        <li>
                            Dane będą przechowywane w dniu XXVIII Inżynierskich Targów Pracy, tj. 11 marca 2026 r. jedynie na potrzeby konkursów.
                        </li>
                        <li>
                            Zdjęcia wykonane w trakcie wydarzenia, które zawierają  Pana/i wizerunek mogą być wykorzystane do promocji w social mediach XXVIII Inżynierskich Targów Pracy, BEST AGH Kraków oraz przez partnerów wydarzenia.
                        </li>
                        <li>
                            Ma Pan/i prawo dostępu do swoich danych osobowych, uzyskania ich kopii, sprostowania, usunięcia lub ograniczenia przetwarzania.
                        </li>
                        <li>
                            Ma Pan/i prawo do wniesienia sprzeciwu wobec dalszego przetwarzania, a w przypadku wyrażenia zgody na przetwarzanie danych do zażądania ich usunięcia. Skorzystanie z prawa cofnięcia zgody nie ma wpływu na przetwarzanie, które miało miejsce do momentu wycofania zgody.
                        </li>
                        <li>
                            Przysługuje Panu/i prawo wniesienia skargi do organu nadzorczego, do Prezesa UODO (na adres Urzędu Ochrony Danych Osobowych,​ ​ul. Stawki 2, 00 - 193 Warszawa​).
                        </li>
                    </RegulationsList>
                </ContentWrapper>
            </Page>
        </>
    );
};

export default RODO;
