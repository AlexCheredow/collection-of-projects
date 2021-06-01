import { Container } from "react-bootstrap";

import RusToUsd from "./RusToUsd";
import UsdToRus from "./UsdToRus";

const FormConverter = ({ usd }) => {
  return (
    <Container>
      <RusToUsd usd={usd} />
      <UsdToRus usd={usd} />
    </Container>
  );
};

export default FormConverter;
