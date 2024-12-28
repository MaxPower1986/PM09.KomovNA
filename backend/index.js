import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import jwt from "jsonwebtoken";
import { tokenValue } from "./config.js";

import User from "./models/User.js";

import Otsiv from "./models/Otsiv.js";

const app = express();
app.use(express.json());
app.use(cors());

const DB_URL = "mongodb://localhost:27017";
const PORT = 5000;

const generateAccessToken = (id, login) => {
  const payload = {
    id,
    login 
  }
  return jwt.sign(payload, tokenValue, {expiresIn: "24"});
}


  app.post("/log", async (req, res) => {
    try {
    const { login, password } = req.body;
    const exist = await User.findOne({ login });

      if (!exist) {
      return res.status(400).json({ message: "Пользователь незарегистрирован" });
    }
      if (exist.password !== password) {
      return res.status(400).json({ message: "Неверный логин или пароль!" });
    }
    const token = generateAccessToken(exist._id, exist.login);
    console.log(token);
    return res.json({token})
    } catch (err) {
      res
        .json({
          message: "Ошибка",
        })
        .status(500);
    }
  });

  app.post("/reg", async (req, res) => {
    const { login, password } = req.body;
    if (!password || password.trim() === "") {
      return res.status(400).json({ message: "Введите пароль" });
    }
    try {
      const exist = await User.findOne({ login });
      if (exist) {
        return res.status(400).json({ message: "Логин занят, выберите другой." });
      }
      const newUser = new User({ login, password });
      await newUser.save();
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(400)
          .json({ message: "Не используйте повторно эти данные!" });
      }
  
      console.error("Неизвестная ошибка:", err);
      return res.status(500).json({ message: "Неизвестная ошибка." });
    }
  });

  app.post("/addotsiv", async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Введите данные корректно" });
      }
    try {
        const newOtsiv = new Otsiv({ title, description });
        await newOtsiv.save();
        return res.status(201).json(newOtsiv);
    } catch (e) {
        return res
        .status(400)
        .json({ message: "Ошибка" });
    }
  });

  app.get("/otsivlist", async (req, res) => {
    try {
      const otsiv = await Otsiv.find();
      res.status(200).json(otsiv);
    } catch (e) {
      console.error(e);
    }
  });
  

  
async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('server is running'))
    } catch (e) {
        console.log(e);
    }
}

startApp();