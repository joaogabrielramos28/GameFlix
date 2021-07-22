import "./app.css";
import Cards from "./Components/Cards/cards";
import Header from "./Components/Header/Header";
import Highlight from "./Components/Highlight/highlight";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Pagina404 from "./Components/404/Pagina404";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Highlight />
            <Cards />
          </Route>
          <Route exact path="/search">
            <Header />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
