import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import polindrom from "../../lib/strings/polindrom";

const FormPolindrom = () => {
  // Задали хук на стейт
  const [value, setValue] = useState("");

  const [valid, setValid] = useState(true);

  // Задали обработчик на изменение текстового значения
  // Это значение в текстовом инпуте идёт в стейт [value, setValue]
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValid(polindrom(value));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Строка для теста</Form.Label>
          <Form.Control
            placeholder="Введите что-то"
            id="formInputText"
            value={value}
            onChange={onChange}
            isValid={valid}
            isInvalid={!valid}
          />
          <Form.Text className="text-muted">
            Введите строку, которую хотите проверить на палиндром.
          </Form.Text>
        </Form.Group>
        <Button type="submit">Проверка</Button>
      </Form>
      <div className="alert d-none" role="alert" id="summary"></div>
    </div>
  );
};

export default FormPolindrom;
