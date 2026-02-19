import { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Gear1 from '../assets/gears/Subtract.svg';
import Gear2 from '../assets/gears/Subtract (1).svg';
import Gear3 from '../assets/gears/Subtract (2).svg';
import Gear4 from '../assets/gears/Subtract (3).svg';
import Gear5 from '../assets/gears/Subtract (4).svg';
import Gear6 from '../assets/gears/Subtract (5).svg';
import Gear7 from '../assets/gears/Subtract (6).svg';
import GabrielIwaniuk from '../organizers/FRgabrys-7f4a000848a6d36bd7462dca9c51a679 5.png';
import NikodemSzafran from '../organizers/MOnikodem-812e297c7c8b379c94749d13c379cf6f 1.png';
import ZofiaPalarz from '../organizers/LG-zosia.png';
import MaciejSitny from '../organizers/it-maciek.png';
import KamilaGuzik from '../organizers/gd-kamila.png';
import PatrycjaBodek from '../organizers/pr-patrycja.png';
import AgnieszkaPyka from '../organizers/fr-agnieszka.png';
import MajaKonopka from '../organizers/fr-maja.png';
import NikodemWlodarczyk from '../organizers/fr-nikodem.png';

/* ==========================================================================
   ABOUT US - RESPONSIVE STYLES (Mobile-First Approach)
   
   Progi responsywności:
   - Bazowe style: < 480px (bardzo małe telefony)
   - 481px - 768px: standardowe telefony i małe tablety
   - 769px - 1024px: tablety / małe laptopy
   - 1025px+: duże ekrany / desktop
   ========================================================================== */

const Page = styled.section`
	max-width: 100%;
	display: flex;
	background-color: #fff;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: center;
	position: relative;
	overflow: hidden;
	
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

const VerticalTitle = styled.h1`
	font-weight: 500;
	color: #111;
	letter-spacing: 2px;
	font-family: 'Alumni Sans', 'Arial Black', sans-serif;
	writing-mode: vertical-rl;
	text-orientation: mixed;
	transform: rotate(180deg);
	white-space: nowrap;
	margin: 0;
	padding: 0;
	line-height: 1;
	align-self: center;
	
	/* --- BASE: Mobile (1.5x większy) --- */
	font-size: clamp(3.75rem, 18vw, 6rem);

	/* --- 481px+: Większe telefony (1.5x większy) --- */
	@media (min-width: 481px) {
		font-size: clamp(4.5rem, 15vw, 7.5rem);
	}

	/* --- 769px+: Tablety (1.5x większy) --- */
	@media (min-width: 769px) {
		font-size: clamp(6rem, 12vw, 10.5rem);
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: clamp(5rem, 10vw, 12rem);
	}
`;

const Description = styled.div`
	flex: 1;
	color: #222;
	line-height: 1.5;
	max-width: 100%;
	text-align: justify;
	overflow-wrap: break-word;
	word-break: break-word;
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(1.1rem, 4vw, 1.8rem);

	/* --- 481px+: Większe telefony --- */
	@media (min-width: 481px) {
		font-size: clamp(1.2rem, 3.5vw, 1.6rem);
	}

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		font-size: clamp(1.1rem, 2.5vh, 1.4rem);
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: 3vh;
	}
`;

const TitleAndDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
	width: 100%;
	max-width: 100%;
	min-height: 50vh;
	overflow: hidden;
	box-sizing: border-box;
	
	/* --- BASE: Mobile --- */
	padding: 0 2.5rem 0 0.5rem;
	margin-left: 0;

	/* --- 481px+: Większe telefony --- */
	@media (min-width: 481px) {
		gap: 1.5rem;
		min-height: 45vh;
		margin-left: 5%;
		padding: 0 3.5rem;
	}

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		gap: 2rem;
		min-height: 40vh;
		margin-left: 8%;
		padding: 0 5rem;
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		gap: 2.5rem;
		min-height: 35vh;
		margin-left: 10%;
		padding: 0 6rem;
	}
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 1;
	min-width: 0;
	
	/* --- BASE: Mobile --- */
	max-width: 100%;

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		max-width: 50%;
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		max-width: 40%;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	position: relative;
	z-index: 1;

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const OrganizersContainer = styled.section`
	background: #fff;
	text-align: center;
	font-family: 'Alumni Sans', sans-serif;
	width: 100%;
	display: flex;
	justify-content: center;
	
	/* --- BASE: Mobile --- */
	padding: 0 1rem;
	margin-top: 2rem;

	/* --- 481px+: Większe telefony --- */
	@media (min-width: 481px) {
		padding: 0 1.5rem;
		margin-top: 2rem;
	}

	/* --- 769px+: Tablety --- */
	@media (min-width: 769px) {
		padding: 0 2rem;
		margin-top: 3rem;
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		padding: 0 3.75rem;
		margin-top: 77vh;
	}
