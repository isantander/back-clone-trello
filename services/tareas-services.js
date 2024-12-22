
const initialTask = [
    { id: "0", nombre: "Tarea 0-1", descripcion: "Descripción de la tarea 1", estado: "pendiente" },
    { id: "1", nombre: "Tarea 0-4", descripcion: "Descripción de la tarea 4", estado: "pendiente" },
    { id: "2", nombre: "Tarea 0-2", descripcion: "Descripción de la tarea 2", estado: "proceso" },
    { id: "3", nombre: "Tarea 0-5", descripcion: "Descripción de la tarea 5", estado: "proceso" },
    { id: "4", nombre: "Tarea 0-3", descripcion: "Descripción de la tarea 3", estado: "terminada" },
    { id: "5", nombre: "Tarea 0-6", descripcion: "Descripción de la tarea 6", estado: "terminada" },
];

export const getTareasService = () => {
    return initialTask;
}

export const getTareaService = (id) => {
    return initialTask.find(task => task.id === id);
}

export const createTareaService = (tarea) => {

    initialTask.push({
        id: initialTask.length.toString(),
        nombre: tarea.nombre,
        descripcion: tarea.descripcion,
        estado: "pendiente"
    });
    return tarea;
}
