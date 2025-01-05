import { crearUsuarioService, loginUsuarioService, actualizarTokenService } from '../services/usuariosServices.js';

export const crearUsuarioController = async (req, res, next) => {
    
    try{
        const {email, password, name} = req.body;
        const usuario = await crearUsuarioService(email, password, name);

        if(usuario === -1){
            return res.status(400).json({
                success: "error",
                message: "El usuario ya existe",
                data: {}
            })
        }
        return res.status(201).json({
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
            return res.status(400).json({
                success: "error",
                message: "Email o contraseña incorrectos",
                data: {}
            })
        }

        return res.status(200).json({
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
    try {
        const refreshToken = req.headers["x-refresh-token"]
        if (!refreshToken) {
            return res.status(400).json({
                status: "error", 
                menssage: "error en el servidor", 
                data:{}
            });
        }
        const accessToken = await actualizarTokenService(refreshToken);
        return res.status(200).json({
            status: "success", 
            menssage: "token actualizado", 
            data:{
                accessToken
            }
        });
    } catch (error) {
        next(error);
    }
}

export const logoutUsuarioController = async (req, res, next) => {}