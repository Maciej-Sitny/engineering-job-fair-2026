import { useState } from 'react';
import styled from 'styled-components';
import Gear1 from '../assets/gears/Subtract.svg';
import Gear2 from '../assets/gears/Subtract (1).svg';
import Gear3 from '../assets/gears/Subtract (2).svg';
import Gear4 from '../assets/gears/Subtract (3).svg';
import Gear5 from '../assets/gears/Subtract (4).svg';
import Gear6 from '../assets/gears/Subtract (5).svg';
import Gear7 from '../assets/gears/Subtract (6).svg';
import GabrielIwaniuk from '../assets/organizers/Gabriel_Iwaniuk.svg';
import NikodemSzafran from '../assets/organizers/Nikodem_Szafran.svg';
import ZofiaPalarz from '../assets/organizers/Zofia_Palarz.svg';
import MaciejSitny from '../assets/organizers/Maciej_Sitny.svg';
import KamilaGuzik from '../assets/organizers/Kamila_Guzik.svg';
import PatrycjaBodek from '../assets/organizers/Patrycja_Bodek.svg';
import AgnieszkaPyka from '../assets/organizers/Agnieszka_Pyka.svg';
import MajaKonopka from '../assets/organizers/Maja_Konopka.svg';
import NikodemWlodarczyk from '../assets/organizers/Nikodem_Wlodarczyk.svg';

const Page = styled.section`
	max-width: 100%;
	/* Offset for fixed navbar so content isn't hidden */
	padding: 120px 4vw 80px;
	display: flex;
	background-color: #fff;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: center;
	position: relative;
	overflow: hidden;
`;

const VerticalTitle = styled.h1`
	transform: rotate(-90deg);
	font-weight: 500;
	color: #111;
	letter-spacing: 2px;
	font-size: clamp(48px, 12vw, 380px);
	font-family: 'Alumni Sans', 'Arial Black', sans-serif;
`;

const Description = styled.div`
	flex: 1;
	color: #222;
	font-size: 3vh;
	line-height: 1.5;
	max-width: 100%;
	text-align: justify;
`;

const DescriptionContainer = styled.div`
	max-width: 40%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 32px;
	position: relative;
	z-index: 1;
`;

// const Breadcrumbs = styled.nav`
// 	color: #9a9a9a;
// 	font-size: 14px;
// 	margin-bottom: 24px;
// 	a {
// 		color: inherit;
// 		text-decoration: none;
// 	}
// `;

// const Paragraph = styled.p`
// 	color: #222;
// 	font-size: 16px;
// 	line-height: 1.8;
// 	margin: 0 0 14px;
// `;

const OrganizersContainer = styled.section`
    padding: 0 60px;
    background: #fff;
    text-align: center;
    font-family: 'Alumni Sans', sans-serif;
	margin-top: 57vh;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 320px);
    gap: 40px;
    justify-content: center;
    margin: 0 auto;
`;

const OrganizerCard = styled.div<{ isMiddle?: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 320px;
	transform: ${props => props.isMiddle ? 'translateY(-40px)' : 'translateY(0)'};
`;
const OrganizerVisual = styled.div`
	position: relative;
	width: 100%;
	height: 60vh;
	margin-bottom: 24px;
	border-radius: 32px;
	overflow: hidden;
	cursor: pointer;
	box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);
`;

const OrganizerImage = styled.img<{ $hidden?: boolean }>`
	width: 100%;
	height: 100%;
	border-radius: 32px;
	object-fit: cover;
	opacity: ${props => props.$hidden ? '0' : '1'};
	transition: opacity 0.4s ease-in-out;
	pointer-events: ${props => props.$hidden ? 'none' : 'auto'};
`;

const InfoCard = styled.div`
	position: absolute;
	inset: 0;
	background: #fff;
	border-radius: 32px;
	padding: 32px 28px 36px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #111;
	box-shadow: inset 0 0 0 1px #f5f5f5;
	opacity: 0;
	animation: fadeIn 0.4s ease-in-out forwards;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const InfoName = styled.h3`
	font-size: 28px;
	font-weight: 600;
	margin: 0 0 16px 0;
	letter-spacing: 0.4px;
	color: #1e1e1e;
	text-align: left;
`;

const InfoDescription = styled.p`
	margin: 0;
	line-height: 1.3;
	font-size: 3vh;
	color: #2a2a2a;
	text-align: justify;
	font-weight: 500;
`;
const CloseHint = styled.span`
	position: absolute;
	top: 14px;
	right: 18px;
	font-size: 14px;
	color: #7a7a7a;
`;

