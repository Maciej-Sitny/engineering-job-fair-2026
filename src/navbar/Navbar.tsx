import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from './assets/ITP_logo_kolor_ai kopia 1.svg';

/* ==========================================================================
   NAVBAR - RESPONSIVE STYLES (Mobile-First Approach)
   
   Progi responsywności:
   - Bazowe style: < 480px (bardzo małe telefony)
   - 481px - 768px: standardowe telefony i małe tablety
   - 769px - 1024px: tablety / małe laptopy
   - 1025px+: duże ekrany / desktop
   ========================================================================== */

const NavbarContainer = styled.header<{ $isScrolled: boolean; $isMobileMenuOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    background: #fff;
    z-index: 40;
    transition: padding 400ms ease, margin 400ms ease, width 400ms ease, border-radius 400ms ease, box-shadow 400ms ease;
    
    /* --- BASE: Mobile First --- */
    padding: 0.75rem 0;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    
    ${(props) =>
        props.$isScrolled
            ? `
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    `
            : ``}

    /* --- 769px+: Tablety i desktop --- */
    @media (min-width: 769px) {
        padding: ${(props) => (props.$isScrolled ? '1.5vh 0' : '0.875rem 0')};
        ${(props) =>
        props.$isScrolled
            ? `
            margin-top: 10px;
            width: calc(100% - 10vw);
            max-width: 1400px;
            border-radius: 2vw;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `
            : `
            width: 100%;
            max-width: 100%;
        `}
    }

    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding: ${(props) => (props.$isScrolled ? '2vh 0' : '0.875rem 0')};
        ${(props) =>
        props.$isScrolled
            ? `
            width: calc(100% - 20vw);
            border-radius: 3vw;
        `
            : ``}
    }
`;

const Content = styled.div<{ $isScrolled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    box-sizing: border-box;
    transition: padding 400ms ease;
    
    /* --- BASE: Mobile --- */
    padding: 0 1rem;

    /* --- 481px+: Większe telefony --- */
    @media (min-width: 481px) {
        padding: 0 1.5rem;
    }

    /* --- 769px+: Tablety --- */
    @media (min-width: 769px) {
        padding: ${(props) => (props.$isScrolled ? '0 2vw' : '0 3vw')};
    }

    /* --- 1025px+: Desktop --- */
    @media (min-width: 1025px) {
        padding: ${(props) => (props.$isScrolled ? '0 3vw' : '0 5vw')};
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    /* --- BASE: Mniejsze logo na mobile --- */
    height: 2rem;
    width: auto;
    display: block;

    /* --- 481px+: Większe logo --- */
    @media (min-width: 481px) {
        height: 2.5rem;
    }

    /* --- 769px+: Pełny rozmiar --- */
    @media (min-width: 769px) {
        height: 2.875rem;
    }
`;

/* --- Hamburger menu button (mobile only) --- */
const HamburgerButton = styled.button<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.75rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 50;

    span {
        width: 100%;
        height: 3px;
        background: #1e1e1e;
        border-radius: 2px;
        transition: all 300ms ease;
        transform-origin: left;
    }

    ${(props) =>
        props.$isOpen &&
        `
        span:nth-child(1) {
            transform: rotate(45deg);
        }
        span:nth-child(2) {
            opacity: 0;
            transform: translateX(-10px);
        }
        span:nth-child(3) {
            transform: rotate(-45deg);
        }
    `}

    /* --- 769px+: Ukryty na większych ekranach --- */
    @media (min-width: 769px) {
        display: none;
    }
`;

/* --- Mobile menu overlay --- */
const MobileMenu = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform: translateX(${(props) => (props.$isOpen ? '0' : '100%')});
    transition: transform 300ms ease;
    z-index: 45;

    /* --- 769px+: Ukryte na większych ekranach --- */
    @media (min-width: 769px) {
        display: none;
    }
`;

const MobileLogo = styled.img`
    height: 3.5rem;
    width: auto;
    margin-bottom: 1rem;
`;

const MobileNavLinks = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
`;

const MobileNavLink = styled.li`
    a {
        text-decoration: none;
        color: #1e1e1e;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.2px;
        transition: color 150ms ease;
    }
    a:hover, a:active {
        color: #f78f27;
    }
