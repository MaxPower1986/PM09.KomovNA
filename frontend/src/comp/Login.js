import React from "react";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom"; 

function Login() {
  const location = useLocation();


  function Log(event) {
    event.preventDefault();
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const validLogin = login && login.length > 0;

    if (!validLogin || password.length === 0) {
      document.getElementById("loginError").innerText = "Вы ввели данные неправильно!";
      return;
    }

    const data = {
      login: login,
      password: password,
    };

    const api = "http://localhost:5000/log";

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((result) => {
        const { token } = result;
        console.log(token);
        if (token) {
          localStorage.setItem("token", token);
          const decodedToken = jwtDecode(token);
          console.log(decodedToken);

          window.location.href = `/page?token=${token}`;
        } else {
          document.getElementById("loginError").innerText = "Ошибка авторизации. Пожалуйста, проверьте ваши данные.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("loginError").innerText =
          "Произошла ошибка. Пожалуйста, попробуйте позже.";
      });
  }

  return (
    <div>
      <h3>Вход в аккаунт</h3>

      <form onSubmit={Log}>
        <input id="login" type="text" placeholder="Логин" required />
        <input id="password" type="password" placeholder="Пароль" required />
        <button id="send" type="submit">
          Войти
        </button>
      </form>
      <div id="loginError" style={{ color: "red", marginTop: "10px" }}></div>
    </div>
  );
}

export default Login;