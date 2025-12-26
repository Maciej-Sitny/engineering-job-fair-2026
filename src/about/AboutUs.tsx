import styled from 'styled-components';

const Page = styled.section`
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
	/* Offset for fixed navbar so content isn't hidden */
	padding: 120px 24px 80px;
	display: grid;
	grid-template-columns: 140px 1fr;
	gap: 24px;
`;

const VerticalWrap = styled.div`
	position: relative;
	min-height: 420px;
`;

const VerticalTitle = styled.h1`
	position: absolute;
	left: 0;
	top: 0;
	transform: rotate(-90deg);
	transform-origin: left top;
	font-weight: 700;
	color: #111;
	letter-spacing: 2px;
	font-size: clamp(48px, 10vw, 110px);
	line-height: 1;
`;

const Content = styled.div`
	max-width: 720px;
`;

const Breadcrumbs = styled.nav`
	color: #9a9a9a;
	font-size: 14px;
	margin-bottom: 24px;
	a {
		color: inherit;
		text-decoration: none;
	}
`;

const Paragraph = styled.p`
	color: #222;
	font-size: 16px;
	line-height: 1.8;
	margin: 0 0 14px;
`;

const AboutUs = () => {
	return (
		<Page>
			<VerticalWrap>
				<VerticalTitle>o nas</VerticalTitle>
			</VerticalWrap>
			<Content>
				<Breadcrumbs aria-label="breadcrumb">
					<a href="#">Strona główna</a> &nbsp;&gt;&nbsp; <span>O nas</span>
				</Breadcrumbs>
				<Paragraph>
					Jesteśmy studentami z BEST AGH Kraków – organizacji, która od lat tworzy
					Inżynierskie Targi Pracy. Łączymy świat studentów z Firmami, pomagając
					młodym inżynierom stawiać pierwsze kroki w karierze.
				</Paragraph>
				<Paragraph>
					Działamy z pasji i całkowicie non-profit. Każda edycja to efekt pracy zespołu
					studentów, którzy chcą rozwijać siebie i innych. Jako część międzynarodowej
					organizacji BEST, wierzymy, że współpraca i energia młodych ludzi mogą
					zmieniać rzeczywistość.
				</Paragraph>
			</Content>
		</Page>
	);
};

export default AboutUs;