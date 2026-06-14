import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { JOB_OFFERS } from './jobOffersData';

/* ==========================================================================
   JOB OFFER DETAIL PAGE
   ========================================================================== */

const Page = styled.section`
    max-width: 100%;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    font-family: 'Alumni Sans', sans-serif;
    box-sizing: border-box;

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

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
`;

const SideTitle = styled.div`
    display: none;

    @media (min-width: 769px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: clamp(4rem, 15vw, 15rem);
        font-weight: 500;
        color: #1e1e1e;
        line-height: 1;
        letter-spacing: -0.02em;
        white-space: nowrap;
        flex-shrink: 0;
        user-select: none;
        align-self: flex-start;
        padding-right: 0.25rem;
        margin-left: auto;
    }
`;

const MobileTitle = styled.h1`
    display: block;
    font-size: 15vw;
    font-weight: 900;
    color: #1e1e1e;
    line-height: 0.9;
    letter-spacing: -0.04em;
    margin: 0 0 1.5rem -1rem;
    width: 100vw;

    @media (min-width: 481px) {
        margin-left: -1.5rem;
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #f78f27;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 2rem;
    transition: color 0.2s;

    &:hover {
        color: #e07a18;
    }

    &::before {
        content: '←';
        font-size: 1.3rem;
    }
`;

const JobTitle = styled.h2`
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 700;
    color: #1e1e1e;
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
    text-align: left;
`;

const CompanyName = styled.h3`
    font-size: clamp(1.3rem, 3vw, 2rem);
    font-weight: 500;
    color: #f78f27;
    margin: 0 0 2rem 0;
    line-height: 1.3;
    text-align: left;
`;

const DetailSection = styled.div`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1.5px solid #d4d4d4;
    position: relative;

    /* Orange accent line on bottom */
    &::after {
        content: '';
        position: absolute;
        bottom: -1.5px;
        left: 0;
        width: 80px;
        height: 2.5px;
        background-color: #f78f27;
        transition: width 0.8s ease;
    }

    &:hover::after {
        width: 200px;
    }

    &:last-of-type {
        border-bottom: none;
        &::after {
            display: none;
        }
    }

    @media (min-width: 481px) {
        &::after {
            width: 100px;
        }
    }

    @media (min-width: 769px) {
        &::after {
            width: 130px;
        }
    }
`;

const SectionTitle = styled.h4`
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 700;
    color: #1e1e1e;
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: left;
`;

const SectionContent = styled.p`
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    font-weight: 400;
    color: #1e1e1e;
    margin: 0;
    line-height: 1.6;
    text-align: left;
    white-space: pre-wrap;

    @media (min-width: 769px) {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
    }
`;

const ApplyButton = styled.a`
    display: inline-block;
    background: #f78f27;
    color: #fff;
    font-family: 'Alumni Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: 24px;
    text-decoration: none;
    text-align: center;
    transition: background 0.2s;
    margin-top: 2rem;
    max-width: 250px;

    &:hover {
        background: #e07a18;
        color: #fff;
    }
`;

const NotFound = styled.div`
    text-align: center;
    padding: 3rem 1rem;
`;

function JobOfferDetail() {
    const { id } = useParams<{ id: string }>();
    const offer = JOB_OFFERS.find((o) => o.id === id);

    if (!offer) {
        return (
            <Page>
                <SEO
                    title="Oferta nie znaleziona – Inżynierskie Targi Pracy 2026"
                    description="Nie znaleziono oferty pracy."
                    canonicalUrl={`https://itp.best.krakow.pl/oferty-pracy/${id}`}
                />
                <Wrapper>
                    <ContentContainer>
                        <MobileTitle>OFERTA PRACY</MobileTitle>
                        <NotFound>
                            <h2>Oferta nie została znaleziona</h2>
                            <BackLink to="/oferty-pracy">Powrót do ofert pracy</BackLink>
                        </NotFound>
                    </ContentContainer>
                    <SideTitle>OFERTA PRACY</SideTitle>
                </Wrapper>
            </Page>
        );
    }

    return (
        <Page>
            <SEO
                title={`${offer.title} – ${offer.companyName} – ITP 2026`}
                description={`Oferta pracy: ${offer.title} w ${offer.companyName}. Lokalizacja: ${offer.location || 'Nieokreślona'}. Sprawdź szczegóły oferty.`}
                canonicalUrl={`https://itp.best.krakow.pl/oferty-pracy/${offer.id}`}
            />
            <Wrapper>
                <ContentContainer>
                    <MobileTitle>OFERTA PRACY</MobileTitle>
                    <BackLink to="/oferty-pracy">Powrót do ofert pracy</BackLink>

                    <JobTitle>{offer.title}</JobTitle>
                    <CompanyName>{offer.companyName}</CompanyName>

                    {offer.location && (
                        <DetailSection>
                            <SectionTitle>Lokalizacja</SectionTitle>
                            <SectionContent>{offer.location}</SectionContent>
                        </DetailSection>
                    )}

                    {offer.workMode && (
                        <DetailSection>
                            <SectionTitle>Tryb pracy</SectionTitle>
                            <SectionContent>{offer.workMode}</SectionContent>
                        </DetailSection>
                    )}

                    {offer.employmentType && (
                        <DetailSection>
                            <SectionTitle>Etat</SectionTitle>
                            <SectionContent>{offer.employmentType}</SectionContent>
                        </DetailSection>
                    )}

                    {offer.employmentContract && (
                        <DetailSection>
                            <SectionTitle>Forma zatrudnienia</SectionTitle>
                            <SectionContent>{offer.employmentContract}</SectionContent>
                        </DetailSection>
                    )}

                    {offer.description && (
                        <DetailSection>
                            <SectionTitle>Szczegółowy opis oferty pracy</SectionTitle>
                            <SectionContent>{offer.description}</SectionContent>
                        </DetailSection>
                    )}

                    {offer.applyUrl && offer.applyUrl !== '#' && (
                        <ApplyButton
                            href={offer.applyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Aplikuj na ofertę
                        </ApplyButton>
                    )}
                </ContentContainer>
                <SideTitle>OFERTA PRACY</SideTitle>
            </Wrapper>
        </Page>
    );
}

export default JobOfferDetail;
