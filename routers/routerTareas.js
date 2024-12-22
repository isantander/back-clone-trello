import express from "express";
import { createTareaController, getTareaController, getTareasController } from "../controllers/tareas-controller.js";

const routerTareas = express.Router();

routerTareas.get("/", getTareasController);
routerTareas.get("/:id", getTareaController);
routerTareas.post("/", createTareaController);
routerTareas.put("/:id",);
routerTareas.delete("/:id",);

export default routerTareas;