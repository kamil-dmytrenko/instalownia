import React from "react";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const MainSection = (props) => {
  const { header, items } = props;
  return (
    <SectionContainer>
      <SectionHeader>{header}</SectionHeader>
      {items.map((item, index) => (
        <SectionItem key={`item - ${index}`}>
          <ImageContainer src={item.image} alt={item.imageAlt} />
          <TextContainer>
            <p>{item.text}</p>
          </TextContainer>
        </SectionItem>
      ))}
    </SectionContainer>
  );
};

export default MainSection;

const SectionContainer = styled.section`
  background-color: transparent;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media only screen and (${device.laptop}) {
    padding: 4rem;
  }
`;
const SectionHeader = styled.h2`
  font-size: 2rem;
  line-height: 110%;
  letter-spacing: -0.05em;
  @media only screen and (${device.laptop}) {
      font-size: 3rem;
  }
`;
const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  @media only screen and (${device.laptop}) {
    margin: 0 8rem;
    flex-direction: row;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;
const ImageContainer = styled.img`
  width: 50%;
  height: auto;
  @media only screen and (${device.tablet}) {
    width: 45%;
  }
  @media only screen and (${device.laptop}) {
    width: 25%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;
  @media only screen and (${device.tablet}) {
    align-items: flex-start;
    width: 80%;
    text-align: left;
  }
  @media only screen and (${device.laptop}) {
    width: 75%;
  }
`;
const TextHeader = styled.h3`
  margin: 0;
`;
