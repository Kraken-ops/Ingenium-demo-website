import React from "react";
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {

  const toHome = () =>{
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toHome}>Ingenium</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="editorial"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Editorial
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Abohoman"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Abohoman
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Prayukti"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Prayukti
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Gallery"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Gallery
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
