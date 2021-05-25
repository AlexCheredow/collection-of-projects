import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { App } from "./App/App";
import { Polindrom } from "./components/Polindrom/index";
import { Revers } from "./components/Revers/index";
import Compare from "./components/Compare/Compare";
import FooterPage from "./components/FooterPage/FooterPage";

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        gridTemplateRows: "1fr auto",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Router history={history}>
        <Container fluid="md">
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/polindrom" component={Polindrom} />
            <Route path="/revers" component={Revers} />
            <Route path="/compare" component={Compare} />
          </Switch>
        </Container>
      </Router>
      <FooterPage />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
