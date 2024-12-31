import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const JWT_ACCESS = process.env.JWT_ACCESS;
const JWT_REFRESH = process.env.JWT_REFRESH;
const JWT_ACCESS_EXPIRATION = process.env.JWT_ACCESS_EXPIRATION;
const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION;

export const generarToken = (payload) => {
    const expiracion = JWT_ACCESS_EXPIRATION || "15m";
    return jwt.sign(payload, JWT_ACCESS, { expiresIn: expiracion });
}

export const generarRefreshToken = (payload) => {
    const expiracion = JWT_REFRESH_EXPIRATION || "30d";
    return jwt.sign(payload, JWT_REFRESH, { expiresIn: expiracion });
}
