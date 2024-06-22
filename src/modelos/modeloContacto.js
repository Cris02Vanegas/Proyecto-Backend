import { Schema, model } from "mongoose";

const esquemaContacto = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String },
});

export default model("Contacto", esquemaContacto);
