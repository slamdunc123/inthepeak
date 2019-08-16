import React, { Component } from 'react';

// css
import './Navigation.css';

import { NavLink } from 'react-router-dom'; // Links only are required in this component
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  // toggle burger menu when clicked
  toggleBurgerMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  // toggle burger menu when menu link is clicked
  closeBurgerMenu = () => {
    if (this.state.isOpen === true) {
      this.toggleBurgerMenu();
    }
  };

  render() {
    return (
      <div>
        <Navbar
          className='navbar navbar-expand-lg navbar-dark navbar-background'
          expand='md'
        >
          <NavbarBrand href='/'>In The Peak</NavbarBrand>
          <NavbarToggler onClick={this.toggleBurgerMenu} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {/* home */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/'
                >
                  Home
                </NavLink>
              </NavItem>

              {/* about */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/about'
                >
                  About
                </NavLink>
              </NavItem>

              {/* news */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/news'
                >
                  News
                </NavLink>
              </NavItem>

              {/* wildlife */}

              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Wildlife
                  </DropdownToggle>
                  <DropdownMenu right>
                    <NavLink
                      className='nav-link'
                      onClick={e => {
                        this.closeBurgerMenu(e);
                      }}
                      to='/wildlife/wildlife-red-deer'
                    >
                      <DropdownItem>Red Deer</DropdownItem>
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      onClick={e => {
                        this.closeBurgerMenu(e);
                      }}
                      to='/wildlife/wildlife-owls'
                    >
                      <DropdownItem>Owls</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

              {/* activities */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/activities'
                >
                  Activities
                </NavLink>
              </NavItem>

              {/* gastronomy */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/gastronomy'
                >
                  Gastronomy
                </NavLink>
              </NavItem>

              {/* evironment */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/environment'
                >
                  Environment
                </NavLink>
              </NavItem>

              {/* people */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/people'
                >
                  People
                </NavLink>
              </NavItem>

              {/* contact */}

              <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/contact'
                >
                  Contact
                </NavLink>
              </NavItem>

              {/* cities */}

              {/* <NavItem>
                <NavLink
                  className='nav-link'
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  exact
                  to='/cities'
                >
                  Cities
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
