import React from "react";
import { Container } from "react-bootstrap";
import FormPolindrom from "./FormPolindrom";
import HeaderPolindrom from "./headerPolindrom";

export function Polindrom() {
  return (
    <Container>
      <HeaderPolindrom />
      <FormPolindrom />
    </Container>
  );
}
