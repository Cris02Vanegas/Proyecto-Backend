import modeloContacto from "../modelos/modeloContacto.js";

const controladorContacto = {
  enviarContacto: async (req, res) => {
    try {
      const { nombre, mensaje, email } = req.body;
      const enviandoContacto = new modeloContacto({ nombre, mensaje, email });
      const contactoAlmacenado = await enviandoContacto.save();
      console.log(contactoAlmacenado);
      if (contactoAlmacenado.id) {
        res.json({
          resultado: "Bien",
          mensaje: "Contacto creado",
          datos: contactoAlmacenado,
        });
      } else {
      }
    } catch (error) {
      res.json({
        resultado: "Mal",
        mensaje: "Ocurrio un error al crear contacto Almacenado!!",
        datos: error,
      });
    }
  },
};

export default controladorContacto;
