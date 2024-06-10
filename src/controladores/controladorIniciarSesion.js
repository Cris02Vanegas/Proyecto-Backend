import bcrypt from "bcryptjs";
import { generarToken } from "../tools/funciones.js";
import modeloUsuario from "../modelos/modeloUsuario.js";

const controladorInicioSesion = {
  iniciarSesion: async (solicitud, respuesta) => {
    try {
      const { usuario, password } = solicitud.body;

      const usuarioEncontrado = await modeloUsuario.findOne({
        correo: usuario,
      });

      const contraseniaValidada = await bcrypt.compare(
        password,
        usuarioEncontrado.contrasenia
      );
      if (contraseniaValidada) {
        const token = await generarToken({
          id: usuarioEncontrado._id,
          name: usuarioEncontrado.nombre,
        });

        respuesta.json({
          resultado: "bien",
          mensaje: "Acceso permitido",
          datos: token,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "acceso denegado",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "Ocurrio un error al iniciar sesion",
        datos: error,
      });
    }
  },
};

export default controladorInicioSesion;
