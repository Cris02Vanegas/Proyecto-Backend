import bcrypt from "bcryptjs";
import { generarToken, verificarToken } from "../tools/funciones.js";
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

  validarToken: async (solicitud, respuesta) => {
    try {
      const token = solicitud.params.token;
      const decodificado = await verificarToken(token);

      if (decodificado.decodificado.id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "token válido",
          datos: decodificado,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "Token no válido",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "Ocurrio un error al verificar el token",
        datos: error,
      });
    }
  },
};

export default controladorInicioSesion;
