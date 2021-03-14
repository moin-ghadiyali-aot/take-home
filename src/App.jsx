import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import MenuProvider from './contexts/MenuContext'

import GlobalStyle from 'style/global'
import NotFound from 'pages/404'
import NavMenu from 'components/NavMenu'
import { device } from 'style/responsive'

// Pages
import NewTrip from 'pages/NewTrip'
import Trips from 'pages/Trips'

const Routing = () => (
  <Main>
    <Switch>
      <Route path="/new-trip" component={NewTrip} />
      <Route path="/" exact component={Trips} />
      <Route to="*" component={NotFound} />
    </Switch>
  </Main>
)

const App = () => {
  return (
    <MenuProvider>
      <Container className="App">
        <GlobalStyle />
        <NavMenu />
        <Routing />
      </Container>
    </MenuProvider>
  )
}

export default App

const Container = styled.div`
  display: flex;
  grid-template-columns: 240px 1fr;
`

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    padding: 0;
  }
`

const SideBar = styled.aside`
  height: 100vh;
  border-left: 1px solid #f1f1f2;
  padding: 40px;
`
