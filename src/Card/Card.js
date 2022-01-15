import React from "react";
import s from "./Card.module.css";
import banner from "../images/card-banner.png";

const Card = ({status, header, salary, salaryComment, company, city, members, logo}) => {
  return (
    <div className={s.cardContainer}>
      <img src={banner} alt="banner" className={s.banner} />
      <div className={s.cardContainerText}>
        <p className={s.status}>{status}</p>
        <h2 className={s.vacancy}>{header}</h2>
        <p className={s.salary}>
          {salary}<span className={s.salaryComment}>{salaryComment}</span>
        </p>
        <img alt="logo company" className={s.logo} src={logo}/>
        <p className={s.companyName}>{company}</p>
        <p className={s.sity}>{city}</p>
        <div className={s.aboutContainer}>
        <ul className={s.aboutContainer}>{members.map(item => (<li className={s.about}>{item}</li>))}</ul>
        </div>
        <div className={s.buttons}>
          <button type="submit" className={s.addButton}>
            <i className={s.iconAddBatton}></i>Откликнуться
          </button>
          <button type="submit" className={s.favorite}></button>
          <button type="submit" className={s.like}></button>
        </div>
        <p className={s.time}>time publication</p>
      </div>
    </div>
  );
};

export default Card;
