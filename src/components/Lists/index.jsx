import React from "react";
import List from "../List";
import { vacancies } from "../../helpers/data.js";
import styled from "./lists.module.scss";

const Lists = () => {
  return (
    <div>
      <h1 className={styled.h}>Рекомендації для вас</h1>
      <ul className={styled.container}>
        {vacancies.map((vacancy) => (
          <List vacancy={vacancy} key={vacancy.id} />
        ))}
      </ul>
    </div>
  );
};
export default Lists;
