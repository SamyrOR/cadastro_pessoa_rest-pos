const pessoaSchema = {
  type: "object",
  nome: {
    type: "string",
    description: "Nome da referida pessoa",
  },
  email: {
    type: "string",
    description: "Endereço eletrônico da pessoa",
  },
  telefone: {
    type: "string",
    description: "Endereço eletrônico da pessoa",
  },
  tags: {
    type: "array",
    items: {
      type: "string",
    },
  },
  required: ["nome", "email"],
};

export default pessoaSchema;
