import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from 'style/global'
import { menuItems } from 'menus'
import NotFound from 'pages/404'
import NavMenu from 'components/NavMenu'
import { device } from 'style/responsive'

const Routing = () => (
  <Main>
    <Switch>
      {menuItems.map((item, i) => {
        console.log(item.path)
        return (
          <Route key={i} path={`/${item.path}`} component={item.component} />
        )
      })}
      {/* <Route path="/new-trip" component={NewTrip} /> */}
      <Route path="/404" component={NotFound} />
      {/* <Route path="/" exact component={App} /> */}
      <Route path="/" exact component={NotFound} />
      <Redirect to="/404" component={NotFound} />
    </Switch>
  </Main>
)

const App = () => {
  return (
    <Container className="App">
      <GlobalStyle />
      <NavMenu />
      <Routing />
    </Container>
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
