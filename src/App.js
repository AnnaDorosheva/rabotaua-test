import Header from "./Header/Header";
import Card from "./Card/Card";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.appContainer}>
      <Header />
      <div className={s.cardsContainer}>
        <Card />
      </div>
    </div>
  );
}

export default App;
