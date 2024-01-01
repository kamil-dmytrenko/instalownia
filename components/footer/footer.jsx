import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Brand from "../brand/Brand";
import { device } from "../../utils/breakpoints";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "../../public/icons";

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <FooterNavigation>
        <Brand />
        <FooterNavigationLinks>
          <Link href="/">
            <FooterNavigationLink>o nas</FooterNavigationLink>
          </Link>
          <Link href="/oferta">
            <FooterNavigationLink>oferta</FooterNavigationLink>
          </Link>
          <Link href="/realizacje">
            <FooterNavigationLink>realizacje</FooterNavigationLink>
          </Link>
          <Link href="/kontakt">
            <FooterNavigationLink>kontakt</FooterNavigationLink>
          </Link>
        </FooterNavigationLinks>
      </FooterNavigation>

      <FooterContactInfo>
        <FooterContactItem>
          <img src={PhoneIcon} alt="phone icon" />
          <FooterNavigationLink href="tel://+48784006099">+48 784 006 099</FooterNavigationLink>
        </FooterContactItem>
        <FooterContactItem>
          <img src={MailIcon} alt="mail icon" />
          <FooterNavigationLink href="mailto:biuro@instalownia.pl">oleksiy@wp.pl</FooterNavigationLink>
        </FooterContactItem>
      </FooterContactInfo>

      {/* <FooterSocialInfo>
       <Link href="#">
         <FooterNavigationLink>
           <img src={FacebookIcon} alt="facebook icon" />
         </FooterNavigationLink>
       </Link>
       <Link href="#">
         <FooterNavigationLink>
           <img src={InstagramIcon} alt="instagram icon" />
         </FooterNavigationLink>
       </Link>
      </FooterSocialInfo> */}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (${device.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;
const FooterNavigation = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const FooterNavigationLinks = styled.div`
  color: #000000;
  width: 100%;
  margin: 20px 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (${device.laptop}) {
      flex-direction: row;
  }
`;
const FooterNavigationLink = styled.a`
  color: #000000;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
`;
const FooterContactInfo = styled.div`
  padding: 0 1em;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (${device.laptop}) {
    align-items: flex-start;
  }
`;
const FooterContactItem = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
  text-decoration: none;
  }
  @media only screen and (${device.tablet}) {
    flex-direction: row;
  }
  @media only screen and (${device.laptop}) {
    padding: 0 5rem;
  }
`;
const FooterSocialInfo = styled.div`
  padding: 0 1em;
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
