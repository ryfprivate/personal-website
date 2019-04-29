import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import image from '../images/bridge.jpg';
import avatar from '../images/avatar.png';

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
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  padding-bottom: 1%;
  border-bottom: 1px solid var(--primary-light);
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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1%;
  @media only screen and (min-width: 768px) {
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1% 1%;
  padding: 0 2%;
  padding-bottom: 3%;
  background: var(--secondary-dark);
  opacity: 0.7;
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;

const Text = styled.p`
  color: var(--primary-light);
  margin: 0;
  padding-top: 2%;
`;

const Span = styled.span`
  color: var(--secondary-light);
`;

const Link = styled.a`
  color: var(--secondary-light);
`;

const AvatarWrap = styled.div`
  width: 260px;
  height: 260px;
  text-align: center;
  vertical-align: center;
  border-radius: 100%;
  margin: 1% 1%;
  padding: 1% 1%;
  background: var(--secondary-dark);
  opacity: 0.9;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 80%;
  height: 80%;
`;

export default () => {
  return (
    <Page name="profile" background={background}>
      <Wrap>
        <HeaderContainer>
          <Header>Profile</Header>
          <Subheader>
            <Span>Full-stack developer</Span>
          </Subheader>
        </HeaderContainer>
        <Content>
          <TextContainer>
            <Header2>
              About <Span>Me</Span>
            </Header2>
            <Text>
              A full-stack web developer, seeking a role in web development
              where my skills and passion can be furthered and exercised.
              Experienced with working and collaborating in a commercial
              environment throughout various phases of a project lifecycle. An
              active learner, eager to experiment and explore with the newest
              technologies and frameworks.
            </Text>
          </TextContainer>
          <AvatarWrap>
            <Avatar src={avatar} />
          </AvatarWrap>
          <TextContainer>
            <Header2>Details</Header2>
            <Text>
              <Span>Name:</Span> Ray Yuetong Feng
            </Text>
            <Text>
              <Span>Location:</Span> Melbourne, Australia
            </Text>
            <Text>
              My online portfolio is perpetually growing with personal projects,
              being constantly updated as my skills and methods expand.
            </Text>
            <Text>
              Check them out on my{' '}
              <Link href="https://github.com/ryfprivate">GitHub</Link> page
            </Text>
          </TextContainer>
        </Content>
      </Wrap>
    </Page>
  );
};
