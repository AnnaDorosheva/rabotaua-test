import React, { useState, useEffect } from "react";
import s from "./CardList.module.css";
import Card from "../Card/Card";
import info from "../info.json";

const CardList = () => {
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
  // Button "Откликнуться":
  const [respondedCards, setRespondedCards] = useState([]);
  const handRespond = (id) => {
    setRespondedCards((prev) => [...prev, id]);
  };
  const handlUnrespond = (id) => {
    if (dislikedCards !== []) {
      setRespondedCards((prev) =>
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
              onRespond={handRespond}
              onUnrespond={handlUnrespond}
              respondedCards={respondedCards}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardList;
