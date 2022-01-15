import React from "react";
import s from "./CardList.module.css";
import Card from "../Card/Card";
import info from "../info.json";

const CardList = () => {
  return (
    <>
      <ul className={s.cardListContainer}>
        {info.map((item) => (
          <li key={item.id} className={s.card}>
            <Card {...item}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardList;
