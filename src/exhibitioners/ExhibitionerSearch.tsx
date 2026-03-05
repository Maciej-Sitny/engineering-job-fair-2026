import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { EXHIBITIONERS, ALL_CATEGORIES, type Category } from './exhibitionersData';
import GearsCluster from '../components/GearsCluster';
import searchIcon from './Group 2.svg';

/* ==========================================================================
   PAGE WRAPPER
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
    padding: 2rem 1.5rem 4rem;
    box-sizing: border-box;
`;

/* ==========================================================================
   TOP BAR
   ========================================================================== */

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const PageTitle = styled.h1`
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 500;
    color: #1a1a1a;
    margin: 0;
`;

const SearchWrapper = styled.form`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
`;

const SearchInput = styled.input`
    border: 1.5px solid #e0e0e0;
    border-radius: 24px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    width: 220px;
    background: #fff;
    color: #1a1a1a;
    transition: border-color 0.2s;

    &:focus {
        border-color: #f78f27;
    }

    @media (max-width: 600px) {
        width: 160px;
    }
`;

const SearchButton = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #f78f27;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
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
   BODY: SIDEBAR + LIST
   ========================================================================== */

const Body = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

/* ==========================================================================
   MOBILE FILTER TOGGLE
   ========================================================================== */

const FilterToggleButton = styled.button`
    display: none;
    align-items: center;
    gap: 0.5rem;
    background: #f78f27;
    color: #fff;
    border: none;
    border-radius: 24px;
    padding: 0.5rem 1.2rem;
    font-size: 1.1rem;
    font-family: inherit;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: background 0.2s;

    &:hover {
        background: #e07a18;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

/* ==========================================================================
   CATEGORIES SIDEBAR
   ========================================================================== */

const Sidebar = styled.aside<{ $open?: boolean }>`
    background: #fff;
    border: 1.5px solid #e8e8e8;
    border-radius: 16px;
    padding: 1.25rem 1rem;
    position: sticky;
    top: 100px;
    width: 250px;

    @media (max-width: 768px) {
        display: ${(p) => (p.$open ? 'block' : 'none')};
        position: static;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 0.5rem;
    }
`;

const SidebarTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 0.9rem;
`;

const CategoryList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`;

const CategoryItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 1.2rem;
    color: #333;
    line-height: 1.35;
    cursor: pointer;
`;

const Checkbox = styled.input`
    margin-top: 2px;
    appearance: none;
    -webkit-appearance: none;
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: 1.5px solid #ccc;
    background: #fff;
    cursor: pointer;
    position: relative;
    transition: border-color 0.15s, background 0.15s;

    &:checked {
        background: #f78f27;
        border-color: #f78f27;
    }

    &:checked::after {
        content: '';
        position: absolute;
        left: 3.5px;
        top: 0px;
        width: 5px;
        height: 9px;
        border: 2px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
    }
`;

/* ==========================================================================
   COMPANY LIST
   ========================================================================== */

const CompanyList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const NoResults = styled.p`
    color: #888;
    font-size: 1rem;
    padding: 1rem 0;
`;

/* ==========================================================================
   COMPANY CARD  (regular vs sponsor)
   ========================================================================== */

const CardLink = styled(Link)`
    text-decoration: none;
    display: block;
    border-radius: 16px;
    transition: transform 0.15s, box-shadow 0.15s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
`;

const DisabledCardWrap = styled.div`
    display: block;
    border-radius: 16px;
    cursor: default;
`;

const RegularCard = styled.div`
    border: 1.5px solid #e8e8e8;
    border-radius: 40px;
    padding: 0.65rem 2rem;
    background: #fff;
    display: flex;
    align-items: center;
    min-height: 25px;
`;

const SponsorCard = styled.div`
    border-radius: 40px;
    padding: 0.65rem 2rem;
    background: linear-gradient(90deg, #fde8cb 0%, #f78f27 100%);
    display: flex;
    align-items: center;
    min-height: 25px;
    position: relative;
    overflow: hidden;
`;

const CompanyName = styled.span<{ $sponsor?: boolean }>`
    font-size: clamp(1.1rem, 2.2vw, 1.6rem);
    font-weight: 400;
    color: #1a1a1a;
    z-index: 1;
    position: relative;
`;

const SponsorBadge = styled.span`
    margin-left: auto;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #fff;
    z-index: 1;
    position: relative;
    flex-shrink: 0;
    padding-left: 3rem;
`;

