import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';
import Map from '~/components/Map/Map';

const Wrapper = styled(Main)`
  background-color: ${config.colors.darkGrey};
  display: block;
`;

const Heading = styled.h2`
  position: absolute;
`;


const Contact = () => (
  <Wrapper>
    <Heading>Contact</Heading>
    <Map />
  </Wrapper>
);

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
