import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';

const Layout = styled.div`
  --primary-dark: #282a36;
  --secondary-dark: #6272a4;
  --primary-light: #f8f8f2;
  --secondary-light: #8be9fd;
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
        <ExperiencePage />
        <div>
          <h2>Page end</h2>
        </div>
      </Layout>
    );
  }
}

export default App;
