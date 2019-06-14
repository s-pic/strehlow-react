import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';

const Wrapper = styled(Main)`
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
