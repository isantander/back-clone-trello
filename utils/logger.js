import { createLogger, format, transports } from "winston";

export const logger = createLogger({
    level: "error", 
    format: format.combine(
        format.timestamp(), 
        format.errors({ stack: true }), 
        format.json() 
    ),
    transports: [
        new transports.File({ filename: "logs/errors.log", level: "error" }),
        // Muestro en consola solo por estar en desarrollo
        new transports.Console({
            format: format.combine(format.colorize(), format.simple())
        })
    ]
});