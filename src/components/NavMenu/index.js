import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
//import { menuItems } from 'menus'
// import * as Styled from './styles'
import { device } from '../../style/responsive'
import { MenuContext } from '../../contexts/MenuContext'

import { ReactComponent as Close } from '../../assets/Close.svg'
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
  const menuCtx = useContext(MenuContext)

  return (
    <Nav className={`${menuCtx.isMenuOpen ? 'menu--active' : ''}`}>
      <Container>
        {window.matchMedia(device.mobileL) && (
          <CloseMenu onClick={menuCtx.toggleMenu}>
            <Close width={12} height={12} />
          </CloseMenu>
        )}
        <Logo>
          <Link to="/">
            <LogoIcon width={120} />
          </Link>
        </Logo>
        {/* {menuItems.map((item, i) => ( */}
        <MenuItems>
          <NewTrip>
            <StyledNavLink to="/new-trip">
              New Trip
              <Plus width={16} height={16} />
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
  min-width: 260px;
  height: 100vh;
  color: black;
  background-color: var(--grey);

  @media ${device.mobileL} {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10999;
    width: 100%;
    display: none;

    &.menu--active {
      display: block;
    }
  }
`

const CloseMenu = styled.span`
  width: 40px;
  height: 40px;
  background: #f1f1f2;
  border-radius: 10px;
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 10999;
  align-items: center;
  justify-content: center;
  display: none;

  @media ${device.mobileL} {
    display: flex;
  }
`

const Container = styled.div`
  padding: 4rem;
`

const Logo = styled.div`
  margin-bottom: 30px;

  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
  }
`

const NewTrip = styled.div`
  flex: 1;
  display: flex;
  background-color: var(--accent);
  font-weight: 600;
  padding: 1.4rem 2rem;
  border-radius: 10px;
  line-height: 2rem;
  margin-bottom: 3rem;

  svg {
    margin-left: auto;
  }

  a {
    font-size: 1.4rem;
    color: black;
    font-weight: 600;
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
  color: #97999b;
`
