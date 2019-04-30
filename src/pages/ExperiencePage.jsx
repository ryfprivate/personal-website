import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import image from '../images/city.jpg';
import text from '../data/lorem';

const gradient = 'rgba(0, 0, 0, 0.3)';
const background = `
  background: linear-gradient(${gradient}, ${gradient}), url(${image});
  background-size: cover;
  background-position: 20% 50%;
  background-attachment: fixed;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-light);
`;

const Text = styled.p`
  color: var(--primary-light);
`;

export default () => {
  return (
    <Page name="experience" background={background}>
      <Wrap>
        <Text>{text}</Text>
      </Wrap>
    </Page>
  );
};
