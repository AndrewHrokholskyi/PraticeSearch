import React from "react";
import { useParams } from "react-router-dom";
import { applications, cards } from "../../../../helpers/data";

const Visit = () => {
  const { id } = useParams();

  const application = applications.find(
    (applications) => applications.id === +id
  );
  const card = cards.find((card) => card.id === +id);

  console.log("Found application:", application);
  console.log("Found card:", card);

  if (!application || !card) {
    return <div>Візитку не знайдено</div>;
  }

  return (
    <div>
      {<h1>{application.name}</h1>}

      <ul>
        <li>ПІБ: {card.pib}</li>
        <li>Дата народження: {card.date}</li>
        <li>Місто: {card.city}</li>
        <li>Університет: {card.university}</li>
        <li>Досвід: {card.experience}</li>
        <li>Додаткова інформація: {card.information}</li>
      </ul>
      {<p>Статус: {application.status}</p>}
    </div>
  );
};

export default Visit;
