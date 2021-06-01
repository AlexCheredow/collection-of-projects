import { useState } from "react";
import { Form, Col } from "react-bootstrap";

const RusToUsd = ({ usd }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  let calcResult = Number.parseFloat(value) / usd;

  return (
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>USD to Rus</Form.Label>
        <Form.Control
          placeholder="Введите количество долларов"
          value={value}
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          Введите количество долларов.
        </Form.Text>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>{`Российские рубли: ${calcResult.toFixed(2)}`}</Form.Label>
      </Form.Group>
    </Form.Row>
  );
};

export default RusToUsd;
