import React, { useState } from 'react'

export const MenuContext = React.createContext()

const MenuProvider = props => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
