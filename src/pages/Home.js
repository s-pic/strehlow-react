import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '~/styles/Utils';
import HomeImage from '~/images/bg/sky_big.jpg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${HomeImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  margin-bottom: 1em;
  
  ${media.s`
     font-size: 28px;
  `}
`;

const Slogan = styled.p`

`;

const Home = ({ heading, subheading }) => (
  <Wrapper>
    <StyledHeading>{heading}</StyledHeading>
    <Slogan>{subheading}</Slogan>
  </Wrapper>
);

Home.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
};

Home.defaultProps = {
    heading: 'Please provide a heading',
    subheading: 'Please provide a subheading'
};

export default Home;
