import express from "express";
import { getTareaService, getTareasService, createTareaService, updateTareaService, updatePartialTareaService } from "../services/tareasServices.js";

export const getTareaController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tarea = await getTareaService(id);

        if (!tarea) {
            return res.status(404).json({
                status: "error",
                message: "Tarea no encontrada",
                tarea: {}
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

export const getTareasController = async (req, res, next) => {
    try {
        const tareas = await getTareasService();

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

    }catch (error) {
        next(error);
    }
}

export const createTareaController =  async (req, res, next) => {
    try {
        const { nombre, descripcion, estado, orden } = req.body;

        const tarea = await createTareaService( nombre, descripcion, estado, orden );

        return res.status(200).json({
            status: "success",
            message: "Tarea creada",
            data: tarea
        })
        
    } catch (error) {
        next(error);
    }
}

export const updateTareaController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion, estado } = req.body;

        const tarea = await updateTareaService(id, nombre, descripcion, estado);

        if (!tarea) {
            return res.status(404).json({
                status: "error",
                message: "Tarea no encontrada",
                tarea: {}
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Tarea actualizada",
            data: tarea
        })

    } catch (error) {
        next(error);
    }
}

export const updatePartialTareaController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion, estado, orden } = req.body;

        const tarea = await updatePartialTareaService(id, nombre, descripcion, estado, orden);

        if (!tarea) {
            return res.status(404).json({
                status: "error",
                message: "Tarea no encontrada",
                tarea: {}
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Tarea actualizada",
            data: tarea
        })

    } catch (error) {
        next(error);
    }
}