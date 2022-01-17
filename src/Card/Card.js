import React, { useState, useEffect } from "react";
import s from "./Card.module.css";
import banner from "../images/card-banner.png";

const Card = (props) => {
  // Follow / unfollow button
  const [follow, setFollow] = useState({ follow: false, id: null });

  const hendleFollow = (id) => {
    setFollow((prev) => ({ follow: !prev.follow, id }));
    if (!follow.follow) {
      props.onFollow(id);
    }
    if (follow.follow) {
      props.onUnfollow(id);
    }
  };
  // Dislike / Like button
  const [dislike, setDislike] = useState({ dislike: false, id: null });
  const hendleLike = (id) => {
    setDislike((prev) => ({ dislike: !prev.dislike, id }));
    if (!dislike.dislike) {
      props.onDislike(id);
    }
    if (dislike.dislike) {
      props.onLike(id);
    }
  };

  useEffect(() => {
    if (props.followedCards.includes(props.id)) {
      setFollow((prev) => ({ follow: true }));
    }
  }, [props.followedCards]);

  useEffect(() => {
    if (props.dislikedCards.includes(props.id)) {
      setDislike((prev) => ({ dislike: true }));
    }
  }, [props.dislikedCards]);

  // styles
  const followBtnStyle = follow.follow ? s.unfavorite : s.favorite;
  const likeBtnStyle = dislike.dislike ? s.dislike : s.like;

  return (
    <div className={s.cardContainer}>
      {dislike.dislike && <div className={s.dislikeContainer}></div>}
      <img src={banner} alt="banner" className={s.banner} />
      <div className={s.cardContainerText}>
        {dislike.dislike ? (
          <p className={s.statusDislike}>Неинтересная</p>
        ) : (
          <p className={s.status}>{props.status}</p>
        )}
        <h2 className={s.vacancy}>{props.header}</h2>
        <p className={s.salary}>
          {props.salary}
          <span className={s.salaryComment}>{props.salaryComment}</span>
        </p>
        <div className={s.logoContainer}>
          <img alt="logo company" className={s.logo} src={props.logo} />
        </div>
        <p className={s.companyName}>{props.company}</p>
        <p className={s.sity}>{props.city}</p>
        <div className={s.aboutContainer}>
          <ul className={s.aboutContainer}>
            {props.members.map((item) => (
              <li key={item} className={s.about}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.buttons}>
          {!dislike.dislike && (
            <button type="submit" className={s.addButton}>
              <i className={s.iconAddBatton}></i>Откликнуться
            </button>
          )}
          <button
            type="button"
            className={followBtnStyle}
            onClick={() => hendleFollow(props.id)}
          ></button>
          <button
            type="button"
            className={likeBtnStyle}
            onClick={() => hendleLike(props.id)}
          ></button>
        </div>
        <p className={s.time}>time publication</p>
      </div>
    </div>
  );
};

export default Card;
