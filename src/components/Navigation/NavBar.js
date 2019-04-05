import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const StyledNav = styled(Nav)`
  
`;
const StyledNavItem = styled(NavItem)`
  
`;
const StyledNavLink = styled(NavLink)`
  
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
    }

    render() {
        const { entries } = this.props;

        return (
          <Navbar color="transparent" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <StyledNav>
                {entries.map(entry => (
                  <StyledNavItem key={`navitem-${entry.label}`}>
                    <StyledNavLink
                      tag={Link}
                      to={entry.route}
                    >
                      {entry.label}
                    </StyledNavLink>
                  </StyledNavItem>
                      ))}
              </StyledNav>
            </Collapse>
          </Navbar>
        );
    }
}

export default NavBar;
