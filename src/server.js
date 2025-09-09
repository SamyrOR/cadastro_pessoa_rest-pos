import http from "http";
import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Funcionando"));

const port = 5500;
http
  .createServer(app)
  .listen(port, () => console.log(`Servidor escutando a porta ${port}`));
