import Tareas from "../models/TareasModel.js";
import crypto from "crypto";

export const getTareasService = () => {
    return Tareas.find({ habilitada: true }).populate('autor', 'name');
}

export const getTareaService = (id) => {
    return Tareas.findOne({ id: id, habilitada: true }).populate('autor', 'name');
}

export const createTareaService = async (nombre, descripcion, estado, autor) => {

    const tareasActuales = await Tareas.find({ habilitada: true , estado: estado });
    const orden = tareasActuales.length;

    const tarea =  {
        id: crypto.randomUUID(),
        nombre: nombre,
        descripcion: descripcion,
        estado: estado,
        habilitada: true,
        orden: orden,
        autor: autor
    }

    await Tareas.create(tarea);

    return tarea;
}

export const updateTareaService = async (id, nombre, descripcion, estado, orden) => {
    console.log("updateTareaService", id, nombre, descripcion, estado, orden);
    const tarea = await Tareas.findOneAndUpdate({ id: id, habilitada: true }, {
        nombre: nombre,
        descripcion: descripcion,   
        estado: estado,
        orden: orden
    });

    if (!tarea) {
        return null;
    }

    return tarea;
}

export const deleteTareaService = async (id) => {
    const tarea = await Tareas.findOne({ id: id, habilitada: true });

    if (!tarea) {
        return null;
    }

    tarea.habilitada = false;
    await tarea.save();
    return true;

}

export const updatePartialTareaService = async (id, nombre, descripcion, estado, orden) => {
    
    const tarea = await Tareas.findOne({ id: id, habilitada: true });
    
    if (!tarea) {
        return null;
    }
    
    if(nombre) {
        tarea.nombre = nombre;
    }
    if(descripcion) {
        tarea.descripcion = descripcion;
    }
    if(estado) {
        tarea.estado = estado;
    }
    
    if(orden >= 0){
        tarea.orden = orden;
    }

    await tarea.save();

    return tarea;
}

export const getTareaByAutorService = async (autor) => {
    const tareas = await Tareas.find({ autor: autor, habilitada: true }).populate('autor', 'name');
    
    if (!tareas) {
        return null;
    }
    
    return tareas;
    
}