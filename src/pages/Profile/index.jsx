import React from "react";
import { useNavigate } from "react-router-dom";
// import Student from "./components/Student";

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CreateProfile");
  };
  return (
    <>
      <div>
        <p>Створіть профіль</p>
        <button onClick={handleClick}>Створити</button>
      </div>
      {/* <Student /> */}
    </>
  );
};

export default Profile;
