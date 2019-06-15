import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledButton = styled(Link)`
    color: ${config.colors.darkGrey};
    background-color: transparent;
    border-radius: 20px;
    outline:0;
    border: 2px solid #7f8c8d;
    transition: background-color 0.3s ease;
    padding: 6px 22.5px 6px 22.5px;
    font-size: 0.8em;
    text-align: center;
    outline-color: rgb(255, 255, 255);
    font-weight: 400;
    display: block;
    margin: 1em;
    

    &&:hover {
      background-color: white;
      text-decoration: none;
      color: ${config.colors.darkGrey};
    }
`;

const FlatRouterLink = ({ children, to }) => (
  <StyledButton to={to}>{children}</StyledButton>
);

FlatRouterLink.propTypes = {
    to: PropTypes.string
};

FlatRouterLink.defaultProps = {
  to: '/'
};

export default FlatRouterLink;
