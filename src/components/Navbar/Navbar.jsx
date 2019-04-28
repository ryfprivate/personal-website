import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Nav = styled.nav`
  background: var(--primary-dark);
  position: fixed;
  padding: 1% 0;
  z-index: 10;
  @media only screen and (min-width: 768px) {
    border-radius: 0 0 10px 0;
  }
  ${props => {
    if (!props.visible) {
      return 'display: none';
    }
  }}
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  text-align: center;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  render() {
    return (
      <Nav visible={this.state.visible}>
        <Ul>
          <Link label="Home" destination="home" />
          <Link label="Profile" destination="profile" />
          <Link label="Skills" destination="skills" />
          <Link label="Experience" destination="experience" />
          <Link label="Projects" destination="projects" />
          <Link label="Contact" destination="contact" />
        </Ul>
      </Nav>
    );
  }
}

export default Navbar;
