import { Router } from "express";
import controladorPrivado from "../controladores/controladorPrivado.js";

const enrutadorPrivado = Router();

enrutadorPrivado.post("/", controladorPrivado.crearProducto);

enrutadorPrivado.get("/", controladorPrivado.leerProductos);

enrutadorPrivado.get("/:id", controladorPrivado.leerProducto);

enrutadorPrivado.put("/:id", controladorPrivado.actualizarProductos);

enrutadorPrivado.delete("/:id", controladorPrivado.eliminarProducto);

export default enrutadorPrivado;
