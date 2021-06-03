import { useState } from "react";
import { Form, Col } from "react-bootstrap";

const RusToUsd = ({ usd }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  let calcResult = value ? Number.parseFloat(value) / usd : 0;
  let result = !isNaN(calcResult)
    ? "Доллары США: " + calcResult.toFixed(2)
    : "Вводите валюту в числовом формате";

  return (
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Rus to USD</Form.Label>
        <Form.Control
          placeholder="Введите количество рублей"
          value={value}
          onChange={onChange}
        />
        <Form.Text className="text-muted">Введите количество рублей.</Form.Text>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>{result}</Form.Label>
      </Form.Group>
    </Form.Row>
  );
};

export default RusToUsd;