import React from 'react'
import Image from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import {Icon} from 'antd'
import {Dropdown} from './Dropdown'

const Nav = {
  Wrapper: styled.div`
  margin: 0;
  padding: 0;
  width: 25%;
  position: fixed;
  height: 100%;
  overflow: auto;
  background: #f1f1f1;
  @media screen and (max-width: 700px) {
    display: flex;
    height: auto;
    position: relative;
    text-align: center;
    float: none;
    width: 100%;
  };
`,
  Logo: styled(Image)`
    margin: 2em auto auto;
    max-width: 45%;
    @media screen and (max-width: 700px) {
      display: none;
    };
  `,
  Menu: styled.div`
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 700px) {
      padding-top: 0;
      flex-direction: row;
      justify-content: space-evenly;
    };
`,
  Link: styled.a`
    font-family: 'Slabo 27px', serif;
    padding: 0.6em 0.6em 0;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0 1px;
    transition: background-size .3s;
    font-size: larger;
    color: black;
    
    &:hover {
      color: black;
      cursor: pointer;
      background-size: 100% 1px;
    };
    @media screen and (min-width: 350px) and (max-width: 700px) {
      padding: 10px;
    };
  `,
  Footer: styled.div`  
    position: absolute;
    bottom: 1em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media screen and (max-width: 700px) {
      display: none;
    };
  `,
  FooterIcon: styled(Icon)`
  font-size: 1.5em;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 1px;
  transition: background-size .3s;
  :hover {
    cursor: pointer;
    background-size: 100% 1px;
  }
`
}

const Navbar = () => {
  return <StaticQuery query={pageQuery} render={data => (
    <Nav.Wrapper>
      <Nav.Logo fluid={data.logo.childImageSharp.fluid}/>
      <Dropdown label='instalacje' items={['elektryka', 'wod-kan', 'rekuperacja']}/>
      <Nav.Menu>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#news">News</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav.Menu>
      <Nav.Footer>
        <Nav.FooterIcon type="instagram"/>
        <Nav.FooterIcon type="facebook"/>
        <Nav.FooterIcon type="mail"/>
        <Nav.FooterIcon type="phone"/>
      </Nav.Footer>
    </Nav.Wrapper>
  )}/>
}

export default Navbar

const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "kamil2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`