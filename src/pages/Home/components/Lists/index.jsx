import React, { useState } from "react";
import List from "../List/index.jsx";
import { vacancies } from "../../../../helpers/data.js";
import styled from "./lists.module.scss";

const Lists = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className={styled.container}>
        {vacancies.map((vacancy) => (
          <List
            vacancy={vacancy}
            key={vacancy.id}
            onClick={() => setSelected(vacancy)}
          />
        ))}

        {selected && (
          <div>
            <List vacancy={selected} />
          </div>
        )}
      </ul>
    </>
  );
};
export default Lists;
