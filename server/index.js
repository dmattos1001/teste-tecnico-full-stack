import express from "express";
import userRoutes from "./routers/user.routes";
import loginRoutes from "./routers/login.routes";
import "dotenv.config";
import { startDatabase } from "./src/database";

const path = require();
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

export default app.listen(process.env.PORT || 3000, () => {
  startDatabase();
  console.log("Server running");
});
