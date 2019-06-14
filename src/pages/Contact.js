import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';

const Wrapper = styled(Main)`
  display: block;
`;

const Contact = () => (
  <Wrapper />
);

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
