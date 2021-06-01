import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
                <Link to="/polindrom">Полиндром</Link>
              </li>
              <li>
                <Link to="/revers">Реверс</Link>
              </li>
              <li>
                <Link to="/converter">Конвертер</Link>
              </li>
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
              <li>
                <Link to="/Compare">Найти миинмальное число из двух</Link>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="1" variant="link">
            Приложения
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <strong>Приложения</strong>
            <ul>
              <li>
                <a
                  href="https://test-app-git-main-alexcheredow.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Радио
                </a>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
