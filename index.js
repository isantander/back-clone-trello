import express from "express";
import cors from "cors";
import tareasRouter from "./routers/tareasRouter.js";
import usuariosRouter from "./routers/usuariosRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import moongose from "mongoose";
import env from "dotenv";
import { autorizacionMiddleware } from "./middlewares/autorizacionMiddleware.js";
env.config();

const PORT = 3000;
const app = express();

app.use(express.json());

// verificar luego si es necesario definir methdos
app.use(cors({
    origin: "*", 
    allowedHeaders: ["Content-Type", "Authorization", "x-refresh-token"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.use("/tareas", tareasRouter);
app.use("/auth", usuariosRouter);

app.get("/protected", autorizacionMiddleware, (req, res) => {
    res.status(200).json({
        message: "Acceso permitido",
        user: req.user
    })
});

// Consolidación en un solo punto de los errores HTTP 500
app.use(errorHandler);


app.use((req,res) => {
    return res.status(404).json({
        message: "Not found"
    })
});


const MONGO_URL = process.env.MONGO_URL;

moongose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log(error);
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
