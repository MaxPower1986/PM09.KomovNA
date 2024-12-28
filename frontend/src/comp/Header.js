import React from "react";
import { Link } from "react-router-dom";



function Header() {
    return (
        
        
        <div >
           
            <Link  to="/">Главная</Link>
            <Link  to="/page">Личный кабинет</Link>

            <Link  to="/info">Услуги</Link>
            <Link style={{ padding: "50px" }} to="/Info2">Описание</Link>
            <Link style={{ padding: "50px" }} to="/otsiv">Отзывы</Link>
            <Link style={{ padding: "50px" }} to="/reg">Зарегистрироваться</Link>
            <Link style={{ padding: "50px" }} to="/login">Войти</Link>
            
        </div>
    );
 
}

export default Header;
