import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
//import { menuItems } from 'menus'
import { menuItems } from 'menus'
// import * as Styled from './styles'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { ReactComponent as LogoIcon } from 'assets/Logo.svg'
import { ReactComponent as Plus } from 'assets/Plus.svg'
import { ReactComponent as ClockIcon } from 'assets/Clock.svg'
import { ReactComponent as EditIcon } from 'assets/Edit.svg'
import { ReactComponent as GlobeIcon } from 'assets/Globe.svg'

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
          <Link to="/">
            <LogoIcon width={120} />
          </Link>
        </Logo>
        {/* {menuItems.map((item, i) => ( */}
        <MenuItems>
          <NewTrip>
            <StyledNavLink to="/new-trip">
              New Trip <Plus width={16} height={16} />
            </StyledNavLink>
          </NewTrip>
          <MenuItem>
            <StyledNavLink to="/">
              <IconWrap>
                <ClockIcon width={16} height={16} />
              </IconWrap>
              Your trips
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/">
              <IconWrap>
                <EditIcon width={16} height={16} />
              </IconWrap>
              Feature feature
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/">
              <IconWrap>
                <GlobeIcon width={16} height={16} />
              </IconWrap>
              Future session
            </StyledNavLink>
          </MenuItem>
        </MenuItems>
        {/* ))} */}
      </Container>
    </Nav>
  )
}

export default NavMenu

const Nav = styled.nav`
  font-size: 1.6rem;
  width: 320px;
  height: 100vh;
  color: black;
  background-color: var(--grey);
`

const Container = styled.div`
  margin: 40px;
`

const Logo = styled.div`
  margin-bottom: 30px;
`

const NewTrip = styled.div`
  flex: 1;
  display: flex;
  background-color: var(--accent);
  font-weight: 600;
  font-size: 1.6rem;
  padding: 20px;
  border-radius: 5px;

  svg {
    margin-left: auto;
  }
`

const IconWrap = styled.div`
  display: flex;
  width: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const MenuItems = styled.ul``
const MenuItem = styled.li`
  margin: 20px 0;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  flex: 1;
`
