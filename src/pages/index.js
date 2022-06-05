import React from "react"
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Footer from '../components/Footer'
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Lato", sans-serif;
    margin: 0;
    height: 100vh;
  }
`
const Aside = styled.div``;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFooter = styled(Footer)`
  @media screen and (min-width: 700px) {
    display: none;
  };
`;

const IndexPage = () => (
<>
  <GlobalStyles />
  <SEO/>
  <Aside>
    <Navbar/>
  </Aside>
  <Main>
    <Content/>
    <StyledFooter/>
  </Main>
</>
)

export default IndexPage;
