import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const NavBar = (props) => {
  return (
    <div className="mb-4">
      <Navbar color="light" light fixed={'true'}>
        <NavbarBrand href="/" className="text-info">OPALYTICA</NavbarBrand>
          
          <NavLink href="/">Orders</NavLink>
      </Navbar>
    </div>
  );
}

export default NavBar;