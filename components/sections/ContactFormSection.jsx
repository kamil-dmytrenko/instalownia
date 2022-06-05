import React from "react";
import styled from "styled-components";

const Section = () => {

  return (
    <SectionContainer>
      <SectionHeader>Zapraszamy do kontaktu</SectionHeader>
      <ContactFormContainer>

      </ContactFormContainer>
    </SectionContainer>
  );
};

export default Section;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const SectionHeader = styled.h1`
  padding: 2rem;
  align-self: center;
`;
const ContactFormContainer = styled.div`
  margin: 2rem;
  padding: 2rem;
`;
