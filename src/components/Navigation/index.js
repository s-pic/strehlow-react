import React, { Component } from 'react';
import { connect } from 'unistore/react';
import Actions from '~/state/Actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap';
import { media, isSmallScreen } from '~/styles/Utils';


const StyledNavbar = styled(Navbar)`

  background-color: black;

  @keyframes blend-in {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* TODO: implement less complicated  */
  &:not(.small-screen) {
    background-color: transparent;
    opacity: 0;
    animation: 1s blend-in 1s ease-out forwards;
    transform: translateY(-100px);
  }
  
  justify-content: flex-end;
`;

const StyledNav = styled(Nav)`
  width: 100%;
  justify-content: flex-end;
  
  ${media.m`
     justify-content: space-between;
   `}
  
  ${media.l`
     justify-content:flex-end;
   `}
`;

const StyledNavbarToggler = styled(NavbarToggler)`
  background-color: white;
  filter: invert(100%);
  
  &&:focus {
    outline: none;
  }
`;

const StyledNavBarBrand = styled(NavbarBrand)`
  color: #fff !important;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  transition: opacity 0.3s;
  opacity: 0.7;
  
  &&:hover {
   color: white;
   opacity: 1;
  }
  &.active {
    opacity: 1;
    border-bottom: 2px solid ${config.colors.lightGreen}
  }

  &.has-dark-bg {
    color: white;
    &&:hover {
      color: white;
    }
  }

  /* Desktop  */
  ${media.m`
    color: ${config.colors.black};

    &&:hover {
      color: ${config.colors.skyBlue};
    }
  `}
`;

class NavBar extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      route: PropTypes.string
    })),
    title: PropTypes.string,
    hasDarkBg: PropTypes.bool
  };

  static defaultProps = {
    entries: [{ label: 'Please provide a label', route: '/please name a route' }],
    title: 'StrehlowWeb',
    hasDarkBg: true
  };

  render() {
    const {
      entries,
      title,
      location,
      layout,
      toggleNavBarCollapsed,
      hasDarkBg
    } = this.props;
    const { navBarCollapsed } = layout;

    const smallScreen = isSmallScreen();
    const { isFirstVisit } = this.props.usage;

    return (
      <StyledNavbar
        light
        expand="md"
        fixed={smallScreen ? 'undefined' : 'top'}
        className={smallScreen ? 'small-screen' : ''}
      >
        {smallScreen && (
          <StyledNavBarBrand
            to={config.nav.Home}
            tag={Link}
            className="mr-auto"
          >
            {title}
          </StyledNavBarBrand>
        )}
        <StyledNavbarToggler onClick={toggleNavBarCollapsed} className={smallScreen && isFirstVisit ? 'wiggle' : ''} />
        <Collapse isOpen={navBarCollapsed} navbar>
          <StyledNav>
            {entries.map(entry => (
              <NavItem key={`navitem-${entry.label}`}>
                <StyledNavLink
                  tag={Link}
                  to={entry.route}
                  className={`${location.pathname === entry.route ? 'active' : ''} ${hasDarkBg ? 'has-dark-bg' : ''}`}
                  onClick={smallScreen ? toggleNavBarCollapsed : () => {}}
                >
                  {entry.label}
                </StyledNavLink>
              </NavItem>
            ))}
          </StyledNav>
        </Collapse>
      </StyledNavbar>
    );
  }
}

export default withRouter(connect(
  state => state,
  Actions
)(NavBar));
