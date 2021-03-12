import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "style/global";
import { menuItems } from "menus";
import NotFound from "components/404";
import NewTrip from "components/NewTrip";
import Trips from "components/Trips";
import NavMenu from "components/NavMenu";
import Sidebar from './components/Sidebar'

const App = () => {
  // const mapping = {
  //   newtrip: NewTrip,
  //   trips: Trips,
  // }

  return (
    <Container className="App">
      <GlobalStyle />
      <NavMenu />
      <Main>
        <Switch>
          {menuItems.map((item, i) => {
            console.log(item.path);
            return (
              <Route
                key={i}
                path={`/${item.path}`}
                component={item.component}
              />
            );
          })}
          {/* <Route path="/new-trip" component={NewTrip} /> */}
          <Route path="/404" component={NotFound} />
          {/* <Route path="/" exact component={App} /> */}
          <Route path="/" exact component={NotFound} />
          <Redirect to="/404" component={NotFound} />
        </Switch>
      </Main>
      <Sidebar/>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  grid-template-columns: 240px 1fr 320px;
`;
const Main = styled.main`
  padding: 40px;
  width: 100%;
`;
