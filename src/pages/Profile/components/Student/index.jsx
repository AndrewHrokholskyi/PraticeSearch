import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import useModal from "../../../../hooks/useModal";
import { userstudent as initialUserStudent } from "../../../../helpers/data";
import styled from "./student.module.scss";
import Modal from "../../../../shared/components/Modal";
import StudentForm from "../StudentForm";

export default function Student() {
  const [userStudent, setUserStudent] = useState(initialUserStudent);
  const { modalActive, openModal, closeModal } = useModal();

  // const updateStudent = (updatedData) => {
  //   setUserStudent(updatedData);
  //   closeModal();
  // };

  return (
    <div className={styled.profaile}>
      <div className={styled.btn}>
        <button className={styled.open} onClick={() => openModal(true)}>
          Редагувати
        </button>
      </div>
      <p>Профіль</p>
      <div className="content">
        <div className="avatar_foto">
          <h2>Фото профілю</h2>
          <FaUserCircle /> <img src="" alt="" />
          <button>Встановити фото</button>
        </div>
        <div className="info">
          <h3>Загальні дані</h3>
          {userStudent.map((datastudent, id) => (
            <div key={id}>
              <p>Name: {datastudent.name}</p>
              <p>Surname: {datastudent.surname}</p>
              <p>Email: {datastudent.email}</p>
              <p>Phone: {datastudent.phone}</p>
              <p>Password:*********</p>
            </div>
          ))}
        </div>
        <div className="messages_notifications">
          <h3>Повідомлення і сповіщення</h3>
          <p>Надсилати повіломлення на email: Ні</p>
          <p>Показувати сповіщення на сайті: Так</p>
        </div>
      </div>
      <div>
        <Modal active={modalActive} setActive={closeModal}>
          <StudentForm />
        </Modal>
      </div>
    </div>
  );
}
