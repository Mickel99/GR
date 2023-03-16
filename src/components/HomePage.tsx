import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89vh;
  background-image: url("https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  color: white;
  text-shadow: 2px 2px #333;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  width: 93%;
  background-color: #e5eaf5;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const MenuTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const MenuItem = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem 2rem;
  border: 2px solid #333;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: #e5eaf5;
  width: 93%;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const InfoTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
  max-width: 800px;
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const InfoDivider = styled.hr`
  width: 80%;
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #c2dde6;
  width: 94.7%;
  position: relative;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: #4c9baf;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Hero>
        <HeroTitle>Welcome to My Restaurant</HeroTitle>
      </Hero>

      <MenuSection>
        <MenuTitle>Menu</MenuTitle>
        <MenuItems>
          <MenuItem>Appetizers</MenuItem>
          <MenuItem>Entrees</MenuItem>
          <MenuItem>Desserts</MenuItem>
          <MenuItem>Beverages</MenuItem>
        </MenuItems>
      </MenuSection>

      <InfoSection>
        <InfoTitle>About Us</InfoTitle>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          condimentum risus quis dolor faucibus, eu tincidunt elit pulvinar.
          Proin nec velit sit amet leo venenatis dapibus.
        </InfoText>
        <InfoDivider />
        <InfoText>
          Nullam posuere arcu at lectus bibendum, quis consequat ex gravida.
          Maecenas suscipit, nibh sed tincidunt iaculis, tellus velit vehicula
          lectus, vel rutrum odio felis nec sapien.
        </InfoText>
      </InfoSection>

      {/* Footer component */}
      <Footer>
        <SocialIcons>
          <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
        </SocialIcons>
        <FooterText>© 2023 My Restaurant. All rights reserved.</FooterText>
      </Footer>
    </HomePageContainer>
  );
};

export default HomePage;

