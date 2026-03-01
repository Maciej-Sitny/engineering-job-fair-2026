import styled from 'styled-components';
import { Link } from 'react-router-dom';
import itpLogo from './assets/ITP_logo_czarny_ai kopia 2.svg';
import bestLogo from './assets/best_logo_black_and_white.svg';
import facebookIcon from './assets/Facebook.svg';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';

/* ==========================================================================
   FOOTER - RESPONSIVE STYLES (Mobile-First Approach)
   
   Progi responsywności:
   - Bazowe style: < 480px (bardzo małe telefony)
   - 481px - 768px: standardowe telefony i małe tablety
   - 769px - 1024px: tablety / małe laptopy
   - 1025px+: duże ekrany / desktop
   ========================================================================== */

const FooterContainer = styled.footer`
  background-color: #F78F27;
  color: white;
  width: 100%;
  font-family: 'Alumni Sans', sans-serif;
  box-sizing: border-box;
  
  /* --- BASE: Mobile First --- */
  padding: 2rem 1rem;

  /* --- 481px+: Większy padding --- */
  @media (min-width: 481px) {
    padding: 2.5rem 1.5rem;
  }

  /* --- 769px+: Tablety --- */
  @media (min-width: 769px) {
    padding: 2.5rem 2rem;
  }

  /* --- 1025px+: Desktop --- */
  @media (min-width: 1025px) {
    padding: 2.5rem 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  
  /* --- BASE: Kolumna na mobile --- */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;

  /* --- 769px - 1024px: Nadal kolumna, ale z mniejszym gap --- */
  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }

  /* --- 1025px+: Wiersz na desktop (oryginalny layout) --- */
  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 5vw;
    flex-wrap: nowrap;
  }
`;

const FooterSection = styled.div`
  /* --- BASE: Pełna szerokość na mobile --- */
  width: 100%;
  
  /* --- 1025px+: Flex na desktop --- */
  @media (min-width: 1025px) {
    flex: 1;
    min-width: 250px;
    width: auto;
  }
`;

const LogosSection = styled.div`
  /* --- BASE: Kolumna na mobile --- */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  /* --- 481px+: Wiersz na większych telefonach --- */
  @media (min-width: 481px) {
    flex-direction: row;
    gap: 2rem;
  }

  /* --- 1025px+: Desktop (oryginalny layout) --- */
  @media (min-width: 1025px) {
    flex: 3;
    gap: 5vw;
    justify-content: flex-start;
  }
`;

const FooterLogo = styled.img`
  /* --- BASE: Responsywna wysokość --- */
  height: clamp(4rem, 10vh, 8rem);
  width: auto;
  filter: brightness(0) invert(1);

  /* --- 1000px - 1150px: Jeszcze mniejsze loga --- */
  @media (min-width: 1000px) and (max-width: 1150px) {
    height: 6vh;
  }

  /* --- 1025px - 1499px: Mniejsze loga --- */
  @media (min-width: 1151px) and (max-width: 1499px) {
    height: 8vh;
  }

  /* --- 1500px+: Oryginalny rozmiar na dużym desktop --- */
  @media (min-width: 1500px) {
    height: 12.5vh;
  }
`;

const MenuSection = styled(FooterSection)``;

const MenuTitle = styled.h3`
  /* --- BASE: Responsywny font --- */
  font-size: clamp(1.25rem, 3vh, 1.75rem);
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  text-transform: capitalize;
  text-decoration: underline;

  /* --- 769px+: Większy margines --- */
  @media (min-width: 769px) {
    margin: 0 0 1rem 0;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: clamp(1rem, 2.5vh, 1.5rem);
  transition: opacity 0.3s, color 0.3s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
      color: #1e1e1e;
    }
  }

  &:active {
    color: #1e1e1e;
  }
`;

const ContactSection = styled(FooterSection)``;

const ContactTitle = styled.h3`
  /* --- BASE: Responsywny font --- */
  font-size: clamp(1.25rem, 3vh, 1.75rem);
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;

  /* --- 769px+: Większy margines --- */
  @media (min-width: 769px) {
    margin: 0 0 1rem 0;
  }
`;

const ContactText = styled.p`
  margin: 0.25rem 0;
  font-size: clamp(0.9rem, 2.5vh, 1.25rem);
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  /* --- 1025px+: Wyrównanie do lewej na desktop --- */
  @media (min-width: 1025px) {
    justify-content: flex-start;
    gap: 38px;
    margin-top: 20px;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  transition: transform 0.3s;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
  /* --- BASE: Responsywna ikona --- */
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  filter: brightness(0) invert(1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Section - Logos */}
        <LogosSection>
          <FooterLogo src={itpLogo} alt="Inżynierskie Targi Pracy" />
          <FooterLogo src={bestLogo} alt="BEST AGH Kraków" />
        </LogosSection>

        {/* Middle Section - Menu */}
        <MenuSection>
          <MenuTitle>Menu</MenuTitle>
          <MenuList>
            <MenuItem><MenuLink to="/o-nas">O nas</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/wystawcy">Wystawcy</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/#kontakt">Kontakt</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/strefa-firm">Strefa firm</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/klauzula-cv">Klauzula CV</MenuLink></MenuItem>
          </MenuList>
        </MenuSection>

        {/* Right Section - Contact Info */}
        <ContactSection>
          <ContactTitle>Stowarzyszenie studentów<br />BEST AGH Kraków</ContactTitle>
          <ContactText>I DS. "Alfa" Blok II</ContactText>
          <ContactText>ul. Reymonta 17/3a</ContactText>
          <ContactText>30-059 Kraków</ContactText>
          <SocialIcons>
            <SocialLink href="https://www.facebook.com/BEST.AGH.Krakow" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={facebookIcon} alt="Facebook" />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/bestkrk/" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={instagramIcon} alt="Instagram" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/best-agh-krakow/" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={linkedinIcon} alt="LinkedIn" />
            </SocialLink>
          </SocialIcons>
        </ContactSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
