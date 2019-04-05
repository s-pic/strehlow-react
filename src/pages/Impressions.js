import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';
import BgImage from '~/images/bg/astronomy-comet-constellation-631477.jpg';

// TODO: add credits (Photo by Neale LaSalle from Pexels)
const Wrapper = styled(Main)`
  background-image: url(${BgImage});
`;

const Impressions = () => (
  <Wrapper>
    <h2>Impressions</h2>
  </Wrapper>
);

Impressions.propTypes = {
};

Impressions.defaultProps = {
};

export default Impressions;
