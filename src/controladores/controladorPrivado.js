import multer from "multer";
import fs from "fs-extra";
import ModeloPrivado from "../modelos/modeloPrivado.js";
import modeloPrivado from "../modelos/modeloPrivado.js";

const ControladorPrivador = {
  crearProducto: async (solicitud, respuesta) => {
    try {
      const almacenamiento = multer.diskStorage({
        destination: "imagenes",
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });
      const carga = multer({ storage: almacenamiento }).single("imagen");
      carga(solicitud, respuesta, async (error) => {
        if (error) {
          respuesta.json({
            resultado: "mal",
            mensaje: "ocurrió un error al subir imagen gorra",
            datos: null,
          });
        } else {
          const nuevoProducto = new ModeloPrivado({
            nombre: solicitud.body.nombre,
            documento: solicitud.body.documento,
            fechaNacimiento: solicitud.body.fechaNacimiento,
            planViaje: solicitud.body.planViaje,
            fechaViaje: solicitud.body.fechaViaje,
            email: solicitud.body.email,
            numeroEmergencia: solicitud.body.numeroEmergencia,
            imagen: solicitud.file.filename,
          });
          console.log("Valores: ", nuevoProducto);
          const productoCreado = await nuevoProducto.save();
          if (productoCreado._id) {
            respuesta.json({
              resultado: "bien",
              mensaje: "gorra creada",
              datos: productoCreado._id,
            });
          }
        }
      });
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al crear usuario!!",
        datos: error,
      });
    }
  },

  //leer un usuario
  leerProducto: async (solicitud, respuesta) => {
    try {
      const productoEncontrado = await modeloPrivado.findById(
        solicitud.params.id
      );
      if (productoEncontrado._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Producto leído",
          datos: productoEncontrado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al leer un producto!!",
        datos: error,
      });
    }
  },

  //Leer Usuarios
  leerProductos: async (solicitud, respuesta) => {
    try {
      const productosEncontrados = await modeloPrivado.find();
      respuesta.json({
        resultado: "Bien",
        mensaje: "Productos leídos",
        datos: productosEncontrados,
      });
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al leer los productos!!",
        datos: error,
      });
    }
  },

  //ActualizarUsuario
  actualizarProductos: async (solicitud, respuesta) => {
    try {
      const updateProducto = await modeloPrivado.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (updateProducto._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Producto actualizado",
          datos: updateProducto,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al actualizar el producto!!",
        datos: error,
      });
    }
  },

  //EliminarUsuariopost
  eliminarProducto: async (solicitud, respuesta) => {
    try {
      const productoEliminado = await modeloPrivado.findByIdAndDelete(
        solicitud.params.id
      );
      if (productoEliminado._id) {
        await fs.unlink("imagenes/" + productoEliminado.imagen);
        respuesta.json({
          resultado: "Bien",
          mensaje: "Producto eliminado",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al eliminar un producto!!",
        datos: error,
      });
    }
  },
};

export default ControladorPrivador;
