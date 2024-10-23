import express from "express"
import cors from "cors"
import { connection } from "./database/index.js";

const app = express()
const port = 3080;

const whiteList = [
    "http://localhost:5173",
]

const options = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Acceso denegado, error de CORS"))
        }
    },
    methods: ["GET"],
    cdetials: true
}

app.use(cors(options))
app.use(express.json())


app.get("/", (request, response) => {
	
    connection.query("SELECT * FROM usuarios", (err, results) => {
        if (err) {
            console.log("Error: " + err.message)
        }

        return response.json(results);
    })

});

app.listen(port, (err) => {
    if (err) {
        console.error("Error de activacion del servidor")
    }

    console.log("El servidor esta escuchando en el puerto " + port)
})