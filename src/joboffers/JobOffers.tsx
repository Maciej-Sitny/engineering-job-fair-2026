import { useState, useMemo } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import {
    JOB_OFFERS,
    ALL_WORK_MODES,
    ALL_EMPLOYMENT_TYPES,
    type WorkMode,
    type EmploymentType,
} from './jobOffersData';
import searchIcon from '../exhibitioners/Group 2.svg';

/* ==========================================================================
   PAGE LAYOUT
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
    max-width: 1300px;
    padding: 2.5rem 1.5rem 5rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

/* ==========================================================================
   SIDEBAR / FILTERS
   ========================================================================== */

const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: sticky;
    top: 100px;
`;

const SearchRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
`;

const FilterInput = styled.input`
    flex: 1;
    border: 1.5px solid #e0e0e0;
    border-radius: 24px;
    padding: 0.65rem 1.2rem;
    font-size: 1.05rem;
    font-family: inherit;
    outline: none;
    background: #fff;
    color: #1a1a1a;
    transition: border-color 0.2s;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #f78f27;
    }
`;

const SelectWrapper = styled.div`
    position: relative;
    width: 100%;

    &::after {
        content: '';
        position: absolute;
        right: 1.1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #aaa;
        pointer-events: none;
        transition: border-top-color 0.2s;
    }

    &:focus-within::after {
        border-top-color: #f78f27;
    }
`;

const FilterSelect = styled.select<{ $hasValue: boolean }>`
    width: 100%;
    border: 1.5px solid #d0d0d0;
    border-radius: 24px;
    padding: 0.65rem 2.5rem 0.65rem 1.2rem;
    font-size: 1.05rem;
    font-family: inherit;
    outline: none;
    background: #fff;
    color: ${(p) => (p.$hasValue ? '#1a1a1a' : '#999')};
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

    &:focus {
        border-color: #f78f27;
        box-shadow: 0 0 0 3px rgba(247, 143, 39, 0.12);
    }

    &:hover {
        border-color: #b8b8b8;
    }

    option {
        color: #1a1a1a;
        background: #fff;
    }

    option[value=''] {
        color: #999;
    }
`;


const SearchButton = styled.button`
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 50%;
    background: #f78f27;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background: #e07a18;
    }

    img {
        width: 22px;
        height: 22px;
    }
`;

/* ==========================================================================
   GRID
   ========================================================================== */

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const NoResults = styled.p`
    grid-column: 1 / -1;
    color: #888;
    font-size: 1.05rem;
    padding: 1.5rem 0;
`;

/* ==========================================================================
   CARD
   ========================================================================== */

const Card = styled.div`
    background: #fff;
    border: 1.5px solid #e8e8e8;
    border-radius: 20px;
    padding: 1.5rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    min-height: 180px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    transition: transform 0.15s, box-shadow 0.15s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);
    }
`;

const CardTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 auto;
    line-height: 1.35;
`;

const CardFooter = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 1.5rem;
`;

const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`;

const CompanyName = styled.span`
    font-size: 1.15rem;
    font-weight: 600;
    color: #1a1a1a;
`;

const LocationText = styled.span`
    font-size: 1rem;
    color: #666;
`;

const ApplyButton = styled.a`
    display: inline-block;
    background: #f78f27;
    color: #fff;
    font-family: 'Alumni Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.45rem 1.4rem;
    border-radius: 24px;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
        background: #e07a18;
        color: #1a1a1a;
    }
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function JobOffers() {
    const [searchInput, setSearchInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [workMode, setWorkMode] = useState<WorkMode | ''>('');
    const [employmentType, setEmploymentType] = useState<EmploymentType | ''>('');

    const filtered = useMemo(() => {
        return JOB_OFFERS.filter((offer) => {
            const matchesQuery =
                searchQuery.trim() === '' ||
                offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                offer.companyName.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesWorkMode = workMode === '' || offer.workMode === workMode;
            const matchesEmployment = employmentType === '' || offer.employmentType === employmentType;

            return matchesQuery && matchesWorkMode && matchesEmployment;
        });
    }, [searchQuery, workMode, employmentType]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchQuery(searchInput);
    };

    return (
        <Page>
            <SEO
                title="Oferty Pracy – Inżynierskie Targi Pracy 2026"
                description="Przeglądaj oferty pracy od firm uczestniczących w Inżynierskich Targach Pracy 2026. Znajdź wymarzoną pracę!"
                canonicalUrl="https://itp.best.krakow.pl/oferty-pracy"
            />
            <Inner>
                {/* ── Sidebar / Filters ── */}
                <Sidebar>
                    <form onSubmit={handleSearch}>
                        <SearchRow>
                            <FilterInput
                                type="text"
                                placeholder="Wyszukaj stanowisko"
                                value={searchInput}
                                onChange={(e) => {
                                    setSearchInput(e.target.value);
                                    setSearchQuery(e.target.value);
                                }}
                            />
                            <SearchButton type="submit" aria-label="Szukaj">
                                <img src={searchIcon} alt="" />
                            </SearchButton>
                        </SearchRow>
                    </form>

                    <SelectWrapper>
                        <FilterSelect
                            $hasValue={workMode !== ''}
                            value={workMode}
                            onChange={(e) => setWorkMode(e.target.value as WorkMode | '')}
                            aria-label="Tryb pracy"
                        >
                            <option value="">Tryb pracy</option>
                            {ALL_WORK_MODES.map((mode) => (
                                <option key={mode} value={mode}>
                                    {mode}
                                </option>
                            ))}
                        </FilterSelect>
                    </SelectWrapper>

                    <SelectWrapper>
                        <FilterSelect
                            $hasValue={employmentType !== ''}
                            value={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value as EmploymentType | '')}
                            aria-label="Etat"
                        >
                            <option value="">Etat</option>
                            {ALL_EMPLOYMENT_TYPES.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </FilterSelect>
                    </SelectWrapper>
                </Sidebar>

                {/* ── Job cards grid ── */}
                <Grid>
                    {filtered.length === 0 && (
                        <NoResults>Brak ofert spełniających podane kryteria.</NoResults>
                    )}
                    {filtered.map((offer) => (
                        <Card key={offer.id}>
                            <CardTitle>Stanowisko: {offer.title}</CardTitle>
                            <CardFooter>
                                <CompanyInfo>
                                    <CompanyName>{offer.companyName}</CompanyName>
                                    <LocationText>{offer.location}</LocationText>
                                </CompanyInfo>
                                <ApplyButton
                                    href={offer.applyUrl ?? '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Aplikuj
                                </ApplyButton>
                            </CardFooter>
                        </Card>
                    ))}
                </Grid>
            </Inner>
        </Page>
    );
}
