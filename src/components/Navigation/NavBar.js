import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { media, breakpoints, isSmallScreen } from '~/styles/Utils';
import {
  Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand
} from 'reactstrap';

const StyledNavbar = styled(Navbar)`

 @keyframes blend-in {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
 }

 animation: 1s blend-in 1s ease-out forwards;
 transform: translateY(-100px);
 opacity: 0;
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
  background-color: rgba(255,255,255,0.2);
  
  &&:focus {
    outline: none;
  }
`;

const StyledNavBarBrand = styled.h2`
  color: #fff;
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
`;

class NavBar extends Component {
    static propTypes = {
        entries: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            route: PropTypes.string
        }))
    };

    static defaultProps = {
        entries: [{ label: 'Please provide a label', route: '/please name a route' }]
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { entries, location } = this.props;
        const _isSmallScreen = isSmallScreen();
        return (
          <StyledNavbar color="transparent" light expand="md" fixed={_isSmallScreen ? 'undefined' : 'top'}>
            {_isSmallScreen && (<StyledNavBarBrand to={config.nav.Home} tag={Link} className="mr-auto">StrehlowWeb</StyledNavBarBrand>)}
            <StyledNavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <StyledNav>
                {entries.map(entry => (
                  <NavItem key={`navitem-${entry.label}`}>
                    <StyledNavLink
                      tag={Link}
                      to={entry.route}
                      className={location.pathname === entry.route ? 'active' : ''}
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

export default withRouter(NavBar);
