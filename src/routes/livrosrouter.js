import express from "express"
import livrosController from "../controllers/livrosControllers.js"

const router = express.Router()

router.get("/livros",livrosController.listarLivros)

export default router