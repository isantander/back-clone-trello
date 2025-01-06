import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generarAccessToken , generarRefreshToken } from "../utils/generarTokens.js";
import Usuario from '../models/UsuariosModel.js';
import env from "dotenv";
env.config();

export const crearUsuarioService = async (email, password, name) => {
    const existeUsuario = await Usuario.findOne({ email: email });
    if (existeUsuario) {
        return -1
    }
    const passwordHashed = await bcrypt.hash(password, 10);

    const usuario = { 
        email: email, 
        password: passwordHashed,
        name: name,
        rol: "user",
        emailValidado: true // Cambiar a false en producción y generar proceso de validación de email
    };
    console.log(usuario);

    const nuevoUsuario =  await Usuario.create(usuario);
    return nuevoUsuario;
}

export const loginUsuarioService = async (email, password) => {
    const usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
        const login =  false;
        return -1
    }
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
        return -1
    }

    const usuarioId = usuario._id;
    const userName = usuario.name;
    const accessToken = generarAccessToken({  email: usuario.email, rol: usuario.rol });
    const refreshToken = generarRefreshToken({ email: usuario.email, rol: usuario.rol });

    usuario.refreshToken = refreshToken;
    await usuario.save();

    console.log("nombre ", userName);
    return { usuarioId, userName, accessToken, refreshToken };
}

export const actualizarTokenService = async (refreshToken) => {
    const user = jwt.verify(refreshToken, process.env.JWT_REFRESH);
    const userDB = await Usuario.findOne({email: user.email});

    if(!userDB) {
        return -1
    }

    const accesstoken = generarAccessToken({username:user.username,password: user.password });
     
    return accesstoken
}



export const logoutUsuarioService = async (refreshToken) => {

}


 
