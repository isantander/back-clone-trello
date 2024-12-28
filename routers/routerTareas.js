import express from "express";
import { createTareaController,  getTareaController,  getTareasController, updateTareaController } from "../controllers/tareasController.js";

const routerTareas = express.Router();

routerTareas.get("/", getTareasController);
routerTareas.get("/:id", getTareaController);
routerTareas.post("/", createTareaController);
routerTareas.put("/:id", updateTareaController);
routerTareas.delete("/:id",);

export default routerTareas;