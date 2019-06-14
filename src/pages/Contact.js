import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Main } from '~/components/MainSection';
import { Phone, Mail, MapPin } from 'react-feather';
import { media } from '~/styles/Utils';

const Wrapper = styled(Main)`
  display: flex;
  justify-content: center;
`;

const GridWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 980px; 
  display: grid; 

  grid-column-gap: 1em;
  justify-items: center;
  grid-template-columns: 100%; 

  ${media.m`
    align-items: center;
    justify-items: center;
    grid-template-rows: 200px 1fr 100px; 
    grid-template-columns: 33% 33% 33%;
  `}
`;

const Heading = styled.h2`
  margin: 2em 0;
`;

const Icon = styled.div`
  color: white;

  ${media.m`
    width: 50%;
    height: 50%;
  `}

  width: 33%;
  height: 33%;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Contact = ({ heading }) => (
  <Wrapper>
    <Heading>{heading}</Heading>
    <GridWrapper>
      <Icon><MapPin /></Icon>
      <Icon><Phone /></Icon>
      <Icon><Mail /></Icon>

      <p>Excepteur ut exercitation do tempor nostrud labore laborum excepteur irure est cillum excepteur esse. Consequat proident voluptate commodo voluptate. Qui ad exercitation adipisicing voluptate dolore elit.</p>
      <p>Excepteur ut exercitation do tempor nostrud labore laborum excepteur irure est cillum excepteur esse. Consequat proident voluptate commodo voluptate. Qui ad exercitation adipisicing voluptate dolore elit.</p>
      <p>Excepteur ut exercitation do tempor nostrud labore laborum excepteur irure est cillum excepteur esse. Consequat proident voluptate commodo voluptate. Qui ad exercitation adipisicing voluptate dolore elit.</p>

    </GridWrapper>
  </Wrapper>
);


Contact.propTypes = {
  heading: PropTypes.string
};

Contact.defaultProps = {
  heading: 'Get in Touch'
};

export default Contact;
