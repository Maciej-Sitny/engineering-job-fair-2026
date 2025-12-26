import styled from 'styled-components';
import itpLogo from './assets/ITP_logo_czarny_ai kopia 2.svg';
import bestLogo from './assets/best_logo_black_and_white.svg';
import facebookIcon from './assets/Facebook.svg';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';

const FooterContainer = styled.footer`
  background-color: #F78F27;
  color: white;
  padding: 40px 0px;
  width: 100%;
  font-family: 'Alumni Sans', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  flex-wrap: no-wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const LogosSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  justify-content: flex-start;
`;

const FooterLogo = styled.img`
  height: 12.5vh;
  width: auto;
  filter: brightness(0) invert(1);
`;

const MenuSection = styled(FooterSection)``;

const MenuTitle = styled.h3`
  font-size: 3vh;
  font-weight: 600;
  margin: 0 0 15px 0;
  text-transform: capitalize;
  text-decoration: underline;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
`;

const MenuItem = styled.li`
  margin-bottom: 8px;
 
`;

const MenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2.5vh;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const ContactSection = styled(FooterSection)``;

const ContactTitle = styled.h3`
  font-size: 3vh;
  font-weight: 600;
  margin: 0 0 15px 0;
  line-height: 1.4;
`;

const ContactText = styled.p`
  margin: 5px 0;
  font-size: 2.5vh;
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 38px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: inline-block;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
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
                        <MenuItem><MenuLink href="#oferty-pracy">Oferty pracy</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#o-nas">O nas</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#dla-pracodawcow">Dla pracodawców</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#kontakt">Kontakt</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#baza-cv">Baza CV</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#wypozyczalnia">Wypożyczalnia Wyposażeń</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#strefa-firm">Strefa firm</MenuLink></MenuItem>
                    </MenuList>
                </MenuSection>

                {/* Right Section - Contact Info */}
                <ContactSection>
                    <ContactTitle>Stowarzyszenie studentów<br />BEST AGH Kraków</ContactTitle>
                    <ContactText>I DS. "Alfa" Blok II</ContactText>
                    <ContactText>ul. Reymonta 17/3a</ContactText>
                    <ContactText>30-059 Kraków</ContactText>
                    <SocialIcons>
                        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src={facebookIcon} alt="Facebook" />
                        </SocialLink>
                        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src={instagramIcon} alt="Instagram" />
                        </SocialLink>
                        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src={linkedinIcon} alt="LinkedIn" />
                        </SocialLink>
                    </SocialIcons>
                </ContactSection>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
