import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="col ">
        <Link className="btn btn-primary" to="/" role="button">
          Назад
        </Link>
      </div>
    </>
  );
};

export default Header;
