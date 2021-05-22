import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import StrRevers from "../../lib/strings/revers";
import DescriptionResult from "./DescriptionResult";

const FormRevers = () => {
  // Задали хук на стейт
  const [textValue, setTextValue] = useState("");

  const [validResult, setValidResult] = useState(true);

  // Задали обработчик на изменение текстового значения
  // Это значение в текстовом инпуте идёт в стейт [value, setValue]
  const onChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValidResult(StrRevers(textValue));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Строка для теста</Form.Label>
          <Form.Control
            placeholder="Введите что-то"
            id="formInputText"
            value={textValue}
            onChange={onChange}
            isValid={validResult}
            isInvalid={!validResult}
          />
          <Form.Text className="text-muted">
            Введите строку, которую хотите проверить на палиндром.
          </Form.Text>
        </Form.Group>
        <Button type="submit" disabled={!textValue}>
          Проверка
        </Button>
      </Form>
      <DescriptionResult result={validResult} value={textValue} />
    </div>
  );
};

export default FormRevers;
