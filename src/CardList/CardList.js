import React, { useState, useEffect } from "react";
import s from "./CardList.module.css";
import Card from "../Card/Card";
import info from "../info.json";

const CardList = () => {
  console.log(info);
  // follow / unfollow button
  const [followedCards, setFollowedCards] = useState([]);
  const handlFollow = (id) => {
    setFollowedCards((prev) => [...prev, id]);
  };
  const handleUnfollow = (id) => {
    if (followedCards !== []) {
      setFollowedCards((prev) =>
        prev.filter((cardId) => cardId !== id)
      );
    }
  };
  // like / dislike button
  const [dislikedCards, setDislikedCards] = useState([]);
  const handleDislike = (id) => {
    setDislikedCards((prev) => [...prev, id]);
  };
  const handleLike = (id) => {
    if (dislikedCards !== []) {
      setDislikedCards((prev) =>
        prev.filter((cardId) => cardId !== id)
      );
    }
  };
  // Local Storage
  useEffect(() => {
    const followedCads = localStorage.getItem("followedCards");
    if (followedCads) {
      setFollowedCards(JSON.parse(followedCads));
    }
    const dislikedCards = localStorage.getItem("dislikedCards");
    if(dislikedCards) {
      setDislikedCards(JSON.parse(dislikedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followedCards", JSON.stringify(followedCards));
  }, [followedCards]);
  useEffect(() => {
    localStorage.setItem("dislikedCards", JSON.stringify(dislikedCards));
  }, [dislikedCards]);

  return (
    <>
      <ul className={s.cardListContainer}>
        {info.map((item) => (
          <li key={item.id} className={s.card}>
            <Card
              {...item}
              onFollow={handlFollow}
              onUnfollow={handleUnfollow}
              followedCards={followedCards}
              onDislike={handleDislike}
              onLike={handleLike}
              dislikedCards={dislikedCards}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardList;
