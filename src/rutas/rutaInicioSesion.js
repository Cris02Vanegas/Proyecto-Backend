import { Router } from "express";
import controladorInicioSesion from "../controladores/controladorIniciarSesion.js";

const enrutadorIniciarSesion = Router();

enrutadorIniciarSesion.post("/", controladorInicioSesion.iniciarSesion);

export default enrutadorIniciarSesion;
