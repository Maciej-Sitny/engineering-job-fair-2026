import { useState, type ReactNode } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { EXHIBITIONERS, type OszaryPrezentacji } from './exhibitionersData';
import gearsDetailSvg from './gears_exhibitioners_detail.svg';

/* ==========================================================================
   TAB ORDER  (only tabs with non-null content are rendered)
   ========================================================================== */

const TAB_ORDER = [
    'Informacja o firmie',
    'Dołącz do nas',
    'Dlaczego my?',
    'Lokalizacja stoiska',
    'Linki i kontakt',
    'Statystyki firmy',
    'Multimedia',
    'FAQ',
] as const;

type TabKey = (typeof TAB_ORDER)[number];

/* ==========================================================================
   HELPERS
   ========================================================================== */

/** Returns the subset of TAB_ORDER that has non-null content. */
function getActiveTabs(op: OszaryPrezentacji | undefined): TabKey[] {
    if (!op) return ['Informacja o firmie'];
    return TAB_ORDER.filter((key) => {
        const value = op[key];
        if (value === null || value === undefined) return false;
        if (key === 'Multimedia' && Array.isArray(value) && value.length === 0) return false;
        return true;
    });
}

/** Splits text into inline nodes, turning URLs into <a> elements. */
function linkify(text: string): ReactNode[] {
    const parts = text.split(/(https?:\/\/[^\s,)]+|www\.[^\s,)]+)/g);
    return parts.map((part, j) => {
        if (/^(https?:\/\/|www\.)/i.test(part)) {
            const href = part.startsWith('www.') ? 'https://' + part : part;
            return (
                <a key={j} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#f78f27', wordBreak: 'break-all' }}>
                    {part}
                </a>
            );
        }
        return part;
    });
}

/** Renders a block of text preserving newlines and making URLs clickable. */
function TextBlock({ text }: { text: string }) {
    const lines = text.split('\n');
    return (
        <>
            {lines.map((line, i) =>
                line.trim() === '' ? (
                    <br key={i} />
                ) : (
                    <Description key={i}>{linkify(line)}</Description>
                )
            )}
        </>
    );
}

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
    max-width: 1200px;
    padding: 1.5rem 2rem 5rem;
    box-sizing: border-box;
`;

const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.95rem;
    color: #f78f27;
    text-decoration: none;
    margin-bottom: 1.5rem;
    font-weight: 600;
    transition: opacity 0.15s;

    &:hover {
        opacity: 0.75;
    }
`;

/* ── Hero ── */

const Hero = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 240px;
    overflow: hidden;
    background: #fff;
    margin-bottom: 0;
`;

const GearsLeft = styled.img`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    height: 100%;
    width: auto;
    max-height: 280px;

    @media (max-width: 860px) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
    padding: 2.5rem 3rem;
    /* take up at most the right half of the hero */
    max-width: 50%;
`;

const LogoImg = styled.img`
    width: 100%;
    max-width: 320px;
    max-height: 120px;
    object-fit: contain;
    display: block;
`;

const CompanyNameFallback = styled.h1`
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 900;
    color: #1a1a1a;
    margin: 0;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1;
    position: relative;
    z-index: 1;
`;

const SponsorBadge = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #f78f27;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0.3rem 0.85rem;
    border-radius: 20px;
    z-index: 2;
`;

/* ── Tab bar ── */

const TabBar = styled.nav`
    display: flex;
    align-items: flex-end;
    gap: 0;
    border-bottom: 2px solid #d0ccc8;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
`;

const TabBtn = styled.button<{ $active: boolean }>`
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    font-family: 'Alumni Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: ${(p) => (p.$active ? 700 : 400)};
    color: ${(p) => (p.$active ? '#f78f27' : '#333')};
    padding: 0.7rem 0.5rem 0.3rem;
    white-space: nowrap;
    position: relative;
    transition: color 0.15s;
    flex: 1;
    text-align: center;

    &:focus,
    &:focus-visible,
    &:active {
        outline: none;
        box-shadow: none;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 3px;
        background: #f78f27;
        opacity: ${(p) => (p.$active ? 1 : 0)};
        transition: opacity 0.15s;
    }

    &:hover {
        color: #f78f27;
    }
`;

