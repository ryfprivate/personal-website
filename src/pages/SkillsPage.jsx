import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import image from '../images/ocean.jpg';
import text from '../data/lorem';

const gradient = 'rgba(0, 0, 0, 0.0)';
const background = `
  background: linear-gradient(${gradient}, ${gradient}), url(${image});
  background-size: cover;
  background-position: 20% 50%;
  background-attachment: fixed;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-dark);
  height: 100vh;
`;

const HeaderContainer = styled.div`
  padding-bottom: 1%;
  border-bottom: 1px solid var(--primary-dark);
  text-align: center;
`;

const Header = styled.h2`
  font-size: 40px;
  margin-bottom: 0;
`;

const Header2 = styled.h3`
  font-size: 20px;
  margin-bottom: 0;
`;

const Subheader = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

const Text = styled.p`
  color: var(--primary-dark);
`;

export default () => {
  return (
    <Page name="skills" background={background}>
      <Wrap>
        <HeaderContainer>
          <Header>Skills</Header>
        </HeaderContainer>
        <Header2>Technical Skills</Header2>
        <Text>
          - Proficiency in HTML5, CSS3, JavaScript (ES6), TypeScript - Styling
          with SASS, Bootstrap 4 and templating with Jade/Pug - Building user
          interfaces with React.js and Babel - App-level state management with
          Redux - Experience with building RESTful web services using Node.js
          frameworks; Express.js and Loopback4 - Understanding of relational and
          non-relational databases including mySQL and MongoDB - Prominent use
          of tools throughout projects: Version control with Git, package
          managing with NPM, module bundling with Webpack
        </Text>
      </Wrap>
    </Page>
  );
};
