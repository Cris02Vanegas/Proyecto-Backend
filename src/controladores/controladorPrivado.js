import multer from "multer";
import fs from "fs-extra";
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
            mensaje: "ocurrió un error al subir imagen",
            datos: null,
          });
        } else {
          const nuevoProducto = new modeloPrivado({
            nombre: solicitud.body.nombre,
            tipoDocumento: solicitud.body.tipoDocumento,
            documento: solicitud.body.documento,
            fechaNacimiento: solicitud.body.fechaNacimiento,
            planViaje: solicitud.body.planViaje,
            fechaViaje: solicitud.body.fechaViaje,
            email: solicitud.body.email,
            numeroEmergencia: solicitud.body.numeroEmergencia,
            marca: solicitud.body.marca,
            modelo: solicitud.body.modelo,
            anio: solicitud.body.anio,
            cilindraje: solicitud.body.cilindraje,
            fechaRTM: solicitud.body.fechaRTM,
            fechaSoat: solicitud.body.fechaSoat,
            fechaTDR: solicitud.body.fechaTDR,
            imagen: solicitud.file.filename,
          });

          const productoCreado = await nuevoProducto.save();
          if (productoCreado._id) {
            respuesta.json({
              resultado: "Bien",
              mensaje: "Reserva creada",
              datos: productoCreado._id,
            });
          }
        }
      });
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al crear la reserva!!",
        datos: error,
      });
    }
  },

  //leer una reserva
  leerProducto: async (solicitud, respuesta) => {
    try {
      const productoEncontrado = await modeloPrivado.findById(
        solicitud.params.id
      );
      if (productoEncontrado._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Reserva leída",
          datos: productoEncontrado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al leer una reserva!!",
        datos: error,
      });
    }
  },

  //Leer Reservas
  leerProductos: async (solicitud, respuesta) => {
    try {
      const productosEncontrados = await modeloPrivado.find();
      respuesta.json({
        resultado: "Bien",
        mensaje: "Reservas leídas",
        datos: productosEncontrados,
      });
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al leer las reservas!!",
        datos: error,
      });
    }
  },

  //ActualizarReserva
  actualizarProductos: async (solicitud, respuesta) => {
    try {
      const updateProducto = await modeloPrivado.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (updateProducto._id) {
        respuesta.json({
          resultado: "Bien",
          mensaje: "Reserva Actualizada",
          datos: updateProducto,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al actualizar la reserva!!",
        datos: error,
      });
    }
  },

  //EliminarReserva
  eliminarProducto: async (solicitud, respuesta) => {
    try {
      const productoEliminado = await modeloPrivado.findByIdAndDelete(
        solicitud.params.id
      );
      if (productoEliminado._id) {
        await fs.unlink("imagenes/" + productoEliminado.imagen);
        respuesta.json({
          resultado: "Bien",
          mensaje: "Reserva eliminada",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al eliminar!!",
        datos: error,
      });
    }
  },
};

export default ControladorPrivador;
