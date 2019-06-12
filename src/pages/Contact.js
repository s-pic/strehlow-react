import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';

const Wrapper = styled(Main)`
  background-color: ${config.colors.darkGrey};
`;

// const StyledHeading = styled.h2`
// `;

const Contact = () => (
  <Wrapper>
    <h2>Contact</h2>
  </Wrapper>
);

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
