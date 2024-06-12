import React from "react";
import { useForm } from "react-hook-form";
import styled from "./creatingInformatsonCard.module.scss";
import { useNavigate } from "react-router-dom";

export default function CreatingInformatsonCard() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(data);
    localStorage.setItem('cards', JSON.stringify(cards));

    navigate("/BusinessCards");
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("cards.pib")} placeholder="ПІБ:" />
      <input {...register("card.date ")} placeholder="Дата народження:" />
      <input {...register("cards.city")} placeholder="Місто:" />
      <input {...register("cards.university")} placeholder="Університет:" />
      <input {...register("cards.experience")} placeholder="Досвід:" />
      <input
        {...register("cards.information")}
        className={styled.inputStyle}
        placeholder="Додаткова інформація:"
      />
      <input type="submit" className={styled.buttonStyle} />
    </form>
  );
}
