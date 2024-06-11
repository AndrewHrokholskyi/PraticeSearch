import React, { useState } from "react";
import InformationCard from "../InformationCard/index.jsx";
import { applications } from "../../../../helpers/data.js";
import styled from "./informationCards.module.scss";
import { useNavigate } from "react-router-dom";

const InformationCards = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-card");
  };

  return (
    <>
      <h1>Мої візитки</h1>
      <ul className={styled.bid}>
        {applications.map((application) => (
          <InformationCard
            application={application}
            key={application.id}
            onClick={() => setSelected(application)}
          />
        ))}

        {selected && (
          <div>
            <InformationCard application={selected} />
          </div>
        )}

        <button className={styled.claim} onClick={handleClick}>
          Додати візитку
        </button>
      </ul>
    </>
  );
};
export default InformationCards;
