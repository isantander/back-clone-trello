import jwt from "jsonwebtoken";

/**
 *  Middleware de autorización mejorado para 
 *  manipular más claramente los distintos errores 
 */

export const autorizacionMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: "error",
            message: "Token no proporcionado",
            code: "TOKEN_NOT_PROVIDED",
        });
    }

    jwt.verify(authHeader, process.env.JWT_ACCESS, (err, user) => {

        if (err) {
            if (err.name === "TokenExpiredError") {
                console.log("Token expirado");
                return res.status(401).json({
                    success: "error",
                    message: "Token expirado",
                    code: "TOKEN_EXPIRED",
                });
            }
            if (err.name === "JsonWebTokenError") {
                console.log("Token inválido");
                return res.status(401).json({
                    success: "error",
                    message: "Token inválido",
                    code: "TOKEN_INVALID",
                });
            }
            console.log("Error desconocido con el token");
            return res.status(401).json({
                success: "error",
                message: "Error desconocido con el token",
                code: "TOKEN_UNKNOWN_ERROR",
            });
        }

        req.user = user;
        next();
    });
};
