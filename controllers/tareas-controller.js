import express from "express";
import { getTareaService , getTareasService, createTareaService } from "../services/tareas-services.js";


export const getTareaController = (req, res, next) => {
    try {
        const id = req.params.id
        const tarea = getTareaService(id);

        if (!tarea) {
            return res.status(404).json({
                message: "Tarea no encontrada"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Tarea obtenida",
            data: tarea
        })

    } catch (error) {
        next(error);
    }


}

export const getTareasController = (req, res, next) => {
    try{
        const tareas = getTareasService();

        if (!tareas) {
            return res.status(404).json({
                status: "error",
                message: "Tareas no encontradas",
                tareas: {}
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Tareas obtenidas",
            data: tareas
        })

    } catch (error) {
        next(error);
    }

}

export const createTareaController = (req, res, next) => {
    try {
        const { nombre, descripcion, estado } = req.body;

        const tarea = createTareaService({ nombre, descripcion, estado });

        return res.status(200).json({
            status: "success",
            message: "Tarea creada",
            data: tarea
        })
        
    } catch (error) {
        next(error);
    }
}