const GearCorner = styled.img<{ $top?: boolean; $right?: boolean }>`
	position: absolute;
	width: 64px;
	opacity: 0.4;
	${props => props.$top ? 'top: 12px;' : 'bottom: 12px;'}
	${props => props.$right ? 'right: 12px;' : 'left: 12px;'}
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

const GearWrapper = styled.div<{
	size: number;
	top: number;
	left: number;
	reverse?: boolean;
}>
	`
	position: absolute;
	width: ${props => props.size}vw;
	height: ${props => props.size}vw;
	top: ${props => props.top}%;
	left: ${props => props.left}%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.85;
	pointer-events: none;
	transform: rotate(0deg);
	transition: transform 0.2s ease-out;
	z-index: 0;

	&:hover {
		transform: ${props => (props.reverse ? 'rotate(-12deg)' : 'rotate(12deg)')};
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const AboutUs = () => {
	const [openCardId, setOpenCardId] = useState<string | null>(null);

	const organizers = [
		{
			id: 'gabriel-iwaniuk',
			name: 'Gabriel Iwaniuk',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '663 971 716',
			email: 'gabriel.iwaniuk@BEST.krakow.pl',
			image: GabrielIwaniuk,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'nikodem-szafran',
			name: 'Nikodem Szafran',
			role: 'Główny Koordynator',
			phone: '730 259 633',
			email: 'nikodem.szafran@BEST.krakow.pl',
			image: NikodemSzafran,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'zofia-palarz',
			name: 'Zofia Palarz',
			role: 'Koordynator ds. Logistyki',
			phone: '501 358 126',
			email: 'zofia.palarz@BEST.krakow.pl',
			image: ZofiaPalarz,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'kamila-guzik',
			name: 'Kamila Guzik',
			role: 'Koordynator ds. Grafiki',
			phone: '532 181 871',
			email: 'kamila.guzik@BEST.krakow.pl',
			image: KamilaGuzik,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'maciej-sitny',
			name: 'Maciej Sitny',
			role: 'Koordynator ds. IT',
			phone: '733 793 209',
			email: 'maciej.sitny@BEST.krakow.pl',
			image: MaciejSitny,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'patrycja-bodek',
			name: 'Patrycja Bodek',
			role: 'Koordynator ds. Promocji',
			phone: '692 946 437',
			email: 'patrycja.bodek@BEST.krakow.pl',
			image: PatrycjaBodek,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'maja-konopka',
			name: 'Maja Konopka',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '518 118 158',
			email: 'maja.konopka@BEST.krakow.pl',
			image: MajaKonopka,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'agnieszka-pyka',
			name: 'Agnieszka Pyka',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '609 966 816',
			email: 'agnieszka.pyka@BEST.krakow.pl',
			image: AgnieszkaPyka,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
		{
			id: 'nikodem-wlodarczyk',
			name: 'Nikodem Włodarczyk',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '502 724 542',
			email: 'nikodem.wlodarczyk@BEST.krakow.pl',
			image: NikodemWlodarczyk,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
		},
	];

	const handleToggleCard = (id: string) => {
		setOpenCardId(prev => (prev === id ? null : id));
	};

	return (
		<Page>
			<GearWrapper size={30} top={5} left={68}>
				<img src={Gear1} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={12} top={20} left={50} reverse>
				<img src={Gear4} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={10} top={16} left={60}>
				<img src={Gear2} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={7} top={20} left={90} reverse>
				<img src={Gear5} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={12} top={22} left={37}>
				<img src={Gear6} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={6} top={24} left={28} reverse>
				<img src={Gear7} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={23} top={20} left={67}>
				<img src={Gear3} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<GearWrapper size={6} top={25} left={60}>
				<img src={Gear3} alt="Dekoracyjna zębatka" />
			</GearWrapper>
			<Content>
				<VerticalTitle>O nas</VerticalTitle>
				{/* <Breadcrumbs aria-label="breadcrumb">
						<a href="#">Strona główna</a> &nbsp;&gt;&nbsp; <span>O nas</span>
					</Breadcrumbs> */}
				<DescriptionContainer>
					<Description>
						Jesteśmy studentami z BEST AGH Kraków – organizacji, która od lat tworzy Inżynierskie Targi Pracy. Łączymy świat studentów z Firmami, pomagając młodym inżynierom stawiać pierwsze kroki w karierze. <br />
						Działamy z pasji i całkowicie non-profit. Każda edycja to efekt pracy zespołu studentów, którzy chcą rozwijać siebie i innych. Jako część międzynarodowej organizacji BEST, wierzymy, że współpraca i energia młodych ludzi mogą zmieniać rzeczywistość.
					</Description>
				</DescriptionContainer>
				<OrganizersContainer>
					<CardsContainer>
						{organizers.map((organizer, index) => {
							const isOpen = openCardId === organizer.id;

							return (
								<OrganizerCard key={organizer.id}>
									<OrganizerVisual
										onClick={() => handleToggleCard(organizer.id)}
										onKeyDown={event => {
											if (event.key === 'Enter' || event.key === ' ') {
												event.preventDefault();
												handleToggleCard(organizer.id);
											}
										}}
										tabIndex={0}
										role="button"
										aria-pressed={isOpen}
									>
										<OrganizerImage
											src={organizer.image}
											alt={organizer.name}
											$hidden={isOpen}
										/>
										{isOpen && (
											<InfoCard>
												<GearCorner src={Gear1} alt="" aria-hidden $top $right />
												<GearCorner src={Gear4} alt="" aria-hidden />
												<InfoName>{organizer.name}</InfoName>
												<InfoDescription>{organizer.description}</InfoDescription>
											</InfoCard>
										)}
									</OrganizerVisual>
									<OrganizerName>{organizer.name}</OrganizerName>
									<OrganizerRole>{organizer.role}</OrganizerRole>
									<OrganizerPhone>{organizer.phone}</OrganizerPhone>
									<OrganizerEmail>{organizer.email}</OrganizerEmail>
								</OrganizerCard>
							);
						})}
					</CardsContainer>
				</OrganizersContainer>
			</Content>
		</Page>
	);
};

export default AboutUs;