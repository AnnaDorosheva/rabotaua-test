import React from "react";
import s from "./Card.module.css";
import banner from "../images/card-banner.png";

const Card = () => {
  return (
    <div className={s.cardContainer}>
      <img src={banner} alt="banner" className={s.banner} />
      <div className={s.cardContainerText}>
        <p className={s.status}>Status</p>
        <h2 className={s.vacancy}>Vacansia name jjjjjjjjjj r</h2>
        <p className={s.salary}>
          Salary<span className={s.salaryComment}>comment</span>
        </p>
        <img alt="logo company" className={s.logo} />
        <p className={s.companyName}>company name</p>
        <p className={s.sity}>town</p>
        <div className={s.aboutContainer}>
        <p className={s.about}>about job</p>
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
