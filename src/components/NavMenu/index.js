import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "menus";
import * as icon from "assets/icons";
import { device } from "style/responsive";
import { useState } from "react";
// import * as Styled from './styles'

// const iconMapping = {
//   plusIcon: icon.plusIcon,
//   clockIcon: icon.clockIcon,
//   editIcon: icon.editIcon,
//   globeIcon: icon.globeIcon,
// }

const NavMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Nav = styled.nav`
    font-size: 2rem;
    width: 240px;
    height: 100vh;
    background-color: var(--grey);
    position: fixed;
    left: 0;
    z-index: 99999;
    transition: left 0.5s;
    @media ${device.tablet} {
      ${({ toggleMenu }) => !toggleMenu && `left: -240px;`}
    } ;
  `;
  const toggle = () => {
    // console.log("----", toggleMenu);
    setToggleMenu((toggleMenu) => !toggleMenu);
  };
  return (
    <Nav toggleMenu={toggleMenu}>
      <Navigation>
        <MobileButton onClick={toggle}>icon</MobileButton>

        <MenuItem>
          <Link to="/" />
          {icon.logo}
        </MenuItem>
        {/* {menuItems.map((item, i) => ( */}
        <MenuItem>
          <NavLink to="/new-trip">New Trip {icon.plusIcon}</NavLink>
          <MenuItem>
            <NavLink to={`/${menuItems.path}`}>
              {icon.clockIcon} Your trips
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/">{icon.editIcon} Future feature</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/">{icon.globeIcon} Future session</NavLink>
          </MenuItem>
        </MenuItem>
        {/* ))} */}
      </Navigation>
    </Nav>
  );
};

export default NavMenu;

const MobileButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  position: absolute;
  right: -40px;
  @media ${device.tablet} {
    display: block;
  }
`;
const Navigation = styled.ul`
  position: relative;
  &:first-child {
  }
`;

const MenuItem = styled.li``;
