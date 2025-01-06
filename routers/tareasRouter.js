import express from "express";
import { 
    createTareaController,
    getTareaController,
    getTareasController,
    updateTareaController,
    updatePartialTareaController,
    deleteTareaController,
    getTareaByAutorController
 } from "../controllers/tareasController.js";

import {autorizacionMiddleware} from "../middlewares/autorizacionMiddleware.js";

const tareasRouter = express.Router();

// protegemos todas las rutas con el middleware de autorización
//tareasRouter.use(autorizacionMiddleware);

tareasRouter.get("/", autorizacionMiddleware, getTareasController);
tareasRouter.get("/:id", autorizacionMiddleware, getTareaController);
tareasRouter.get("/autor/:autor",  getTareaByAutorController);
tareasRouter.post("/", autorizacionMiddleware, createTareaController);
tareasRouter.put("/:id", autorizacionMiddleware, updateTareaController); // No está implementad
tareasRouter.patch("/:id", autorizacionMiddleware, updatePartialTareaController);  // Lo uso para actualizar el orden de las tareas en las columnas
tareasRouter.delete("/:id", autorizacionMiddleware, deleteTareaController); // Soft delete

export default tareasRouter;