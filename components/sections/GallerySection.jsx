import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StackGrid, { transitions } from "react-stack-grid";
import { Lightbox } from "../../components"
import Image from 'next/image'
import { device } from "../../utils/breakpoints";

const Section = (props) => {
  const { header, images } = props;
  const { fadeDown } = transitions;
  const imgURLs = images.photos.map((data) => {
    return {
      src: `https:${data.fields.file.url}?fm=jpg&q=80`,
      thumbnail: `https:${data.fields.file.url}?fit=pad&w=200`,
      width: `${data.fields.file.details.image.width}`,
      height: `${data.fields.file.details.image.height}`,
      caption: `${data.fields.description ? data.fields.description : ''}`,
    };
  });
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWindowWidth(window.innerWidth)
    );
  }, []);

  return (
    <LightboxSectionContainer>
      <SectionHeader>{header}</SectionHeader>
      <Lightbox>
        <StackGrid
          className="services__items-container"
          monitorImagesLoaded={true}
          columnWidth={windowWidth < 425 ? "50%" : "25%"}
          gutterWidth={8}
          gutterHeight={5}
          appear={fadeDown.appear}
          appeared={fadeDown.appeared}
          enter={fadeDown.enter}
          entered={fadeDown.entered}
          leaved={fadeDown.leaved}
        >
          {imgURLs.map((item, index) => (
            <Image
              loader={() => item.src}
              placeholder="blur"
              blurDataURL={item.src}
              width={item.width}
              height={item.height}
              key={index}
              className="services-item__image"
              src={item.src}
              alt={item.caption}
            />
          ))}
        </StackGrid>
      </Lightbox>
    </LightboxSectionContainer>
  );
};

export default Section;

const SectionHeader = styled.h2`
  font-size: 3rem;
  line-height: 110%;
  letter-spacing: -0.05em;
`;
const LightboxSectionContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  @media only screen and (${device.laptop}) {
    background-attachment: fixed;
    padding: 5rem;
  }
  .services__items-container {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .services-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__image {
      width: 100%;
      height: auto;
      border-radius: 5px;
      cursor: pointer;
      transition: transform linear .3s;
    }

`;
