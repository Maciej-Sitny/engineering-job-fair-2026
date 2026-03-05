import styled from 'styled-components';
import SEO from '../components/SEO';

/* ==========================================================================
   SCHEDULE PAGE - Harmonogram
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
        justify-content: center;
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
        align-self: stretch;
        padding-left: 0.25rem;
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

const ItemsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ScheduleItem = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    align-items: start;
    gap: 0 1.5rem;
    padding: 0.625rem 0;
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
        width: 100%;
    }

    @media (min-width: 481px) {
        gap: 0 2rem;
        padding: 0.75rem 0;

        &::after {
            width: 100px;
        }
    }

    @media (min-width: 769px) {
        gap: 0 3rem;
        padding: 0.875rem 0;

        &::after {
            width: 130px;
        }
    }

    @media (min-width: 1025px) {
        gap: 0 4rem;
        padding: 1rem 0;

        &::after {
            width: 100px;
        }
    }
`;

const Time = styled.div`
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 400;
    color: #1e1e1e;
    line-height: 1.1;
    letter-spacing: -0.01em;
    min-width: 3rem;
    grid-row: 1 / 3;
    align-self: end;

    @media (min-width: 481px) {
        min-width: 4rem;
        font-size: clamp(1.125rem, 3.5vw, 2.25rem);
    }

    @media (min-width: 769px) {
        min-width: 5rem;
        font-size: clamp(1.25rem, 2.5vw, 2.5rem);
    }

    @media (min-width: 1025px) {
        min-width: 6rem;
        font-size: clamp(1.5rem, 3.2vw, 3.7rem);
    }
`;

const EventTitle = styled.h2`
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    color: #1e1e1e;
    margin: 0;
    line-height: 1.3;
    letter-spacing: 0.01em;
    text-align: right;
    align-self: end;

    @media (min-width: 769px) {
        font-size: clamp(1.1rem, 2vw, 1.5rem);
    }

    @media (min-width: 1025px) {
        font-size: clamp(1.2rem, 1.5vw, 1.6rem);
    }
`;

const EventDescription = styled.p`
    font-size: clamp(0.85rem, 2vw, 1.1rem);
    font-weight: 400;
    color: #1e1e1e;
    margin: 0.25rem 0 0;
    line-height: 1.5;
    text-align: right;
    align-self: start;

    @media (min-width: 769px) {
        font-size: clamp(0.9rem, 1.5vw, 1.15rem);
    }

    @media (min-width: 1025px) {
        font-size: clamp(0.95rem, 1.2vw, 1.2rem);
    }
`;

const scheduleItems = [
    {
        time: '10:00',
        title: 'Rozpoczęcie',
        description: 'Oficjalne rozpoczęcie XXVIII edycji Inżynierskich Targów Pracy.',
    },
    {
        time: '10:05',
        title: 'Przemówienie',
        description: 'Przemówienie Głównego Koordynatora XXVIII edycji Inżynierskich Targów Pracy.',
    },
    {
        time: '10:30',
        title: 'Ankietowanie',
        description:
            'Rozpoczęcie ankietowania pozwalającego na wzięcie udziału w konkursach.',
    },
    {
        time: '11:00',
        title: 'Konkurs 1',
        description: 'Ogłoszenie pierwszego zwycięzcy konkursu 1. Zwycięzcy będą wybierani w trzydziesto minutowych odstępach aż do godziny 15:30.'
    },
    {
        time: '11:30',
        title: 'Konkurs 2',
        description: 'Ogłoszenie pierwszego zwycięzcy konkursu 2. Zwycięzcy będą wybierani w trzydziesto minutowych odstępach aż do godziny 15:30.'
    },
    {
        time: '15:00',
        title: 'Podziękowania',
        description: 'Oficjalne podziękowania dla wystawców za udział w wydarzeniu.',
    },
    {
        time: '15:30',
        title: 'Ostatnie ogłoszenie zwycięzców',
        description:
            'Ostatnie ogłoszenie zwycięzców konkursów. Przyznanie statuetek w trzech kategoriach dla Wystawców.',
    },
    {
        time: '16:00',
        title: 'Oficjalne zakończenie',
        description: 'Oficjalne zakończenie XXVIII edycji Inżynierskich Targów Pracy.',
    },
];

function Schedule() {
    return (
        <Page>
            <SEO
                title="Harmonogram – Inżynierskie Targi Pracy 2026"
                description="Harmonogram 28. edycji Inżynierskich Targów Pracy – 11 marca 2026, Kraków. Sprawdź szczegółowy plan wydarzeń na dzień targów."
                canonicalUrl="https://itp.best.krakow.pl/harmonogram"
            />
            <Wrapper>
                <SideTitle>Harmonogram</SideTitle>
                <ItemsContainer>
                    <MobileTitle>Harmonogram</MobileTitle>
                    {scheduleItems.map((item) => (
                        <ScheduleItem key={`${item.time}-${item.title}`}>
                            <Time>{item.time}</Time>
                            <EventTitle>{item.title}</EventTitle>
                            <EventDescription>
                                {item.description.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < item.description.split('\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </EventDescription>
                        </ScheduleItem>
                    ))}
                </ItemsContainer>
            </Wrapper>
        </Page>
    );
}

export default Schedule;
