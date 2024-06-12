import React from "react";
import { useForm } from "react-hook-form";
import styled from "./studentform.module.scss";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const onSubmit = (data) => {
  //   setUserStudent(data);
  // };

  return (
    <div className={styled.bodyForma}>
      <div className={styled.forma}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styled.inputl}>
            <div className={styled.inputForm}>
              <label htmlFor="name">Ім'я</label>
              <input
                id="name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", { required: true, maxLength: 30 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span role="alert">This is required</span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span role="alert">Max length exceeded</span>
              )}
            </div>
            <div className={styled.inputForm}>
              <label htmlFor="surname">Прізвище</label>
              <input
                id="surname"
                aria-invalid={errors.surname ? "true" : "false"}
                {...register("surname", { required: true, maxLength: 30 })}
              />
              {errors.surname && errors.surname.type === "required" && (
                <span role="alert">This is required</span>
              )}
              {errors.surname && errors.surname.type === "maxLength" && (
                <span role="alert">Max length exceeded</span>
              )}
            </div>
          </div>
          <div className={styled.inputForm}>
            <label htmlFor="email">Електронна пошта</label>
            <input
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: true,
                pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/i,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span role="alert">Invalid email format</span>
            )}
          </div>
          <div className={styled.inputForm}>
            <label htmlFor="phone">Номер телефону</label>
            <input
              id="phone"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", {
                required: true,
                pattern: /^[0-9]{10,15}$/,
              })}
            />
            {errors.phone && errors.phone.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.phone && errors.phone.type === "pattern" && (
              <span role="alert">Invalid phone number format</span>
            )}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default StudentForm;
