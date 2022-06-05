import React from 'react'
import styled from 'styled-components'
import Icon from "antd/es/icon"

const FooterWrapper = styled.div`
  padding: 1px 16px;
  display: block;
  flex-direction: row;
  background: #f1f1f1;
  min-height: 5rem;
  flex-shrink: 0;
`;
const FooterIcons = styled.div`
  margin: 1em 0;
  //padding: 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const FooterIcon = styled(Icon)`
  font-size: 1.5em;
  padding: 0.5em;
`;
const Copyright = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
`;

const Footer = ({className}) => {
  return (
    <FooterWrapper className={className}>
      <FooterIcons>
        <FooterIcon type="instagram"/>
        <FooterIcon type="facebook"/>
        <FooterIcon type="mail"/>
        <FooterIcon type="phone"/>
      </FooterIcons>
      <Copyright>
        <li>© Instalownia.pl {new Date().getFullYear()}</li>
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer;
