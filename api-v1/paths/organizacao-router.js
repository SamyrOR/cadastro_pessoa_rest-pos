import express from "express";

const organizacaoRouter = express.Router();
organizacaoRouter.use("/", (req, res) => res.send("Organizacao"));

export default organizacaoRouter;
