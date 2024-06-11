import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>
        Cторінку не знайдено перейдіть на <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default NotFound;
