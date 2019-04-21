import React from 'react';
import styled from 'styled-components';
import image from '../images/space.jpg';

const Page = styled.div`
  color: var(--primary-light);
  display: flex;
  flex-direction: column;
  margin-top: 54px;
  height: 91vh;
  background: url(${image});
  background-size: cover;
  background-position: 20% 50%;
  background-attachment: fixed;
`;

const Content = styled.div`
  margin: auto 0;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 40px;
  margin-bottom: 0;
`;

const Subheader = styled.p`
  font-size: 20px;
`;

const Span = styled.span`
  color: #fee9c4;
`;

export default () => {
  return (
    <Page>
      <Content>
        <Header>
          Hi, my name is <Span>Ray</Span>
        </Header>
        <Subheader>Welcome to my website</Subheader>
      </Content>
    </Page>
  );
};
