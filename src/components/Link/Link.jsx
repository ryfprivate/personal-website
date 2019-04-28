import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Item = styled.li`
  color: var(--primary-light);
  width: 100%;
  @media only screen and (min-width: 768px) {
    > .active {
      width: 100%;
    }
  }
  > a {
    display: flex;
    padding: 0.5em;
  }
  > .active {
    background-color: var(--secondary-dark);
  }
  &:hover {
    cursor: pointer;
    background-color: var(--secondary-dark);
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
        offset={1}
        duration={500}
      >
        {label}
      </Link>
    </Item>
  );
};
