import { Router } from "express";
import ControladorUsuarios from "../controladores/controladorUsuarios.js"

const enrutadorUsuarios = Router();

enrutadorUsuarios.post("/", ControladorUsuarios.crearUsuario);

enrutadorUsuarios.get("/", ControladorUsuarios.leerUsuarios)


enrutadorUsuarios.get("/:id", ControladorUsuarios.leerUsuario)


enrutadorUsuarios.put("/:id", ControladorUsuarios.actualizarUsuarios)


enrutadorUsuarios.delete("/:id", ControladorUsuarios.eliminarUsuarios)


export default enrutadorUsuarios;
