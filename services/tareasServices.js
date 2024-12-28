import Tareas from "../models/Tareas.js";
import crypto from "crypto";



export const getTareasService = () => {
    return Tareas.find({ habilitada: true });
}

export const getTareaService = (id) => {
    return Tareas.findOne({ id: id, habilitada: true });
}

export const createTareaService = async (nombre, descripcion, estado) => {
    const tarea =  {
        id: crypto.randomUUID(),
        nombre: nombre,
        descripcion: descripcion,
        estado: "pendiente",
        habilitada: true
    }

    const nuevaTarea =  await Tareas.create(tarea);

    return tarea;
}

export const updateTareaService = async (id, nombre, descripcion, estado) => {
    console.log("actualizando tarea",id);
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

    await tarea.save();

    return tarea;    
}
