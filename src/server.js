import http from "http";
import express from "express";
import apiRouter from "../api-v1/api-router.js";

const app = express();

app.use("/api/v1", apiRouter);
app.get("/", (req, res) => res.send("Funcionando"));

const port = 5500;
http
  .createServer(app)
  .listen(port, () => console.log(`Servidor escutando a porta ${port}`));
