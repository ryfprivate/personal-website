import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SkillsPage from './pages/SkillsPage';

const Layout = styled.div`
  --primary-dark: #282a36;
  --primary-light: #f8f8f2;
  display: flex;
  flex-direction: column;
`;
class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <HomePage />
        <ProfilePage />
        <SkillsPage />
      </Layout>
    );
  }
}

export default App;
