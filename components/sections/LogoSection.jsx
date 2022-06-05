import React from "react";
import dynamic from 'next/dynamic';
import styled from "styled-components";
import { device } from "../../utils/breakpoints";
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false
});
import { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';

const Section = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        Korzystamy z produktów najlepszych producentów{" "}
      </SectionHeader>

      <Carousel
       plugins={[
        'infinite',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 5
          }
        },
       {
         resolve: autoplayPlugin,
         options: {
           interval: 2000,
         }
       },
     ]}   
      animationSpeed={1000}
      breakpoints={{
        464: {
          plugins: [
           {
             resolve: slidesToShowPlugin,
             options: {
              numberOfSlides: 3
             }
           },
         ]
        },
        900: {
          plugins: [
           {
             resolve: slidesToShowPlugin,
             options: {
              numberOfSlides: 5
             }
           },
         ]
        }
      }}
       >
        <a href="https://wilo.com/en/index.html" target="_blank">
          <Logo src="img/logos/vilo_logo.png" alt="" />
        </a>
        <a href="https://fujielectric.eu/" target="_blank">
          <Logo src="img/logos/fuji_logo.png" alt="" />
        </a>
        <a href="https://www.geberit.pl/" target="_blank">
          <Logo src="img/logos/geberit_logo.png" alt="" />
        </a>
        <a href="https://www.hager.pl/" target="_blank">
          <Logo src="img/logos/hager_logo.png" alt="" />
        </a>
        <a href="https://pl.grundfos.com/" target="_blank">
          <Logo src="img/logos/grundfos_logo.png" alt="" />
        </a>
        <a href="https://peflex.pl/" target="_blank">
          <Logo src="img/logos/peflex_logo.png" alt="" />
        </a>
        <a href="https://www.stiebel-eltron.pl/" target="_blank">
          <Logo src="img/logos/stiebel_eltron_logo.png" alt="" />
        </a>
        <a href="https://www.tece.com/" target="_blank">
          <Logo src="img/logos/tece_logo.png" alt="" />
        </a>
        <a href="https://www.vaillant.pl/" target="_blank">
          <Logo src="img/logos/vaillant_logo.png" alt="" />
        </a>
        <a href="https://www.viega.pl/" target="_blank">
          <Logo src="img/logos/viega_logo.png" alt="" />
        </a>
        <a href="https://www.zehnder.pl/" target="_blank">
          <Logo src="img/logos/zehnder_logo.png" alt="" />
        </a>
      </Carousel>
    </SectionContainer>
  );
};

export default Section;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const SectionHeader = styled.h2`
  padding: 2rem;
  align-self: center;
`;
const Logo = styled.img`
  cursor: pointer;
  margin: 0.5rem;
  min-width: 4rem;
  max-width: 5rem;
  height: auto;
  @media only screen and (${device.laptop}) {
    margin: 1rem;
    max-width: 7rem;
  }
`;
