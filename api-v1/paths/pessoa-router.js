import express from "express";
import pessoaModel from "../models/pessoa-model";

const pessoaRouter = express.Router();
pessoaRouter.get("/", listaPessoas);
pessoaRouter.post("/", inserirPessoas);

function listaPessoas(req, res, next) {
  pessoaModel.listar({}, (error, lista) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.message);
      return;
    }
    res.json(lista);
  });
}

function inserirPessoas(req, res, next) {
  pessoaModel.inserir(req.body, (error, novaPessoa) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.message);
      return;
    }
    res.json(novaPessoa);
  });
}

export default pessoaRouter;
