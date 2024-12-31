import express from "express";
import { createTareaController,  getTareaController,  getTareasController, updateTareaController, updatePartialTareaController } from "../controllers/tareasController.js";

const tareasRouter = express.Router();

tareasRouter.get("/", getTareasController);
tareasRouter.get("/:id", getTareaController);
tareasRouter.post("/", createTareaController);
tareasRouter.put("/:id", updateTareaController);
tareasRouter.patch("/:id", updatePartialTareaController);
tareasRouter.delete("/:id",);

export default tareasRouter;