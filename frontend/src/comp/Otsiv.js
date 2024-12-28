
import Header from "./Header";
import React, { useEffect, useState } from "react";
import './Otsiv.css';

function Otsiv() {

  const [data, setData] = useState([]);

    useEffect(() => { 
        const getData = async () => {
            try {
                const api = 'http://localhost:5000/otsivlist'; 
                const response = await fetch(api);
        
                if (!response.ok) {
                  throw new Error('Ошибка получения');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        getData();
    }, []);

return (
        <>

            <Header></Header>
            <div class="news">
            <p style={{ fontsize: "30px" }}>Отзывы</p>
            <ul >
                {data.map(item => (
                    <li key={item.id}>
                        
                        <strong>ФИО: {item.title}
                            </strong>
                            <br></br> Описание отзыва: {item.description}
                    </li>
                ))}
            </ul>
            </div>

            
        </>
    );
};

export default Otsiv;