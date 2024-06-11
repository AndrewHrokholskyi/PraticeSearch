import React from "react";
import styled from "./informationCard.module.scss";
import { useNavigate } from "react-router-dom";

export default function InformationCard({ application }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/business-cards/${application.id}`);
  };

  return (
    <li className={styled.claim} key={application.id} onClick={handleClick}>
      <p>
        <strong>{application.name}</strong>
      </p>

      <div>
        <strong>Статус:</strong>
        <p
          style={{
            color: application.status === "Активна" ? "green" : "red",
          }}
        >
          {application.status}
        </p>
      </div>
      
    </li>
  );
}
