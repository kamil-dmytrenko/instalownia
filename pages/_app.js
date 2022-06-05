import React, { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { AnimatePresence } from "framer-motion";
import "../public/styles/main.scss";
import "@brainhubeu/react-carousel/lib/style.css";
import { Footer, Navbar, MessengerComponent } from "../components";
import { CookieConsentIcon } from "../public/icons";
import styled from "styled-components";
import googleAnalytics from "../utils/googleAnalytics";

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      googleAnalytics.initGA();
      window.GA_INITIALIZED = true;
    }
    googleAnalytics.logPageView();
  }, []);
  return (
      <LayoutContainer>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="instalownia.pl"
          expires={150}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background: "#FFF",
            color: "#000",
            fontSize: "14px",
            boxShadow: "0px -2px 11px 1px rgba(0,0,0,0.48)",
          }}
          buttonStyle={{
            backgroundColor: "#3d3e3d",
            color: "#FFF",
            fontSize: "24px",
          }}
        >
          <CookieConsentInner>
            <SocialImg bgImg={CookieConsentIcon} />
            Ta witryna internetowa korzysta z plików cookies (tzw. ciasteczka) które umożliwiają nam świadczenie usług.
            <br/>
            Możesz je wyłączyć w przeglądarce, dzięki czemu nie będą zbierane żadne informacje.
          </CookieConsentInner>
        </CookieConsent>
        <MessengerComponent />
      </LayoutContainer>
  );
};
export default MyApp;

const LayoutContainer = styled.div`
  background-image: url("/img/backgrounds/instalowania-page-background.png");
  background-size: cover;
`;

const SocialImg = styled.div`
  margin-right: 2rem;
  background-image: url(${({ bgImg }) => bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 3rem;
  height: 3rem;
`;

const CookieConsentInner = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

