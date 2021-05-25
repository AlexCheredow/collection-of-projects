import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import { Form, Button } from "react-bootstrap";
import MinNumbers from "../../lib/numbers/compare";
import AlertCompare from "./AlertCompare";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = { value1: "", value2: "", result: null }; // null|number

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state.result=
  }

  handleChange(event) {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      result: MinNumbers(this.state.value1, this.state.value2),
    });
  }

  render() {
    const { value1, value2, result } = this.state;
    return (
      <Container>
        <Header />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Первое число</Form.Label>
            <Form.Control
              placeholder="Введите первое число"
              id="value1"
              value={value1}
              onChange={this.handleChange}
              type="number"
            />
            <Form.Text className="text-muted">
              Введите первое число для сравнения.
            </Form.Text>
            <Form.Label>Второе число</Form.Label>
            <Form.Control
              placeholder="Введите второе число"
              id="value2"
              value={value2}
              onChange={this.handleChange}
              type="number"
            />
            <Form.Text className="text-muted">
              Введите второе число для сравнения.
            </Form.Text>
          </Form.Group>
          <Button type="submit" disabled={value1 === "" || value2 === ""}>
            Сравнить
          </Button>
        </Form>
        <div>
          {this.state.result !== null ? <AlertCompare info={result} /> : null}
        </div>
      </Container>
    );
  }
}
export default Compare;
