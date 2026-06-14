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

	/* --- Mobile: ukryj trybiki --- */
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
	max-width: 800px;
	width: 100%;
	background-color: #fff;
	position: relative;
	z-index: 10;
	
	/* --- BASE: Mobile First --- */
	padding: 2rem 1rem;

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		padding: 2.5rem;
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		padding: 3rem;
	}
`;

const Title = styled.h1`
	font-family: 'Alumni Sans', sans-serif;
	color: #1e1e1e;
	text-align: center;
	margin-bottom: 2rem;
	
	/* --- BASE: Mobile First --- */
	font-size: clamp(2rem, 6vw, 3.5rem);
	font-weight: 700;
`;

const LinksList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 2rem 0;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const LinkItem = styled.li`
	display: flex;
	justify-content: center;
`;

const DocumentLink = styled(Link)`
	font-family: 'Alumni Sans', sans-serif;
	display: inline-block;
	padding: 1rem 2rem;
	background-color: #F78F27;
	color: white;
	text-decoration: none;
	font-size: clamp(1.25rem, 3vw, 1.75rem);
	font-weight: 600;
	border-radius: 30px;
	transition: all 0.3s ease;
	text-align: center;
	width: 100%;
	max-width: 400px;

	@media (hover: hover) {
		&:hover {
			background-color: #e67e16;
			transform: translateY(-2px);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}
	}

	&:active {
		transform: translateY(0);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
`;

const Description = styled.p`
	font-family: 'Inter', sans-serif;
	color: #333;
	text-align: center;
	margin: 1.5rem 0;
	font-size: clamp(1rem, 2.5vw, 1.125rem);
	line-height: 1.6;
`;

const Regulations = () => {
    return (
        <>
            <SEO
                title="Regulaminy | Inżynierskie Targi Pracy 2026"
                description="Regulaminy Inżynierskich Targów Pracy 2026 organizowanych przez BEST AGH Kraków"
            />
            <Page>
                {/* Animated Gears */}
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
                    <Title>Regulaminy</Title>
                    <Description>
                        Poniżej znajdziesz wszystkie dokumenty regulaminowe związane z Inżynierskimi Targami Pracy 2026.
                    </Description>

                    <LinksList>
                        <LinkItem>
                            <DocumentLink to="/regulaminy/konkurs">
                                Regulamin konkursu
                            </DocumentLink>
                        </LinkItem>
                        <LinkItem>
                            <DocumentLink to="/regulaminy/regulamin">
                                Regulamin
                            </DocumentLink>
                        </LinkItem>
                        <LinkItem>
                            <DocumentLink to="/regulaminy/rodo">
                                RODO
                            </DocumentLink>
                        </LinkItem>
                        <LinkItem>
                            <DocumentLink to="/regulaminy/klauzula-cv">
                                Klauzula CV
                            </DocumentLink>
                        </LinkItem>
                    </LinksList>
                </ContentWrapper>
            </Page>
        </>
    );
};

export default Regulations;
