import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/ITP_logo_kolor_ai kopia 1.svg';

const NavbarContainer = styled.header<{ $isScrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => (props.$isScrolled ? '2vh 3vw' : '14px 10vw')};
    box-sizing: border-box;
    background: #fff;
    z-index: 40;
    transition: all 400ms ease;
    ${(props) =>
        props.$isScrolled
            ? `
        margin: 10px auto;
        width: calc(100% - 20vw);
        max-width: 1400px;
        border-radius: 3vw;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    `
            : ''}
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 46px;
    width: auto;
    display: block;
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 28px;
    margin: 0;
    padding: 0;
`;

const NavLink = styled.li`
    a {
        text-decoration: none;
        color: #1e1e1e;
        font-size: 2.3vh;
        font-weight: 500;
        letter-spacing: 0.2px;
        opacity: 0.95;
        transition: color 150ms ease, transform 150ms ease;
    }
    a:hover {
        color: #f78f27;
        transform: translateY(-1px);
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

const PrimaryButton = styled.button`
    background: #f78f27;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    font-size: 2.3vh;
    box-shadow: 0 2px 0 rgba(0,0,0,0.04);
`;

const SecondaryButton = styled.button`
    background: transparent;
    color: #f78f27;
    border: 2px solid #f78f27;
    padding: 8px 18px;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    font-size: 2.3vh;
`;

const links = [
    { label: 'O nas', to: '/o-nas' },
    { label: 'Kontakt', to: '#' }
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavbarContainer $isScrolled={isScrolled}>
            <Content>
                <Left>
                    <Link to="/">
                        <Logo src={logo} alt="ITP logo" />
                    </Link>
                </Left>

                <Right>
                    <NavLinks>
                        {links.map((link) => (
                            <NavLink key={link.label}>
                                <Link to={link.to}>{link.label}</Link>
                            </NavLink>
                        ))}
                    </NavLinks>
                    <PrimaryButton>Wyszukiwarka Wystawców</PrimaryButton>
                    <SecondaryButton>Strefa firm</SecondaryButton>
                </Right>
            </Content>
        </NavbarContainer>
    );
}

export default Navbar;