`;

const CardsContainer = styled.div`
	display: grid;
	justify-content: center;
	justify-items: center;
	margin: 0 auto;
	
	/* --- BASE: 1 kolumna na mobile --- */
	grid-template-columns: 1fr;
	gap: 2rem;
	max-width: 18rem;
	width: 100%;

	/* --- 481px+: Większe karty na większych telefonach --- */
	@media (min-width: 481px) {
		max-width: 22rem;
		gap: 2.5rem;
	}

	/* --- 769px+: 3 kolumny mniejsze na tabletach --- */
	@media (min-width: 769px) {
		grid-template-columns: repeat(3, 160px);
		gap: 1rem;
		max-width: none;
	}

	/* --- 900px+: 3 kolumny trochę większe --- */
	@media (min-width: 900px) {
		grid-template-columns: repeat(3, 260px);
		gap: 1.5rem;
	}

	/* --- 1200px+: 3 kolumny na desktop --- */
	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 320px);
		gap: 2.5rem;
		max-width: none;
	}
`;

const OrganizerCard = styled.div<{ isMiddle?: boolean; organizerId?: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	/* --- BASE: Pełna szerokość na mobile --- */
	width: 100%;
	transform: translateY(0);
	
	/* Nikodem Szafran pierwszy na mobile */
	order: ${props => props.organizerId === 'nikodem-szafran' ? -1 : 0};

	/* --- 769px+: Normalna kolejność, mniejsza szerokość --- */
	@media (min-width: 769px) {
		order: 0;
		width: 160px;
	}

	/* --- 900px+: Trochę większe --- */
	@media (min-width: 900px) {
		width: 260px;
	}

	/* --- 1200px+: Efekt przesunięcia środkowej karty --- */
	@media (min-width: 1200px) {
		width: 320px;
		transform: ${props => props.isMiddle ? 'translateY(-40px)' : 'translateY(0)'};
	}
`;

const OrganizerVisual = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 1.5rem;
	overflow: hidden;
	cursor: pointer;
	box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
	
	/* --- BASE: Aspect ratio na mobile --- */
	aspect-ratio: 3/4;
	height: auto;

	/* --- 769px+: Większy border-radius --- */
	@media (min-width: 769px) {
		margin-bottom: 1.5rem;
		border-radius: 2rem;
		box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);
	}

	/* --- 1025px+: Stała wysokość na desktop --- */
	@media (min-width: 1025px) {
		height: 60vh;
		aspect-ratio: unset;
	}
`;

const OrganizerImage = styled.img<{ $hidden?: boolean }>`
	width: 100%;
	height: 100%;
	border-radius: inherit;
	object-fit: cover;
	opacity: ${props => props.$hidden ? '0' : '1'};
	transition: opacity 0.4s ease-in-out;
	pointer-events: ${props => props.$hidden ? 'none' : 'auto'};
`;

const InfoCard = styled.div`
	position: absolute;
	inset: 0;
	background: #fff;
	border-radius: inherit;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #111;
	box-shadow: inset 0 0 0 1px #f5f5f5;
	opacity: 0;
	animation: fadeIn 0.4s ease-in-out forwards;
	
	/* --- BASE: Mniejszy padding na mobile --- */
	padding: 1.5rem 1.25rem;

	/* --- 769px+: Większy padding --- */
	@media (min-width: 769px) {
		padding: 2rem 1.75rem 2.25rem;
	}

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
	font-weight: 600;
	margin: 0 0 1rem 0;
	letter-spacing: 0.4px;
	color: #1e1e1e;
	text-align: left;
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(1.25rem, 4vw, 1.75rem);
`;

const InfoDescription = styled.p`
	margin: 0;
	line-height: 1.1;
	color: #2a2a2a;
	text-align: justify;
	font-weight: 500;
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(0.9rem, 2.2vw, 1.1rem);

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: 2.5vh;
	}
`;


const GearCorner = styled.img<{ $top?: boolean; $right?: boolean }>`
	position: absolute;
	opacity: 0.4;
	${props => props.$top ? 'top: 12px;' : 'bottom: 12px;'}
	${props => props.$right ? 'right: 12px;' : 'left: 12px;'}
	
	/* --- BASE: Mniejsze zębatki na mobile --- */
	width: 2.5rem;

	/* --- 769px+: Większe na tabletach --- */
	@media (min-width: 769px) {
		width: 4rem;
	}
