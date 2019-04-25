import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Item = styled.li`
  display: inline;
  margin: 0 10px;
  color: #6272a4;
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
        offset={-53}
        duration={500}
      >
        {label}
      </Link>
    </Item>
  );
};
