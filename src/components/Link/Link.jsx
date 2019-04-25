import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Item = styled.li`
  list-style-type: none;
  text-align: center;
  color: var(--secondary-dark);
  > .active {
    text-decoration: underline;
  }
`;

export default ({ label, destination }) => {
  return (
    <Item>
      <Link
        activeClass="active"
        to={destination}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {label}
      </Link>
    </Item>
  );
};
