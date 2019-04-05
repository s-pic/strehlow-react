import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MyInnerComponent = styled.div`
  
`;

const MyComponent = ({ myProp }) => (
  <MyInnerComponent>
    <h2>Contact</h2>
  </MyInnerComponent>
);

MyComponent.propTypes = {
    myProp: PropTypes.string
};

MyComponent.defaultProps = {
    myProp: 'so'
};

export default MyComponent;
