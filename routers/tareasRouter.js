import express from "express";
import { createTareaController,  getTareaController,  getTareasController, updateTareaController, updatePartialTareaController } from "../controllers/tareasController.js";
import {autorizacionMiddleware} from "../middlewares/autorizacionMiddleware.js";

const tareasRouter = express.Router();

// protegemos todas las rutas con el middleware de autorización
//tareasRouter.use(autorizacionMiddleware);

tareasRouter.get("/", autorizacionMiddleware, getTareasController);
tareasRouter.get("/:id", autorizacionMiddleware, getTareaController);
tareasRouter.post("/", autorizacionMiddleware, createTareaController);
tareasRouter.put("/:id", autorizacionMiddleware, updateTareaController);
tareasRouter.patch("/:id", autorizacionMiddleware, updatePartialTareaController);
tareasRouter.delete("/:id",);

export default tareasRouter;