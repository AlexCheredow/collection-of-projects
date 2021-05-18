import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { App, Home, About } from "./App/App";

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
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
