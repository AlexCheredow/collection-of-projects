import React from "react";

import Alert from "react-bootstrap/Alert";

function DescriptionResult({ value, result }) {
  if (result === true && result !== null) {
    return ["success"].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        {value} является полиндромом!
      </Alert>
    ));
  }
  if (!result) {
    return ["danger"].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        {value} не является полиндромом!
      </Alert>
    ));
  }
}

export default DescriptionResult;
