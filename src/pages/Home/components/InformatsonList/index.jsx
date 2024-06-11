import React from "react";
import { useParams } from "react-router-dom";
import { vacancies, lists } from "../../../../helpers/data";

const InformatsonList = () => {
  const { id } = useParams();

  const vacancy = vacancies.find((vacancies) => vacancies.id === +id);
  const list = lists.find((lists) => lists.id === +id);

  console.log("Found vacancy:", vacancy);
  console.log("Found list:", list);

  if (!vacancy || !list) {
    return <div>Візитку не знайдено</div>;
  }

  return (
    <div>
      {<h1>{vacancy.name}</h1>}

      <ul>
        <li>Про нас: {list.information}</li>
        <li>Вимоги до практиканта: {list.practice}</li>
        <li>Процес проходження практики: {list.process}</li>
      </ul>
      {<p>Статус: {vacancy.status}</p>}
    </div>
  );
};

export default InformatsonList;
