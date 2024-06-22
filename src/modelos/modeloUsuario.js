import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: false },
  contrasenia: { type: String, required: true },
});

export default model("Usuario", esquemaUsuario);
