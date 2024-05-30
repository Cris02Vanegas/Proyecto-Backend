import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato) => {
    console.log("Bien, Conectado a la BD");
}).catch((error) => {
    console.log("Error, No hay conexion a la BD");
})