`;

const NavLinks = styled.ul`
    list-style: none;
    display: none;
    gap: 1.5rem;
    margin: 0;
    padding: 0;

    /* --- 769px+: Widoczne na tabletach i desktop --- */
    @media (min-width: 769px) {
        display: flex;
        gap: 1.75rem;
    }
`;

const NavLink = styled.li`
    a {
        text-decoration: none;
        color: #1e1e1e;
        font-size: clamp(0.9rem, 3vh, 1.8rem);
        font-weight: 500;
        letter-spacing: 0.2px;
        opacity: 0.95;
        transition: color 150ms ease, transform 150ms ease;
    }
    
    @media (hover: hover) {
        a:hover {
            color: #f78f27;
            transform: translateY(-1px);
        }
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    /* --- 769px+: Większy gap --- */
    @media (min-width: 769px) {
        gap: 1.75rem;
    }
`;


const SecondaryButton = styled.button`
    /* --- BASE: Mniejszy przycisk na mobile --- */
    background: transparent;
    color: #f78f27;
    border: 2px solid #f78f27;
    padding: 0.4rem 0.875rem;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    font-size: clamp(0.75rem, 1.8vh, 1rem);
    transition: all 150ms ease;
    white-space: nowrap;

    /* --- 481px+: Większy przycisk --- */
    @media (min-width: 481px) {
        padding: 0.5rem 1rem;
        font-size: clamp(0.85rem, 2vh, 1rem);
    }

    /* --- 769px+: Pełny rozmiar --- */
    @media (min-width: 769px) {
        padding: 0.5rem 1.125rem;
        font-size: clamp(0.75rem, 2.5vh, 2.5rem);

    }

    @media (hover: hover) {
        &:hover {
            color: #1e1e1e;
            border-color: #1e1e1e;
        }
    }
`;

const MobileSecondaryButton = styled(SecondaryButton)`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
`;

const links = [
    { label: 'O nas', to: '/o-nas' },
    { label: 'Kontakt', to: '/#kontakt' }
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Zamknij menu mobile po zmianie strony
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Zablokuj scroll gdy menu jest otwarte
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
        if (to.startsWith('/#')) {
            e.preventDefault();
            const id = to.substring(2);

            if (location.pathname === '/') {
                // Jesteśmy już na stronie głównej, tylko scroll
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // Jesteśmy na innej podstronie, nawiguj do głównej z hashem
                navigate('/');
                // Po nawigacji przewiń do sekcji
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 500);
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <NavbarContainer $isScrolled={isScrolled} $isMobileMenuOpen={isMobileMenuOpen}>
                <Content $isScrolled={isScrolled}>
                    <Left>
                        <Link to="/">
                            <Logo src={logo} alt="ITP logo" />
                        </Link>
                    </Left>

                    <Right>
                        <NavLinks>
                            {links.map((link) => (
                                <NavLink key={link.label}>
                                    <Link to={link.to} onClick={(e) => handleLinkClick(e, link.to)}>
                                        {link.label}
                                    </Link>
                                </NavLink>
                            ))}
                        </NavLinks>
                        {/* <PrimaryButton>Wyszukiwarka Wystawców</PrimaryButton> */}
                        <Link to="/strefa-firm">
                            <SecondaryButton>Strefa firm</SecondaryButton>
                        </Link>
                        <HamburgerButton
                            $isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <span />
                            <span />
                            <span />
                        </HamburgerButton>
                    </Right>
                </Content>
            </NavbarContainer>

            {/* Mobile Menu Overlay */}
            <MobileMenu $isOpen={isMobileMenuOpen}>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <MobileLogo src={logo} alt="ITP logo" />
                </Link>
                <MobileNavLinks>
                    {links.map((link) => (
                        <MobileNavLink key={link.label}>
                            <Link to={link.to} onClick={(e) => handleLinkClick(e, link.to)}>
                                {link.label}
                            </Link>
                        </MobileNavLink>
                    ))}
                </MobileNavLinks>
                <Link to="/strefa-firm" onClick={() => setIsMobileMenuOpen(false)}>
                    <MobileSecondaryButton>Strefa firm</MobileSecondaryButton>
                </Link>
            </MobileMenu>
        </>
    );
}

export default Navbar;