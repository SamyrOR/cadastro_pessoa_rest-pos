import express from "express";
import pessoaModel from "../models/pessoa-model";
import { validate } from "jsonschema";
import pessoaSchema from "../models/schema.js";

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
  let pessoaJson = req.body;
  let result = validate(pessoaJson, pessoaSchema);
  if (result.errors.length > 0) {
    res.status(400).send("Erro no formato do objeto json");
    return;
  }
  pessoaModel.inserir(pessoaJson, (error, novaPessoa) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.message);
      return;
    }
    res.json(novaPessoa);
  });
}

export default pessoaRouter;
