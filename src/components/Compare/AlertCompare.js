import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertCompare({ info }) {
  return <Alert variant="info">Минимальным числом является: {info}</Alert>;
}

export default AlertCompare;
