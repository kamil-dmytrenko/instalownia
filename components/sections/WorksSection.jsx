import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import StackGrid, { transitions } from "react-stack-grid";
import { Lightbox } from "../../components"
import Image from "next/image";
import { device } from "../../utils/breakpoints";

const { fadeDown } = transitions;

const Section = (props) => {
  const { header, works } = props;
  const [workItem, setWorkItem] = useState(0);

  const imgURLs = works[workItem].fields.photos.map((data) => {
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

      <SectionBody>
        <SectionMenu>
          {works.map((item, index) => (
            <MenuItem
              isActive={index === workItem}
              onClick={() => {setWorkItem(index)}}
              key={item.sys.id}
            >
              {item.fields.name}
            </MenuItem>
          ))}
        </SectionMenu>

        <SectionGallery>
          <Text>{works[workItem].fields.description}</Text>
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
        </SectionGallery>
      </SectionBody>
    </LightboxSectionContainer>
  );
};

export default Section;

const LightboxSectionContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const SectionHeader = styled.h2`
  font-size: 3rem;
  line-height: 110%;
  letter-spacing: -0.05em;
`;
const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (${device.laptop}) {
    flex-direction: row;
  }
`;
const SectionMenu = styled.ul`
  flex: 1 1 25%;
  list-style-type: none;
`;
const MenuItem = styled.li`
  padding: 0.5rem;
  font-size: larger;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;
const Text = styled(ReactMarkdown)`
  font-size: 4vw;
  @media screen and (${device.laptop}) {
    font-size: 2vw;
  }
  @media screen and (${device.laptopL}) {
    font-size: 1.2vw;
  }
  padding: 0 2rem 0 0;
  & a {
    color: #404a4b;
    font-weight: bolder;
    text-decoration: none;
    cursor: pointer;
  }
`;
const SectionGallery = styled.div`
  flex: 1 1 60%;
`;
