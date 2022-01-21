import React from "react";
import Header from "./Header/Header";
import s from "./App.module.css";
import CardList from "./CardList/CardList";

function App() {
  return (
    <div className={s.appContainer}>
      <Header />
      <div className={s.cardsContainer}>
        <CardList />
      </div>
    </div>
  );
}

export default App;
