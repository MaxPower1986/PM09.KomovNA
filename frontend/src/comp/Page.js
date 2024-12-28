import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Header from './Header';
import { Link } from 'react-router-dom';

function Page() {
  const [userLogin, setUserLogin] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.login) {
          setUserLogin(decodedToken.login);
  
          console.log(`Decoded Token: ${JSON.stringify(decodedToken)}`);
        } else {
          throw new Error('Invalid token format');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserLogin(null);

    window.location.href = '/';
  };

  return (
    <>
      <Header />
      <div style={{ padding: '20px', width: '300px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Личный кабинет</h2>
        {userLogin ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p >Ваш логин: <strong>{userLogin}</strong></p>
            <Link to="/addtheme">Добавить отзыв</Link>
            <button onClick={handleLogout}>
              Выйти из аккаунта
            </button>
            
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>Пожалуйста, войдите в систему.</p>

        )}
      </div>
    </>
  );
}

export default Page;