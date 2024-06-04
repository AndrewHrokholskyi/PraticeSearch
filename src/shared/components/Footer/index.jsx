import React from "react";
import styled from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styled.footer}>
        <p>
          &copy; Проект розробили студенти Вінницького національного технічного
          університету Козуб Д.В., Янченко К.О., Вовк Р.С., Ковальчук С.В.,
          Яблонський Д.А., Грохольсьікий А.В.
        </p>
      </footer>
    </>
  );
};

export default Footer;
