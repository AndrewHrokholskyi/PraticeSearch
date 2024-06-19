import React from "react";
import { useNavigate } from "react-router-dom";
import Student from "./components/Student";
import styled from "./profile.module.scss";

const Profile = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/CreateProfile");
  // };
  return (
    <>
      {/* <div className={styled.body}>
        <h2>Створіть профіль</h2>
        <button onClick={handleClick}>Створити</button>
      </div> */}
      <Student />
    </>
  );
};

export default Profile;
