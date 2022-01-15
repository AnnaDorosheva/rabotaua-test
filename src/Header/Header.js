import React from 'react';
import s from "./Header.module.css";
import logo from "../images/Logo-Regular@3x.png";

const Header = () => {
    return (
        <div>
            <header className={s.appHeader}>
<img src={logo} className={s.name} alt="logo"/>
      </header>
        </div>
    )
};

export default Header;
