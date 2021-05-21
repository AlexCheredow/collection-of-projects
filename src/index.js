import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { App, Home, About } from "./App/App";
import { Polindrom } from "./components/Polindrom/index";

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Container fluid="md">
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/home" component={() => <Home />} />
          <Route path="/about" component={About} />
          <Route path="/polindrom" component={Polindrom} />
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