/* Decorative gears */
const ClusterWrap = styled.div<{ $top?: string; $right?: string; $bottom?: string; $left?: string; $hideOnMobile?: boolean }>`
    position: absolute;
    top: ${(p) => p.$top ?? 'auto'};
    right: ${(p) => p.$right ?? 'auto'};
    bottom: ${(p) => p.$bottom ?? 'auto'};
    left: ${(p) => p.$left ?? 'auto'};
    opacity: 0.3;
    pointer-events: none;

    @media (max-width: 600px) {
        display: ${(p) => (p.$hideOnMobile ? 'none' : 'block')};
    }
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function ExhibitionerSearch() {
    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set());
    const [filtersOpen, setFiltersOpen] = useState(false);

    const toggleCategory = (cat: Category) => {
        setSelectedCategories((prev) => {
            const next = new Set(prev);
            if (next.has(cat)) next.delete(cat);
            else next.add(cat);
            return next;
        });
    };

    const filtered = useMemo(() => {
        return EXHIBITIONERS.filter((ex) => {
            const matchesQuery =
                query.trim() === '' ||
                ex.name.toLowerCase().includes(query.toLowerCase());

            const matchesCategory =
                selectedCategories.size === 0 ||
                ex.categories.some((c) => selectedCategories.has(c));

            return matchesQuery && matchesCategory;
        }).sort((a, b) => {
            if (a.sponsorLabel === 'SPONSOR GŁÓWNY') return -1;
            if (b.sponsorLabel === 'SPONSOR GŁÓWNY') return 1;
            return a.name.localeCompare(b.name, 'pl');
        });
    }, [query, selectedCategories]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setQuery(inputValue);
    };

    return (
        <Page>
            <SEO
                title="Wystawcy – Inżynierskie Targi Pracy 2026"
                description="Poznaj firmy biorące udział w Inżynierskich Targach Pracy 2026. Przeglądaj wystawców i sprawdź, kto czeka na Ciebie!"
                canonicalUrl="https://itp.best.krakow.pl/wystawcy"
            />
            <Inner>
                {/* ── Top bar ────────────────────────────────────────── */}
                <TopBar>
                    <PageTitle>Wyszukaj Wystawcę, który cię interesuje</PageTitle>
                    <SearchWrapper onSubmit={handleSearch} role="search">
                        <SearchInput
                            type="text"
                            placeholder=""
                            aria-label="Szukaj wystawcy"
                            value={inputValue}
                            onChange={(e) => { setInputValue(e.target.value); setQuery(e.target.value); }}
                        />
                        <SearchButton type="submit" aria-label="Szukaj">
                            <img src={searchIcon} alt="" />
                        </SearchButton>
                    </SearchWrapper>
                </TopBar>

                {/* ── Body ───────────────────────────────────────────── */}
                <Body>
                    {/* Sidebar */}
                    <div>
                        <FilterToggleButton type="button" onClick={() => setFiltersOpen((v) => !v)}>
                            &#9776; {filtersOpen ? 'Ukryj filtry' : 'Filtry'}
                        </FilterToggleButton>
                        <Sidebar $open={filtersOpen}>
                            <SidebarTitle>Kategorie</SidebarTitle>
                            <CategoryList>
                                {ALL_CATEGORIES.map((cat) => (
                                    <CategoryItem key={cat} onClick={() => toggleCategory(cat)}>
                                        <Checkbox
                                            type="checkbox"
                                            checked={selectedCategories.has(cat)}
                                            onChange={() => toggleCategory(cat)}
                                            id={`cat-${cat}`}
                                        />
                                        <label htmlFor={`cat-${cat}`} style={{ cursor: 'pointer' }}>
                                            {cat}
                                        </label>
                                    </CategoryItem>
                                ))}
                            </CategoryList>
                        </Sidebar>
                    </div>

                    {/* Company list */}
                    <CompanyList>
                        {filtered.length === 0 && (
                            <NoResults>Brak wystawców spełniających podane kryteria.</NoResults>
                        )}
                        {filtered.map((ex) => {
                            const inner = ex.sponsorLabel ? (
                                <SponsorCard>
                                    <ClusterWrap $top="-17px" $right="50px">
                                        <GearsCluster size={35} color="orange" rotate={0} />
                                    </ClusterWrap>
                                    <ClusterWrap $bottom="-20px" $right="160px">
                                        <GearsCluster size={35} color="orange" rotate={200} />
                                    </ClusterWrap>
                                    <ClusterWrap $top="-10px" $right="300px" $hideOnMobile>
                                        <GearsCluster size={35} color="orange" rotate={0} />
                                    </ClusterWrap>
                                    <CompanyName $sponsor>{ex.name}</CompanyName>
                                    {ex.sponsorLabel === 'SPONSOR GŁÓWNY' && <SponsorBadge>{ex.sponsorLabel}</SponsorBadge>}
                                </SponsorCard>
                            ) : (
                                <RegularCard>
                                    <CompanyName>{ex.name}</CompanyName>
                                </RegularCard>
                            );

                            return ex.detailDisabled ? (
                                <DisabledCardWrap key={ex.id}>{inner}</DisabledCardWrap>
                            ) : (
                                <CardLink to={`/wystawcy/${ex.id}`} key={ex.id}>{inner}</CardLink>
                            );
                        })}
                    </CompanyList>
                </Body>
            </Inner>
        </Page >
    );
}
