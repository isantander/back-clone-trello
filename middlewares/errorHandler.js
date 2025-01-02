import {logger} from '../utils/logger.js';

/**
* Middleware para manejar errores y guardar los logs correspondientes
**/

export const errorHandler = (err, req, res, next) => {
    
    logger.error({
        message: err.message || "Internal Server Error",
        path: req.path, 
        method: req.method, 
        body: req.body,
        query: req.query,
    });

    res.status(err.status || 500).json({
        success:  "error",
        message: err.message || 'Internal Server Error',
    });
};