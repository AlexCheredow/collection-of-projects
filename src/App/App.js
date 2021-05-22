import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
export const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export function App() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="0" variant="link">
            Задачи на строки
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <strong>Список решений задач, где используются строки</strong>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/polindrom">Полиндром</Link>
              </li>
              <li>
                <Link to="/revers">Реверс</Link>
              </li>
              <li>3</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="1" variant="link">
            Задачи на числа
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <strong>Список решений задач, где используются числа</strong>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <check></check>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
