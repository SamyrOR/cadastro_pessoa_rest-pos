function inserir() { }

function listar(params, callBack) {
  const objFake = [
    {
      id: 5,
      nome: "Samyr Ribeiro",
      email: "email@email.com",
      telefone: "11-90011110",
      organizacao: null,
      tags: ["cinema", "trabalho"],
    },
  ];
  let lista = objFake;
  let error = null;
  callBack(lista, error);
}

function atualizar() { }

function deletar() { }

export default {
  inserir,
  listar,
  atualizar,
  deletar,
};
