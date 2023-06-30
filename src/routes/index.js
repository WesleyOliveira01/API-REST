import express from "express";
import livros from "./livrosrouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ nome: "curos de nove" });
  });

  app.use(
    express.json(),
     livros
    );
};

export default routes;
