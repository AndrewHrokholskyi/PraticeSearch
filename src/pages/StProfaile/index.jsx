import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "./stprofaile.module.scss";

const StudentPr = () => {
  return (
    <div className={styled.profaile}>
      <p>Профіль</p>
      <div className="content">
        <div className="avatar_foto">
          <h2>Фото профілю</h2>
          <FaUserCircle /> <img src="" alt="" />
          <button>Встановити фото</button>
        </div>
        <div className="info">
          <h3>Загальні дані</h3>
          <p>Name: Андрій </p>
          <p>Surname: Грохольський</p>
          <p>Email: Email@gamil.com</p>
          <p>Phone: +380...</p>
          <p>Password:*********</p>
        </div>
        <div className="messages_notifications">
          <h3>Повідомлення і сповіщення</h3>
          <p>Надсилати повіломлення на email: Ні</p>
          <p>Показувати сповіщення на сайті: Так</p>
        </div>
      </div>
    </div>
  );
};

export default StudentPr;
