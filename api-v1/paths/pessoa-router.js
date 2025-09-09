import express from "express";

const pessoaRouter = express.Router();
pessoaRouter.use("/", (req, res) => res.send(" Pessoas"));

export default pessoaRouter;
