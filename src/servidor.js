// Se trae el servidor de EXPRESS
import express from "express";
import morgan from "morgan";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";

const servidor = express();

servidor.use(morgan("dev"))
servidor.use(express.json())
servidor.use("/usuarios", enrutadorUsuarios)

servidor.get("/", (solicitud, respuesta) => {
    respuesta.status(404).send("No encontrado");
});

/* servidor.get("/xxx", (solicitud, respuesta) => {
    respuesta.redirect(301, "https://bit.institute/"); // sirve para redireccionar la pg cuando no hay respuesta del enlace
})
 */


//Se exporta el servidor
export default servidor;
