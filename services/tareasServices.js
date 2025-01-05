import Tareas from "../models/TareasModel.js";
import crypto from "crypto";

export const getTareasService = () => {
    return Tareas.find({ habilitada: true });
}

export const getTareaService = (id) => {
    return Tareas.findOne({ id: id, habilitada: true });
}

export const createTareaService = async (nombre, descripcion, estado, orden) => {

    if(orden === undefined){
        const tareasActuales = await Tareas.find({ habilitada: true , estado: estado });
        orden = tareasActuales.length;
    }

    const tarea =  {
        id: crypto.randomUUID(),
        nombre: nombre,
        descripcion: descripcion,
        estado: estado,
        habilitada: true,
        orden: orden
    }

    const nuevaTarea =  await Tareas.create(tarea);

    return tarea;
}

export const updateTareaService = async (id, nombre, descripcion, estado, orden) => {
    //const tarea = await Tareas.findOne({ id: id, habilitada: true });
    const tarea = await Tareas.findOneAndUpdate({ id: id, habilitada: true }, {
        nombre: nombre,
        descripcion: descripcion,   
        estado: estado,
        orden: orden
    });

    if (!tarea) {
        return null;
    }

/*     tarea.nombre = nombre;
    tarea.descripcion = descripcion;
    tarea.estado = estado;
    tarea.orden = orden;

    await tarea.save(); */

    return tarea;
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
