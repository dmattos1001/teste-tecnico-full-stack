import express from "express";
import userRoutes from "./routers/user.routes";
import loginRoutes from "./routers/login.routes";
import "dotenv.config";
import { startDatabase } from "./src/database";

const path = require();
const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

module.exports = app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
