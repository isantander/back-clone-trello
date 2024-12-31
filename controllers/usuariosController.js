import { crearUsuarioService, loginUsuarioService, actualizarTokenService } from '../services/usuariosServices.js';

export const crearUsuarioController = async (req, res, next) => {
    
    try{
        const {email, password, name} = req.body;
        const usuario = await crearUsuarioService(email, password, name);

        res.status(201).json({
            success: "success",
            message: "Usuario creado exitosamente",
            data: usuario
        })

    }catch(err){
        next(err);
    }
}

export const loginUsuarioController = async (req, res, next) => {
    
    try{
        const {email, password} = req.body;
        const { accessToken, refreshToken} = await loginUsuarioService(email, password);

        if(!accessToken || !refreshToken){
            res.status(400).json({
                success: "error",
                message: "Email o contraseña incorrectos",
                data: {}
            })
        }

        res.status(200).json({
            success: "success",
            message: "Usuario logueado exitosamente",
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        })
    }catch(err){
        next(err);
    }
}

export const actualizarTokenController = async (req, res, next) => {
    
    try{
        const refreshToken = req.headers['x-refresh-token'];
        
        if(!refreshToken){
            res.status(401).json({
                success: "error",
                message: "Token de refresco no proporcionado",
                data: {}
            })
        }

        const accessToken = await actualizarTokenService(refreshToken);

        res.status(200).json({
            success: "success",
            message: "Token actualizado exitosamente",
            data: {
                accessToken: accessToken
            }
        })


    }
    catch(err){
        next(err);
    }
}

export const logoutUsuarioController = async (req, res, next) => {}