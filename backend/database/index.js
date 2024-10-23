import mysql from "mysql"

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactmanual"
})

connection.connect((err) => {
    if (err) {
        console.error("Error de conexion a la base de datos")
    }

    console.log("Conexion exitosa a la Base de Datos")
})

export { connection }