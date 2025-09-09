import express from "express";
import pessoaModel from "../models/pessoa-model";

const pessoaRouter = express.Router();
pessoaRouter.get("/", listaPessoas);
pessoaRouter.post("/", listaPessoas);

function listaPessoas(req, res, next) {
  pessoaModel.listar({}, (lista, error) => {
    if (error) {
      res.status(400).send(error.message);
      return;
    }
    res.json(lista);
  });
}

export default pessoaRouter;
