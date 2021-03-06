import React from 'react';
import styled from 'styled-components';
import { FullHeightMain } from '~/components/MainSection';
import Map from '~/components/Map';

const Wrapper = styled(FullHeightMain)`
  background-color: ${config.colors.darkGrey};
  display: block;
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
