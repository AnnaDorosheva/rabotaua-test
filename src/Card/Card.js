import React, { useState, useEffect } from "react";
import s from "./Card.module.css";
import Timer from "../Timer/Timer";
import Uploader from "../Uploader/Uploader";

const Card = (props) => {
  // Follow / unfollow button state:
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
  // Dislike / Like button state:
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
  // Uloader:
  // const [isUploader, setUploader] = useState(false);
  // Button "Откликнуться" state:
  const [respond, setRespond] = useState(false);
  const [urlImg, setUrlImg] = useState(null);

  const handleRespond = (id) => {
    setRespond((prev) => !prev);
    if (respond) {
      props.onUnrespond(id);
      // setUploader(true);
    }
    if (!respond) {
      props.onRespond(id);
    }
  };

  useEffect(() => {
    if (urlImg) {
      props.onAddSummary(props.id, urlImg);
    }
    // if(!urlImg) {
    //   props.onDeletSummary(props.id)
    // }
  }, [urlImg]);

  // get state from locasalStorage:
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

  useEffect(() => {
    if (props.respondedCards.includes(props.id)) {
      setRespond((prev) => true);
    }
  }, [props.respondedCards]);

  useEffect(() => {
    props.summary.filter((item) =>
      item.id === props.id ? setUrlImg(item.img) : null
    );
  }, [props.summary]);

  // styles:
  const followBtnStyle = follow.follow ? s.unfavorite : s.favorite;
  const likeBtnStyle = dislike.dislike ? s.dislike : s.like;

  return (
    <div className={s.cardContainer}>
      {/* add or not no active background */}
      {dislike.dislike || respond ? (
        <div className={s.dislikeContainer}></div>
      ) : null}
      <div className={s.bannerContainer}>
        <img src={props.img} alt="banner" className={s.banner} />
      </div>
      <div className={s.cardContainerText}>
        {/* change status */}
        {dislike.dislike && <p className={s.statusDislike}>Неинтересная</p>}
        {urlImg && <p className={s.statusRespond}>Вы откликнулись</p>}
        {!dislike.dislike && !respond && (
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

        {/* Buttons */}
        <div className={s.buttons}>
          {!dislike.dislike && !respond && (
            <button
              className={s.addButton}
              onClick={() => handleRespond(props.id)}
            >
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

          {/* Uploader for resume */}
          {respond && !urlImg ? (
            <Uploader setUrlImg={setUrlImg} id={props.id} />
          ) : null}
          {respond && urlImg ? (
            <div className={s.resume}>
              <span>Отправлено резюме </span>
              <a
                href={urlImg}
                target="_blank"
                rel="noopener noreferrer"
                className={s.resumeLink}
              >
                "{props.job}"
              </a>
            </div>
          ) : null}
        </div>

        {/* timer */}
        <Timer time={props.time} />
      </div>
    </div>
  );
};

export default Card;
