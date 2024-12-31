import jwt from 'jsonwebtoken';


export const autorizacionMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: "error",
            message: "Token no proporcionado",
            data: {}
        });
    }

    console.log(process.env.JWT_ACCESS);
    jwt.verify(token, process.env.JWT_ACCESS, (err, user) => {
        if (err) {
            return res.status(401).json({
                success: "error",
                message: "Token inválido",
                data: {}
            });
        }

        req.user = user;
        next();
    });
}