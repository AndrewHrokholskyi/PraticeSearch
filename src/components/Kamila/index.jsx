import React from "react";
import styled from "./kamila.module.scss";

const person = {
  theme: {
    backgroundColor: "grey",
  },
};

export default function Kamila() {
  const avatar =
    "https://cdn-icons-png.freepik.com/256/3177/3177440.png?semt=ais_hybrid";
  const description = "Gregorio Y. Zara";
  return (
    <header style={person.theme}>
      <img className={styled.avatar} src={avatar} alt={description} />
      <button className={styled.button}>Візитки</button>
    </header>
  );
}
