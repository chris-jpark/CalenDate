import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavbarLogo, 
  MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} 
from './NavbarElements';


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
              <NavbarLogo to="/">
                <h1>CalenDate</h1>
              </NavbarLogo>

              <MobileIcon>
                <FaBars />
              </MobileIcon>

              <NavMenu>
              <NavItem>
                  <NavLinks to ='/about'>About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to ='/results'>Your Results</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/signin'>Schedule Now</NavBtnLink>
              </NavBtn>

            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
