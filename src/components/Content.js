import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  height: 1000px;
  margin-left: 25%;
  padding: 1px 16px;
  flex: 1 0 auto;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

const Content = () => {
  return (
    <ContentWrapper>
      <h2>Responsive Sidebar Example</h2>
    </ContentWrapper>
  )
}

export default Content