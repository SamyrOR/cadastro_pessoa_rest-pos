import http from "http";
import express from "express";
import apiRouter from "../api-v1/api-router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json()); // captura o req.body e ja interpreta o json
app.use(bodyParser.urlencoded({ extended: false })); // interpreta o req.params
app.use("/api/v1", apiRouter);
app.get("/", (req, res) => res.send("Funcionando"));

const port = 5500;
http
  .createServer(app)
  .listen(port, () => console.log(`Servidor escutando a porta ${port}`));
