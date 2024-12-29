import exprees from 'express';
import mongoose from 'mongoose';

const tareasSchema = new mongoose.Schema({
    id: {type: String, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: String, required: true},
    habilitada: {type: Boolean, default: true},
    orden: { type: Number, required: true }
});

export default mongoose.model('Tareas', tareasSchema);


