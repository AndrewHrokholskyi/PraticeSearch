import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import useModal from "../../../../hooks/useModal";
import { userStudent as initialUserStudent } from "../../../../helpers/data";
import styled from "./student.module.scss";
import Modal from "../../../../shared/components/Modal";
import StudentForm from "../StudentForm";
import ProfilePhotoUploader from "../ProfilePhotoUploader";

export default function Student() {
  const [userStudent, setUserStudent] = useState(initialUserStudent);
  const { modalActive, openModal, closeModal } = useModal();

  const updateStudent = (updatedUser) => {
    setUserStudent((prevState) =>
      prevState.map((datastudent) =>
        datastudent.id === datastudent.id
          ? { ...datastudent, ...updatedUser }
          : datastudent
      )
    );
    closeModal();
  };

  return (
    <div className={styled.profaile}>
      <div className={styled.btn}>
        <button className={styled.open} onClick={() => openModal()}>
          Редагувати
        </button>
      </div>
      <h1>Профіль</h1>
      <div className={styled.content}>
        {/* <div className={styled.avatar_foto}> */}
        <ProfilePhotoUploader />
        {/* <h3>Фото профілю</h3>
          <div className={styled.ava}>
            <FaUserCircle className={styled.icon} /> <img src="" alt="" />
            <button className={styled.open}>Встановити фото</button>
          </div> */}
        {/* </div> */}
        <div className={styled.info}>
          <h3>Загальні дані</h3>
          {userStudent?.map((datastudent, id) => (
            <div className={styled.info_text} key={id}>
              <p>Name: {datastudent.name}</p>
              <p>Surname: {datastudent.surname}</p>
              <p>Email: {datastudent.email}</p>
              <p>Phone: {datastudent.phone}</p>
              <p>Password:*********</p>
            </div>
          ))}
        </div>
        <div className={styled.messages_notifications}>
          <h3>Повідомлення і сповіщення</h3>
          <p>Надсилати повіломлення на email: Ні</p>
          <p>Показувати сповіщення на сайті: Так</p>
        </div>
      </div>
      <div>
        <Modal active={modalActive} setActive={closeModal}>
          <StudentForm student={userStudent} onSubmit={updateStudent} />
        </Modal>
      </div>
    </div>
  );
}
