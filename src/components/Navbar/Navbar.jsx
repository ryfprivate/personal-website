import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: var(--primary-dark);
  position: fixed;
  left: 0;
  padding: 0;
  ${props => {
    if (!props.visible) {
      return 'display: none';
    }
  }}
`;

const Ul = styled.ul`
  padding: 0;
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
        </Ul>
      </Nav>
    );
  }
}

export default Navbar;
