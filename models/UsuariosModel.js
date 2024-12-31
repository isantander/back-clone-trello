import mongoose from "mongoose";


const usuariosSchema = new mongoose.Schema({
    email: {type: String, required: true, uniqe: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    rol: {type: String, required: true, default: "user"},
    emailValidado: {type: Boolean, default: false},
    refreshToken : {type: String}
});

export default mongoose.model("Usuarios", usuariosSchema);
