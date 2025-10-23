import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import allRoutes from "./routes/index.js";


dotenv.config();

const PORT = process.env.PORT || 4000
const RAIZ = process.env.RAIZ
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        msg: "La API esta funcionando correctamente"
    })
})


app.use(RAIZ, allRoutes)



app.listen(PORT, () => {
    console.log(`app corriendo en http://localhost:${PORT}`)
})
