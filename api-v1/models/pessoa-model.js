import db from "../utils/db.js";

function inserir(pessoa, callBack) {
  db.pessoasDB.insert(pessoa, callBack);
}

function listar(params, callBack) {
  db.pessoasDB.find(params, callBack);
}

function atualizar() { }

function deletar() { }

export default {
  inserir,
  listar,
  atualizar,
  deletar,
};
