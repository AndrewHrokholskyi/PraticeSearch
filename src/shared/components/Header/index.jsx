import React from "react";
import styled from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={styled.hed}>
        <Link className={styled.hedlogo} to="/">
          Practic Search
        </Link>
        <div className={styled.hedbody}>
          <Link to="/BusinessCards">Інструкція</Link>
          <Link to="/Requests">Заявки</Link>
          <Link to="/BusinessCards">Візитки</Link>
          <Link to="/Profile">Профіль студента</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
