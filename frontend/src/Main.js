
import Header from "./comp/Header";
import React from "react";
import image1 from './media/image1.jpg';
import image2 from './media/image2.jpg';
import image3 from './media/image3.jpg';
import imagelogo1 from './media/imagelogo1.jpg';
import imagemesto1 from './media/imagemesto1.jpg';
import './Main.css';
import Otsiv from "./comp/Otsiv";


function Main() {
  return (
    <>
    <div className="header">
    <h3>Строительство домов</h3>
    <Header />

    </div>
    
      <div>
        <img className="img" src={imagelogo1}></img>
        <em>
        <b>О компании</b><div></div>
Архитектура Комфорта — это надежный партнер в сфере строительства домов, который предлагает полный спектр услуг по проектированию и возведению жилых и коммерческих объектов. Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и навыками в области строительства, архитектуры и дизайна. Мы стремимся к высокому качеству работы и индивидуальному подходу к каждому клиенту, что позволяет нам успешно реализовывать проекты любой сложности.

С момента своего основания, Архитектура Комфорта зарекомендовала себя как надежный и ответственный подрядчик, который ценит доверие своих клиентов. Мы используем только современные технологии и качественные материалы, что гарантирует долговечность и надежность построенных объектов. <div></div>

<b>История компании</b> <div></div>
Основана в 2010 году, компания "Атмосфера комфорта" быстро зарекомендовала себя на рынке строительства благодаря качеству и надежности своих услуг.
За годы работы компания реализовала множество успешных проектов, включая жилые комплексы, загородные дома и коммерческие объекты.
В 2015 году "Атмосфера комфорта" получила несколько наград за инновации в строительстве и дизайне. <div></div>

<b>Команда</b> <div></div>
В команде компании работают высококвалифицированные специалисты, включая архитекторов, инженеров и строителей с многолетним опытом.
Компания активно инвестирует в обучение и развитие своих сотрудников, что позволяет поддерживать высокий уровень профессионализма.
Руководство компании состоит из опытных менеджеров, которые имеют успешный опыт работы в строительной отрасли и управлении проектами. <div></div>



<b>Услуги</b> <div></div>
Строительство домов под ключ: Мы предлагаем полный цикл услуг по строительству жилых домов, включая проектирование, возведение фундамента, стен, крыши и отделку. Мы работаем с различными материалами, такими как кирпич, газобетон, дерево и другие.

Проектирование: Наша команда архитекторов и дизайнеров разработает индивидуальный проект вашего дома, учитывая все ваши пожелания и требования. Мы создаем функциональные и эстетически привлекательные решения, которые соответствуют современным стандартам.

Отделка и ремонт: Мы предлагаем услуги по внутренней и внешней отделке, включая штукатурку, покраску, укладку плитки и другие работы. Наша цель — создать комфортное и стильное пространство для жизни.

Консультации и поддержка: Мы предоставляем консультации по всем вопросам, связанным со строительством и проектированием. Наша команда готова ответить на ваши вопросы и помочь вам на каждом этапе реализации проекта.

Калькулятор стоимости строительства: Мы разработали удобный онлайн-калькулятор, который позволяет вам самостоятельно рассчитать стоимость строительства вашего дома, исходя из выбранных параметров и опций.

Архитектура Комфорта — это ваш надежный партнер в строительстве, который поможет вам осуществить мечту о собственном доме с минимальными затратами времени и усилий. Мы гарантируем высокое качество, прозрачность и ответственность на всех этапах работы.
        </em>
      </div>
      
      <div>
        <img className="img" src={image1} style={{ width: '300px', height: "100%" }} /><br></br>
        <img className="img" src={image2} style={{ width: '300px', height: "100%" }} />
        <img className="img" src={image3} style={{ width: '300px', height: "100%" }} />
      </div>
    <Otsiv></Otsiv>
    <div><i><h1 className="red">Адрес:</h1><div>

    </div>
г. Москва, ул. Примерная д. 10 <div>

</div>

<h1 className="red"> Телефон: </h1>
8 (999) 177-17-17
<div></div>
<h1 className="red">
Электронная почта:</h1> <div></div>
info@architecturecomfort.ru)
<div></div>
<h1 className="red">
Часы работы:</h1> <div></div>

Пн - Пт: 10:00 - 19:00 <div></div>
Сб: 10:00 - 16:00 <div></div>
Вс: выходной</i></div>
<img className="img" src={imagemesto1}></img>
    </>
  );
}

export default Main;
