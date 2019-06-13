import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';

const Wrapper = styled(Main)`
  background-color: ${config.colors.darkGrey};
  display: block;
`;

const Heading = styled.h2`
  position: absolute;
`;


const Contact = () => (
  <Wrapper />
);

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
