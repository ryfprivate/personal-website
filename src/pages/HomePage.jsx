import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import image from '../images/space.jpg';

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
  height: 100vh;
`;

const Content = styled.div`
  margin: auto 0;
  text-align: center;
`;

const TextContainer = styled.div`
  margin: 0 auto;
  background: var(--primary-light);
  opacity: 0.5;
`;

const Header = styled.h2`
  ${background};
  font-size: 40px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 0;
`;

const Subheader = styled.p`
  ${background};
  font-size: 20px;
  font-weight: 600;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin-top: 0;
  padding-bottom: 1%;
`;

class HomePage extends React.Component {
  componentDidMount() {
    console.log('mounted home');
  }
  render() {
    return (
      <Page name="home" background={background}>
        <Wrap
          onScroll={() => {
            console.log('function');
          }}
        >
          <Content>
            <TextContainer>
              <Header>Hi, my name is Ray</Header>
              <Subheader>Welcome to my website</Subheader>
            </TextContainer>
          </Content>
        </Wrap>
      </Page>
    );
  }
}

export default HomePage;
