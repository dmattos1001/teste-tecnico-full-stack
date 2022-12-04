import express from "express";
import "dotenv.config";
import { startDatabase } from "./src/database";

import clientesRoutes from "./src/routers/clientes.routes";
import contatosRoutes from "./src/routers/contatos.routes";

const app = express();

app.use(express.json());
const express = require("express");

app.use("/clientes", clientesRoutes);
app.use("/contatos", contatosRoutes);

//app.get("/api", (req, res) => {
//res.json({ message: "Hello from server!" });
//});

export default app.listen(process.env.PORT || 3000, () => {
  startDatabase();
  console.log("Server running");
});
