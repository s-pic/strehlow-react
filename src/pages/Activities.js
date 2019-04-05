import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';
import BgImage from '~/images/bg/sunset1.jpg';

const Wrapper = styled(Main)`
  background-image: url(${BgImage});
`;

const Activities = () => (
  <Wrapper>
    <h2>Activities</h2>
  </Wrapper>
);

Activities.propTypes = {
};

Activities.defaultProps = {
};

export default Activities;
