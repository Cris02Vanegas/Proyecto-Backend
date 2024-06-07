import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema({
  nombre: { type: String, required: true },
  usuario: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: false },
  contrasenia: { type: String, required: true },
  /* confirmarContrasenia: { type: String, required: true },
        genero: { type: String, required: false },
        pais: { type: String, required: true },
        ciudad: { type: String, required: true },
        fechaNacimiento: { type: String, required: false },
        profesion: { type: String, required: false },
        preguntaSeguridad: { type: String, required: true },
        respuestaSeguridad: { type: String, required: true }, */
  cedula: { type: String, required: true },
});

export default model("Usuario", esquemaUsuario);
