import { Router } from "express";

const enrutadorUsuarios = Router();

enrutadorUsuarios.post("/", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "POST Crea Usuario",
    })
});

enrutadorUsuarios.get("/", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "GET Lee TODOS los usuarios",
    })
});

enrutadorUsuarios.get("/:id", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "GET lee un usuario",
    })
});

enrutadorUsuarios.put("/:id", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "PUT Actualiza un usuario",
    })
});

enrutadorUsuarios.delete("/:id", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "DELETE elimina un usuario",
    })
});

export default enrutadorUsuarios;
