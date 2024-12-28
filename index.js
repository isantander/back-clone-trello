import express from "express";
import cors from "cors";
import routerTareas from "./routers/routerTareas.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import moongose from "mongoose";
import env from "dotenv";
env.config();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tareas", routerTareas);

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
