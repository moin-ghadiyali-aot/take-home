import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "menus";
import * as icon from "assets/icons";
// import * as Styled from './styles'

// const iconMapping = {
//   plusIcon: icon.plusIcon,
//   clockIcon: icon.clockIcon,
//   editIcon: icon.editIcon,
//   globeIcon: icon.globeIcon,
// }

const NavMenu = () => {
  return (
    <Nav>
      <Container>
        <Logo>
          <Link to="/" />
          {icon.logo}
        </Logo>
        {/* {menuItems.map((item, i) => ( */}
        <MenuItems>
          <NewTrip>
            <StyledNavLink to="/new-trip">New Trip <Plus>{icon.plusIcon}</Plus></StyledNavLink>
          </NewTrip>
          <MenuItem>
            <StyledNavLink to='trips'>
              {icon.clockIcon} Your trips
            </StyledNavLink>
          </MenuItem>
          <DisabledMenuItem>
            <StyledNavLink to="/">{icon.editIcon} Future feature</StyledNavLink>
          </DisabledMenuItem>
          <MenuItem>
            <StyledNavLink to="/">{icon.globeIcon} Future section</StyledNavLink>
          </MenuItem>
        </MenuItems>
        {/* ))} */}
      </Container>
    </Nav>
  );
};

export default NavMenu;

const Nav = styled.nav`
  font-size: 1.6rem;
  width: 240px;
  height: 100vh;
  color: black;
  background-color: var(--grey);
`
const Container = styled.div`
 margin: 40px 20px 40px 30px ;
`
const Logo = styled.div`
  margin-bottom: 30px;
`
const NewTrip = styled.div`
  background-color: var(--accent);
  font-weight: 600;
  font-size: 1.4rem;
  padding: 1.5rem;
  border-radius: 5px;
`
const Plus = styled.span`
  border-right: 2rem;
`
const MenuItems = styled.ul`

`
const MenuItem = styled.li`
  margin: 2rem 0;
`
const DisabledMenuItem = styled.li`
  color: var(--light-grey)
`
const StyledNavLink = styled(NavLink)`
      text-decoration:none;
      color: black;
`
