import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom"
import {menuItems} from 'menus'
import * as icon from 'assets/icons'
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
      <NavMenu>
        <MenuItem><Link to="/"/>{icon.logo}</MenuItem>
        {/* {menuItems.map((item, i) => ( */}
          <MenuItem>
            <NavLink to='/'>
              New Trip {icon.plusIcon}  
            </NavLink>
          <MenuItem>
            <NavLink to={`/${menuItems.path}`}>
              {icon.clockIcon} Your trips
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/'>
            {icon.editIcon} Future feature
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/'>
            {icon.globeIcon} Future session
            </NavLink>
          </MenuItem>
          </MenuItem>
        {/* ))} */}
      </NavMenu>
    </Nav>
  )
}

export default NavMenu

const Nav = styled.nav`
  font-size: 2rem;
  width: 240px;
  height: 100vh;
  background-color:var(--grey)
`
// const Menu = styled.ul`

//   &:first-child{

//   }
// `

const MenuItem = styled.li`

`