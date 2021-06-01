import React from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import USD from "./USD";

export default function Converter() {
  return (
    <Container>
      <Header />
      <USD />
    </Container>
  );
}
