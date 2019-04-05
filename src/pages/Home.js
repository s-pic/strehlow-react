import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '~/styles/Utils';
import Main from '~/components/MainSection';
import HomeImage from '~/images/bg/sky_big.jpg';

const Wrapper = styled(Main)`
  background-image: url(${HomeImage});
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
