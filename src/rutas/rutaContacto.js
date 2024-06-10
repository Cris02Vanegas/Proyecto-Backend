import { Router } from "express";
import controladorContacto from "../controladores/controladorContacto.js";

const enrutadorContacto = Router();

enrutadorContacto.post("/", controladorContacto.enviarContacto);

export default enrutadorContacto;
