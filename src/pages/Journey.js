import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';
import Map from '~/components/Map';

const Wrapper = styled(Main)`
  background-color: ${config.colors.darkGrey};
  display: block;
`;

const Heading = styled.h2`
  position: absolute;
`;


const Journey = () => (
  <Wrapper>
    <Map />
  </Wrapper>
);

Journey.propTypes = {
};

Journey.defaultProps = {
};

export default Journey;