/* ── Tab content ── */

const TabContent = styled.div`
    padding: 2rem 0;
`;

const Description = styled.p`
    font-size: 1.05rem;
    color: #333;
    line-height: 1.75;
    max-width: 900px;
    margin: 0 0 1.5rem;
`;

const PlaceholderNote = styled.div`
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 12px;
    border-left: 4px solid #f78f27;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 600px;
`;

const BoothImg = styled.img`
    max-width: 100%;
    max-height: 600px;
    border-radius: 12px;
    display: block;
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

    const tabs = getActiveTabs(exhibitioner?.obszaryPrezentacji);
    const [activeTab, setActiveTab] = useState<TabKey>(tabs[0] ?? 'Informacja o firmie');

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

    if (exhibitioner.detailDisabled) {
        return <Navigate to="/wystawcy" replace />;
    }

    const isSponsor = !!exhibitioner.sponsorLabel;
    const op = exhibitioner.obszaryPrezentacji;

    /** Renders the content for the currently active tab. */
    function renderContent() {
        if (!op) {
            // Legacy entry – only "Informacja o firmie" tab exists
            return <Description>{exhibitioner!.shortDescription}</Description>;
        }

        const value = op[activeTab];

        if (activeTab === 'Lokalizacja stoiska') {
            if (!value || typeof value !== 'string') {
                return (
                    <PlaceholderNote>
                        <strong>Grafika w przygotowaniu.</strong> Lokalizacja stoiska zostanie
                        dodana wkrótce.
                    </PlaceholderNote>
                );
            }
            return <BoothImg src={value} alt={`Lokalizacja stoiska – ${exhibitioner!.name}`} />;
        }

        if (activeTab === 'Multimedia') {
            if (!value || !Array.isArray(value) || value.length === 0) return null;
            return (
                <>
                    {(value as string[]).map((item, i) => (
                        <Description key={i}>{item}</Description>
                    ))}
                </>
            );
        }

        if (typeof value === 'string' && value.trim() !== '') {
            return <TextBlock text={value} />;
        }

        return (
            <PlaceholderNote>
                <strong>Sekcja w przygotowaniu.</strong> Wkrótce pojawią się tu szczegółowe
                informacje. Zapraszamy na targi ITP 2026!
            </PlaceholderNote>
        );
    }

    return (
        <Page>
            <SEO
                title={`${exhibitioner.name} – Wystawcy ITP 2026`}
                description={exhibitioner.shortDescription}
                canonicalUrl={`https://itp.best.krakow.pl/wystawcy/${exhibitioner.id}`}
            />
            <Inner>
                <BackLink to="/wystawcy">← Wróć do listy wystawców</BackLink>

                {/* ── Hero ── */}
                <Hero>
                    <GearsLeft src={gearsDetailSvg} alt="" />
                    {isSponsor && <SponsorBadge>{exhibitioner.sponsorLabel}</SponsorBadge>}
                    <LogoWrapper>
                        {exhibitioner.logo
                            ? <LogoImg src={exhibitioner.logo} alt={exhibitioner.name} />
                            : <CompanyNameFallback>{exhibitioner.name}</CompanyNameFallback>
                        }
                    </LogoWrapper>
                </Hero>

                {/* ── Tab bar ── */}
                <TabBar>
                    {tabs.map((tab) => (
                        <TabBtn
                            key={tab}
                            $active={activeTab === tab}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </TabBtn>
                    ))}
                </TabBar>

                {/* ── Tab content ── */}
                <TabContent>
                    {renderContent()}
                </TabContent>
            </Inner>
        </Page>
    );
}
