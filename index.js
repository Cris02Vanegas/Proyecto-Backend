"use strict"
const express = require("express");

const servidor = express();

servidor.get("/", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "Proyecto Backend",
        nombre: "Cristhian",
        apellido: "Vanegas"
    })
});

servidor.get("/xxx", (solicitud, respuesta) => {
    respuesta.redirect(301, "https://bit.institute/"); // sirve para redireccionar la pg cuando no hay respuesta del enlace
})

servidor.listen(3000);
console.log("Servidor corriendo en el puerto 3000");