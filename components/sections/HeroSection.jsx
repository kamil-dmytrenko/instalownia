import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../../utils/breakpoints";

const HeroSection = (props) => {
  const { header, image, paragraph, link, linkText } = props;
  return (
      <SectionContainer>
        <TextContainer>
          <TextHeader>{header}</TextHeader>
          <p>{paragraph}</p>
          {link && ( <Link href={link}>
            <LinkButton>{linkText}</LinkButton>
          </Link>)}

        </TextContainer>
        {image && (<ImageContainer src={image} alt={header} />)}
      </SectionContainer>
  );
};

export default HeroSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: transparent;
  @media only screen and (${device.laptop}) {
    flex-direction: row;
  }
`;
const ImageContainer = styled.img`
  width: 50%;
  height: auto;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;

  @media only screen and (${device.mobile}) {
    margin: 2rem;
  }
  @media only screen and (${device.tablet}) {
    width: 60%;
    text-align: left;
  }
  @media only screen and (${device.laptop}) {
    align-self: flex-start;
    margin-top: 10rem;
    align-items: flex-start;
  }
`;
const TextHeader = styled.h1`
  margin: 0;
`;
const LinkButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  background: rgb(255, 145, 77);
  background: linear-gradient(
    90deg,
    rgba(255, 145, 77, 1) 10%,
    rgba(255, 189, 89, 1) 85%
  );
  transition: transform 0.3s ease-in;
  &:hover {
    transform: translateY(-0.3em);
  }
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 30px;
`;
