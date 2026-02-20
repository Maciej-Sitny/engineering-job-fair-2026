import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { EXHIBITIONERS } from './exhibitionersData';
import GearsCluster from '../components/GearsCluster';

/* ==========================================================================
   STYLES
   ========================================================================== */

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 100%;
    min-height: 100vh;
    padding-top: 6rem;
    box-sizing: border-box;
    font-family: 'Alumni Sans', sans-serif;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 2rem 1.5rem 5rem;
    box-sizing: border-box;
`;

const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.95rem;
    color: #f78f27;
    text-decoration: none;
    margin-bottom: 2rem;
    font-weight: 600;
    transition: opacity 0.15s;

    &:hover {
        opacity: 0.75;
    }
`;

const HeroCard = styled.div<{ $sponsor: boolean }>`
    border-radius: 20px;
    padding: 2.5rem 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    background: ${(p) =>
        p.$sponsor
            ? 'linear-gradient(90deg, #fde8cb 0%, #f78f27 100%)'
            : 'linear-gradient(135deg, #fff6ec 0%, #fff 100%)'};
    border: ${(p) => (p.$sponsor ? 'none' : '1.5px solid #f0e8de')};
    margin-bottom: 2rem;
`;

const GearsDecor = styled(GearsCluster)`
    position: absolute;
    right: -10px;
    bottom: -10px;
    opacity: 0.25;
    pointer-events: none;
`;

const SponsorBadge = styled.span`
    display: inline-block;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    margin-bottom: 0.75rem;
`;

const CompanyName = styled.h1<{ $sponsor: boolean }>`
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: ${(p) => (p.$sponsor ? '#fff' : '#1a1a1a')};
    margin: 0;
    line-height: 1.1;
    position: relative;
    z-index: 1;
`;

const InfoSection = styled.section`
    margin-top: 2rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
    color: #f78f27;
    margin: 0 0 0.75rem;
    letter-spacing: 0.02em;
`;

const Description = styled.p`
    font-size: 1.05rem;
    color: #333;
    line-height: 1.7;
    margin: 0 0 1.5rem;
`;

const CategoryChipList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const CategoryChip = styled.span`
    background: #fff6ec;
    border: 1.5px solid #f78f27;
    color: #c96700;
    border-radius: 20px;
    padding: 0.3rem 0.85rem;
    font-size: 0.85rem;
    font-weight: 500;
`;

const WebsiteButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #f78f27;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.65rem 1.5rem;
    border-radius: 30px;
    transition: background 0.2s;

    &:hover {
        background: #e07a18;
    }
`;

const PlaceholderNote = styled.div`
    margin-top: 2.5rem;
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 12px;
    border-left: 4px solid #f78f27;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
`;

const NotFoundContainer = styled.div`
    text-align: center;
    padding: 4rem 1rem;
    color: #888;
    font-size: 1.1rem;
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function ExhibitionerDetail() {
    const { id } = useParams<{ id: string }>();
    const exhibitioner = EXHIBITIONERS.find((ex) => ex.id === id);

    if (!exhibitioner) {
        return (
            <Page>
                <Inner>
                    <BackLink to="/wystawcy">← Wróć do listy wystawców</BackLink>
                    <NotFoundContainer>
                        <h2>Nie znaleziono wystawcy.</h2>
                        <p>Sprawdź adres URL lub wróć do listy wystawców.</p>
                    </NotFoundContainer>
                </Inner>
            </Page>
        );
    }

    const issponsor = !!exhibitioner.sponsorLabel;

    return (
        <Page>
            <SEO
                title={`${exhibitioner.name} – Wystawcy ITP 2026`}
                description={exhibitioner.shortDescription}
                canonicalUrl={`https://itp.best.krakow.pl/wystawcy/${exhibitioner.id}`}
            />
            <Inner>
                <BackLink to="/wystawcy">← Wróć do listy wystawców</BackLink>

                {/* Hero card */}
                <HeroCard $sponsor={issponsor}>
                    {issponsor && <SponsorBadge>{exhibitioner.sponsorLabel}</SponsorBadge>}
                    <CompanyName $sponsor={issponsor}>{exhibitioner.name}</CompanyName>

                    {/* Decorative gears for sponsor */}
                    {issponsor && (
                        <GearsDecor size={120} color="white" rotate={20} />
                    )}
                </HeroCard>

                {/* Info */}
                <InfoSection>
                    <SectionTitle>O firmie</SectionTitle>
                    <Description>{exhibitioner.shortDescription}</Description>

                    <SectionTitle>Obszary działalności</SectionTitle>
                    <CategoryChipList>
                        {exhibitioner.categories.map((cat) => (
                            <CategoryChip key={cat}>{cat}</CategoryChip>
                        ))}
                    </CategoryChipList>

                    {exhibitioner.website && (
                        <WebsiteButton href={exhibitioner.website} target="_blank" rel="noopener noreferrer">
                            Odwiedź stronę firmy ↗
                        </WebsiteButton>
                    )}
                </InfoSection>

                <PlaceholderNote>
                    <strong>Strona w przygotowaniu.</strong> Wkrótce pojawią się tu szczegółowe informacje
                    o firmie, dostępnych ofertach pracy i stażach, a także materiały przygotowane
                    specjalnie na targi ITP 2026.
                </PlaceholderNote>
            </Inner>
        </Page>
    );
}
