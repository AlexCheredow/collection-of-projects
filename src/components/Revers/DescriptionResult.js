import React from "react";

import Alert from "react-bootstrap/Alert";

function DescriptionResult({ value, result }) {
  if (result) {
    return ["success"].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        {value} в развернутом виде примет вид: {result}.
      </Alert>
    ));
  }
}

export default DescriptionResult;
