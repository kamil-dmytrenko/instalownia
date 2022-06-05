import React from "react";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const FeaturesSection = (props) => {
  const { header, features } = props;

  return (
    <SectionContainer>
      <SectionHeader>{header}</SectionHeader>
      <FeatureElements>
        {features.map((feature, index) => (
          <FeatureElement key={`feature - ${index}`}>
            <FeatureImage>
              <img
                src={feature.fields.picture.fields.file.url}
                alt={feature.fields.picture.fields.file.title}
              />
            </FeatureImage>
            <FeatureHeader>{feature.fields.name}</FeatureHeader>
            <p>{feature.fields.description}</p>
          </FeatureElement>
        ))}
      </FeatureElements>
    </SectionContainer>
  );
};

export default FeaturesSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  @media only screen and (${device.laptop}) {
    padding: 4rem;
  }
`;
const SectionHeader = styled.h2`
  font-size: 3rem;
  line-height: 110%;
  letter-spacing: -0.05em;
`;
const FeatureElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (${device.laptop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;
const FeatureElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (${device.tablet}) {
    width: 80%;
  }
  @media only screen and (${device.laptop}) {
    width: 30%;
  }
`;
const FeatureHeader = styled.h3``;
const FeatureImage = styled.div`
  width: 30%;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
