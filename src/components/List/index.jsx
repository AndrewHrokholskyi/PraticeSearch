import React from "react";

import styled from "../Lists/lists.module.scss";

export default function List({ vacancy }) {
  return (
    <li className={styled.vacancies} key={vacancy.id}>
      <p>
        <strong>{vacancy.name}</strong>
      </p>
      <p>{vacancy.accomplishment}</p>

      <div>
        <strong>Статус:</strong>
        <p
          style={{
            color: vacancy.status === "Активна" ? "green" : "red",
          }}
        >
          {vacancy.status}
        </p>
      </div>
    </li>
  );
}
