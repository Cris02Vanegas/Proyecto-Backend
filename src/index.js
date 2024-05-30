import "dotenv/config";
import "./conexion-BaseDatos.js";
//Aqui importo el servidor de EXPRESS
import servidor from "./servidor.js";

//Aqui enciendo el servidor y lo pongo a escuchar peticion en el puerto 3000
servidor.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});