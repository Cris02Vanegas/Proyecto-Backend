import bcrypt from "bcryptjs";
import modeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
  //Crear usuario
  crearUsuario: async (solicitud, respuesta) => {
    try {
      const { nombre, usuario, correo, telefono, contrasenia, cedula } =
        solicitud.body;
      const contraseniaProtegida = await bcrypt.hash(contrasenia, 10);
      const nuevoUsuario = new modeloUsuario({
        nombre,
        usuario,
        correo,
        telefono,
        contrasenia: contraseniaProtegida,
        cedula,
      });
      const usuarioCreado = await nuevoUsuario.save();
      if (usuarioCreado._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Usuario creado!!",
          datos: usuarioCreado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al crear usuario!!",
        datos: error,
      });
    }
  },

  //leer un usuario
  leerUsuario: async (solicitud, respuesta) => {
    try {
      const usuarioEncontrado = await modeloUsuario.findById(
        solicitud.params.id
      );
      if (usuarioEncontrado._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Usuario leído",
          datos: usuarioEncontrado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al leer un usuario!!",
        datos: error,
      });
    }
  },

  //Leer Usuarios
  leerUsuarios: async (solicitud, respuesta) => {
    try {
      const usuariosEncontrados = await modeloUsuario.find();
      respuesta.json({
        resultado: "Bien",
        mensaje: "Usuarios leídos",
        datos: usuariosEncontrados,
      });
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al leer los usuarios!!",
        datos: error,
      });
    }
  },

  //ActualizarUsuario
  actualizarUsuarios: async (solicitud, respuesta) => {
    try {
      const updateUsuario = await modeloUsuario.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (updateUsuario._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Usuario actualizado",
          datos: updateUsuario,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al actualizar el usuario!!",
        datos: error,
      });
    }
  },

  //EliminarUsuariopost
  eliminarUsuarios: async (solicitud, respuesta) => {
    try {
      const usuarioEliminado = await modeloUsuario.findByIdAndDelete(
        solicitud.params.id
      );
      if (usuarioEliminado._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Usuario eliminado",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al eliminar un usuario!!",
        datos: error,
      });
    }
  },
};

export default ControladorUsuarios;

/* const usuario = 
} */
