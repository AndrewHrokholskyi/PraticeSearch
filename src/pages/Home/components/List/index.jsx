import React from "react";
import styled from "./list.module.scss";
import { useNavigate } from "react-router-dom";

export default function List({ vacancy }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/practice-card/${vacancy.id}`);
  };

  return (
    <li className={styled.vacancies} key={vacancy.id} onClick={handleClick}>
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
