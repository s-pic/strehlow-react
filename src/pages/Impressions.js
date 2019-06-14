import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';

const Wrapper = styled(Main)`
  display: block;
`;

const Impressions = () => (
  <Wrapper />
);

Impressions.propTypes = {
};

Impressions.defaultProps = {
};

export default Impressions;
