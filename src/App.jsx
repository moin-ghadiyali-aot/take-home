import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "style/global";
import { menuItems } from "menus";
import NotFound from "components/404";
import NavMenu from "components/NavMenu";
import { device } from "style/responsive";

const Routing = () => (
  <Main>
    <Switch>
      {menuItems.map((item, i) => {
        console.log(item.path);
        return (
          <Route key={i} path={`/${item.path}`} component={item.component} />
        );
      })}
      {/* <Route path="/new-trip" component={NewTrip} /> */}
      <Route path="/404" component={NotFound} />
      {/* <Route path="/" exact component={App} /> */}
      <Route path="/" exact component={NotFound} />
      <Redirect to="/404" component={NotFound} />
    </Switch>
  </Main>
);
const App = () => {
  return (
    <Container className="App">
      <GlobalStyle />
      <NavMenu />
      <Routing />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  grid-template-columns: 240px 1fr;
`;
const Main = styled.main`
  padding: 40px;
  width: 100%;
  margin-left: 240px;
  @media ${device.tablet} {
    margin-left: 0;
    padding: 20px;
  } ;
`;
const SideBar = styled.aside`
  height: 100vh;
  border-left: 1px solid #f1f1f2;
  padding: 40px;
`;
