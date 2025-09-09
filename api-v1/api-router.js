import express from "express";
import pessoaRouter from "./paths/pessoa-router";
import organizacaoRouter from "./paths/organizacao-router";

const apiRouter = express.Router();
apiRouter.use("/", (req, res) => res.send("API v1"));
apiRouter.use("/pessoas", pessoaRouter);
apiRouter.use("/organizacoes", organizacaoRouter);

export default apiRouter;
