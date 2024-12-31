import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generarToken , generarRefreshToken } from "../utils/generarTokens.js";
import Usuario from '../models/UsuariosModel.js';


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

    const accessToken = generarToken({  email: usuario.email, rol: usuario.rol });
    const refreshToken = generarRefreshToken({ email: usuario.email, rol: usuario.rol });

    usuario.refreshToken = refreshToken;
    await usuario.save();

    return { accessToken, refreshToken };
}

export const actualizarTokenService = async (refreshToken) => {
    const payload = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
    console.log(payload);
    const usuario = await Usuario.findOne({ email: payload.email });
    if (!usuario) {
        return -1
    }
    const tokenActualizado = generarAccessToken({ 
        email: usuario.email, 
        rol: usuario.rol 
    });
    
    return tokenActualizado;
}

export const logoutUsuarioService = async (refreshToken) => {}


 