`;

const OrganizerName = styled.h3<{ $smaller?: boolean }>`
	font-weight: 500;
	color: #1e1e1e;
	margin: 0 0 1px 0;
	letter-spacing: 0.5px;
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(1.75rem, 7vw, 2.5rem);

	/* --- 769px+: Tablety (mniejsze) --- */
	@media (min-width: 769px) {
		font-size: clamp(1.1rem, 5vh, 2rem);
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: ${props => props.$smaller ? '5.25vh' : '5.5vh'};
	}
`;

const OrganizerRole = styled.p`
	font-weight: 500;
	color: #f78f27;
	margin: 0 0 0px 0;
	letter-spacing: 0.5px;
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(1.25rem, 5vw, 1.75rem);

	/* --- 769px+: Tablety (mniejsze) --- */
	@media (min-width: 769px) {
		font-size: clamp(0.85rem, 3vh, 1.2rem);
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: 3.6vh;
	}
`;

const OrganizerPhone = styled.p`
	color: #1e1e1e;
	margin: 0 0 0px 0;
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(1.25rem, 5vw, 1.75rem);

	/* --- 769px+: Tablety (mniejsze) --- */
	@media (min-width: 769px) {
		font-size: clamp(0.85rem, 3vh, 1.2rem);
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
	
	/* --- BASE: Responsywny font --- */
	font-size: clamp(1.1rem, 4.5vw, 1.5rem);

	/* --- 769px+: Tablety (mniejsze) --- */
	@media (min-width: 769px) {
		font-size: clamp(0.75rem, 3vh, 1.1rem);
	}

	/* --- 1025px+: Desktop --- */
	@media (min-width: 1025px) {
		font-size: 3.6vh;
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
		opacity: 0.6;
		width: ${props => props.size * 0.5}vw;
		height: ${props => props.size * 0.5}vw;
		top: ${props => props.top}%;
		left: ${props => props.left}%;
	}

	/* --- 1025px+: Pełny rozmiar na desktop --- */
	@media (min-width: 1025px) {
		opacity: 0.85;
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
				' Cześć, z tej strony Gabryś - tegoroczny koordynator główny do spraw kontaktu z firmami Targów Pracy. Jestem studentem II roku Energetyki, a w wolnym czasie dorabiam jako animator hotelowy, co jednocześnie jest moim hobby! Gdybym miał powiedzieć co najbardziej cenię w życiu, powiedziałbym że ludzi;)'
		},
		{
			id: 'nikodem-szafran',
			name: 'Nikodem Szafran',
			role: 'Główny Koordynator',
			phone: '730 259 633',
			email: 'nikodem.szafran@BEST.krakow.pl',
			image: NikodemSzafran,
			description: 'Na co dzień jestem studentem Elektroniki, w której najbardziej fascynują mnie systemy wbudowane i programowanie mikrokontrolerów. Moją największą pasją jest jednak zarządzanie projektami - tworzenie wydarzeń od poziomu koncepcji do realizacji praktycznej, ale to przede wszystkim praca i obcowanie z ludźmi jest czymś co daje mi ogrom szczęścia oraz poczucia satysfakcji. W wolnych chwilach lubię pochłaniać materiały związane z psychologią oraz biologią lub grać w siatkówkę:)'
		},
		{
			id: 'zofia-palarz',
			name: 'Zofia Palarz',
			role: 'Koordynator ds. Logistyki',
			phone: '501 358 126',
			email: 'zofia.palarz@BEST.krakow.pl',
			image: ZofiaPalarz,
			description: 'Jestem Zosia i od kiedy pamiętam chciałam być inżynierem,więc wylądowałam na Budownictwie w Krakowie. Jednak nie chcąc stracić humanistycznej części siebie, dołączyłam do stowarzyszenia studentów BEST AGH Kraków i mam przyjemność być częścią kolejnej edycji Inżynierskich Targów Pracy. Jestem logistykiem, więc moją rolą jest między innymi ogarnięcie miejscówki pod wydarzenie. Oprócz tego gram w tenisa, kocham czytać i przebywać z ludźmi. '
		},
		{
			id: 'kamila-guzik',
			name: 'Kamila Guzik',
			role: 'Koordynator ds. Grafiki',
			phone: '532 181 871',
			email: 'kamila.guzik@BEST.krakow.pl',
			image: KamilaGuzik,
			description:
				'Hejka! Studiuję Informatykę Społeczną na AGH. Na co dzień zajmuję się UX/UI Designem i grafiką. Do BESTu dołączyłam rok temu i dodatkowo udzielam się w kole naukowym UX Berries. W wolnym czasie uwielbiam czytać, chodzić na siłownie i jeść dobry ramen.. '
		},
		{
			id: 'maciej-sitny',
			name: 'Maciej Sitny',
			role: 'Koordynator ds. IT',
			phone: '733 793 209',
			email: 'maciej.sitny@BEST.krakow.pl',
			image: MaciejSitny,
			description:
				'Hej, jestem studentem 3. roku Informatyki i w Targach zajmuję się wszystkim co związane z właśnie tą dziedziną. W czasie wolnym oglądam nerdowe filmiki na youtubie, czasami śledzę polską ligę siatkówki i w tym sezonie planuję wrócić do regularnego oglądania F1.'
		},
		{
			id: 'patrycja-bodek',
			name: 'Patrycja Bodek',
			role: 'Koordynator ds. Promocji',
			phone: '692 946 437',
			email: 'patrycja.bodek@BEST.krakow.pl',
			image: PatrycjaBodek,
			description:
				'Hej, jestem Patrycja i jestem studentką III roku Informatyki Technicznej. W tej edycji Targów Pracy jestem odpowiedzialna za PR, czyli robię wszystko żebyście dowiedzieli się o wydarzeniu i byli na bieżąco z informacjami. W wolnych chwilach bardzo lubię wszelkiego rodzaju sport - od spacerów po jazdę na rolkach czy nartach, a jeśli tylko nadarzy się okazja, uciekam w góry.'
		},
		{
			id: 'maja-konopka',
			name: 'Maja Konopka',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '518 118 158',
			email: 'maja.konopka@BEST.krakow.pl',
			image: MajaKonopka,
			description:
				'Hejka, jestem Maja i w tegorocznej edycji targów zajmuję się kontaktem z firmami. Na co dzień studiuję Automatykę i Robotykę na III roku, a poza Stowarzyszeniem BEST jestem członkinią dwóch kół naukowych na AGH. W wolnym czasie robię wszystko, żeby się nie nudzić - czyli sport, planowanie podróży i nowe dziedziny nauki.'
		},
		{
			id: 'agnieszka-pyka',
			name: 'Agnieszka Pyka',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '609 966 816',
			email: 'agnieszka.pyka@BEST.krakow.pl',
			image: AgnieszkaPyka,
			description:
				'Hej! Mam na imię Aga, przy tegorocznej edycji Inżynierskich Targów Pracy zajmuję się kontaktem i współpracą z Firmami. Studiuję Inżynierię i Analizę Danych, choć bardzo też cenię dziedziny humanistyczne. Czas wolny lubię poświęcać między innymi na sport czy handmade projekty. Uwielbiam sprawdzać się w nowych sytuacjach - znajduję w tym wiele inspiracji i siły do działania.'
		},
		{
			id: 'nikodem-wlodarczyk',
			name: 'Nikodem Włodarczyk',
			role: 'Koordynator ds. Kontaktu z Firmami',
			phone: '502 724 542',
			email: 'nikodem.wlodarczyk@BEST.krakow.pl',
			image: NikodemWlodarczyk,
			description:
				'Hej, mam na imię Nikodem, na codzień studiuję Informatykę i Ekonometrię na AGH w Beście jestem niecały rok, a w tej edycji targów zajmuję się kontaktem i współpracą z firmami. W wolnym czasie lubię zajmować się rękodziełem oraz wszelkiego rodzaju aktywnościami fizycznymi. '
		},
	];

	const handleToggleCard = (id: string) => {
		setOpenCardId(prev => (prev === id ? null : id));
	};

	return (
		<Page>
			<SEO
				title="O nas | Inżynierskie Targi Pracy 2026"
				description="Poznaj zespół organizatorów Inżynierskich Targów Pracy. Jesteśmy studentami z BEST AGH Kraków - organizacji, która od 28 lat łączy świat studentów z firmami."
				canonicalUrl="https://itp.best.krakow.pl/o-nas"
			/>
			<GearWrapper size={30} top={5} left={68}>
				<img src={Gear1} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={12} top={20} left={50} reverse>
				<img src={Gear4} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={10} top={16} left={60}>
				<img src={Gear2} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={7} top={20} left={90} reverse>
				<img src={Gear5} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={12} top={22} left={37}>
				<img src={Gear6} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={6} top={24} left={28} reverse>
				<img src={Gear7} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={23} top={20} left={67}>
				<img src={Gear3} alt="" aria-hidden="true" />
			</GearWrapper>
			<GearWrapper size={6} top={25} left={60}>
				<img src={Gear3} alt="" aria-hidden="true" />
			</GearWrapper>
			<Content>
				<TitleAndDescriptionWrapper>
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
				</TitleAndDescriptionWrapper>
				<OrganizersContainer>
					<CardsContainer>
						{organizers.map((organizer) => {
							const isOpen = openCardId === organizer.id;

							return (
								<OrganizerCard key={organizer.id} organizerId={organizer.id}>
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
									<OrganizerName $smaller={organizer.id === 'nikodem-wlodarczyk'}>{organizer.name}</OrganizerName>
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