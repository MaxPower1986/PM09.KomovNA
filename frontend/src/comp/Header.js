import React from "react";
import { Link } from "react-router-dom";



function Header() {
    return (
        
        
        <div >
           
            <Link style={{ padding: "50px" }}  to="/">Главная</Link>
            

            <Link style={{ padding: "50px" }}  to="/info">Описание компании</Link>
            <Link style={{ padding: "50px" }} to="/Info2">Услуги</Link>
            <Link style={{ padding: "50px" }} to="/otsiv">Отзывы</Link>
            <Link style={{ padding: "50px" }} to="/info3">Калькулятор</Link>
            <Link style={{ padding: "50px" }} to="/info4">О нас</Link>

            
        </div>
    );
 
}

export default Header;
