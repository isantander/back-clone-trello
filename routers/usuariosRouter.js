import express from "express";
import { loginUsuarioController,  actualizarTokenController, crearUsuarioController } from "../controllers/usuariosController.js";

const usuariosRouter = express.Router();

usuariosRouter.post("/login", loginUsuarioController);
usuariosRouter.post("/registro", crearUsuarioController);
usuariosRouter.post("/actualizar-token", actualizarTokenController);

//usuariosRouter.post("/logout", logoutUsuarioController);

export default usuariosRouter;

