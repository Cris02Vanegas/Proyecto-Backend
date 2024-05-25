const ControladorUsuarios = {
    //Crear usuario
    crearUsuario: async (solicitud, respuesta) => {
        try {
            console.log("solicitud body", solicitud.body);
            if (solicitud.body.nombre === "") throw new Error("Error falta el nombre");
            if (solicitud.body.usuario === "") throw new Error("Error falta el usuario");
            if (solicitud.body.correo === "") throw new Error("Error falta el correo");
            if (solicitud.body.telefono === 0) throw new Error("Error falta el telefono");
            if (solicitud.body.contrasenia === "") throw new Error("Error falta la contrasenia");
            if (solicitud.body.confirmarContrasenia === "") throw new Error("Error falta la confirmarContrasenia");
            if (solicitud.body.genero === "") throw new Error("Error falta el genero");
            if (solicitud.body.pais === "") throw new Error("Error falta el pais");
            if (solicitud.body.ciudad === "") throw new Error("Error falta la ciudad");
            if (solicitud.body.fechaNacimiento === "") throw new Error("Error falta la fechaNacimiento");
            if (solicitud.body.profesion === "") throw new Error("Error falta la profesion");
            if (solicitud.body.preguntaSeguridad === "") throw new Error("Error falta la preguntaSeguridad");
            if (solicitud.body.respuestaSeguridad === "") throw new Error("Error falta la respuestaSeguridad");
            if (solicitud.body.cedula === 0) throw new Error("Error falta la cedula ");
            if (solicitud.body.fechaExpedicionCedula === "") throw new Error("Error falta la fechaExpedicionCedula");

            respuesta.json({
                mensaje: "POST Crear usuarios Works!!!"
            });
        } catch (error) {
            console.log(error);
            respuesta.json({
                error: true,
                mensaje: "POST Ocurrio un error al crear usuario"
            });
        }
    },

    //leer un usuario
    leerUsuario: async (solicitud, respuesta) => {
        try {
            console.log(solicitud.params.id);
            respuesta.json({
                mensaje: "GET Leer Usuario Works!!!"
            });
        } catch (error) {
            console.log(error);
            respuesta.json({
                error: true,
                mensaje: "POST Ocurrio un error al leer usuario"
            });
        }
    },

    //Leer Usuarios
    leerUsuarios: async (solicitud, respuesta) => {
        try {
            respuesta.json({
                mensaje: "GET Leer Usuarios Works!!!"
            });
        } catch (error) {
            console.log(error);
            respuesta.json({
                error: true,
                mensaje: "POST Ocurrio un error al leer TODOS los usuarios"
            });
        }

    },

    actualizarUsuarios: async (solicitud, respuesta) => {
        try {
            console.log("id: ", solicitud.params.id);
            console.log("solicitud body", solicitud.body);
            respuesta.json({
                mensaje: "PUT Actualizar Usuario Works!!!"
            });
        } catch (error) {
            console.log(error);
            respuesta.json({
                error: true,
                mensaje: "POST Ocurrio un error al actualizar usuario"
            });
        }
    },

    eliminarUsuarios: async (solicitud, respuesta) => {
        try {
            console.log("id: ", solicitud.params.id);
            respuesta.json({
                mensaje: "DELETE Eliminar Usuario Works!!!"
            });
        } catch (error) {
            console.log(error);
            respuesta.json({
                error: true,
                mensaje: "POST Ocurrio un error al eliminar usuario"
            });
        }
    }
}

export default ControladorUsuarios;

/* const usuario = {
    nombre: "Cristhian Vanegas",
    usuario: "cris02",
    correo: "crisvanegas02@gmail.com",
    telefono: "3125407212",
    contrasenia: "cris12345",
    confirmarContrasenia: "cris12345",
    genero: "M",
    pais: "Colombia",
    ciudad: "Bogota",
    fechaNacimiento: "02 de abril de 1993",
    profesion: "Ingeniero Electrónico",
    preguntaSeguridad: "fecha de expedicion de su cédula",
    respuestaSeguridad: "04/04/2011"
} */