import express from "express";
import { createTareaController,  getTareaController,  getTareasController, updateTareaController, updatePartialTareaController } from "../controllers/tareasController.js";

const routerTareas = express.Router();

routerTareas.get("/", getTareasController);
routerTareas.get("/:id", getTareaController);
routerTareas.post("/", createTareaController);
routerTareas.put("/:id", updateTareaController);
routerTareas.patch("/:id", updatePartialTareaController);
routerTareas.delete("/:id",);

export default routerTareas;