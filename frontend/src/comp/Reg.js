import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reg() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });



      const data = await response.json();

      console.log("Успешная регистрация:", data);
      navigate("/login", { state: { message: "Вы успешно зарегистрировались, войдите в систему" } });
    } catch (error) {
      setErrorMessage("Ошибка регистрации");
    }
  };

  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} action="/login">
        <input
          id="login"
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="send" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Reg;
