import { Schema, model } from "mongoose";

const esquemaPrivado = new Schema(
  {
    nombre: { type: String, required: true },
    tipoDocumento: { type: String, required: true },
    documento: {
      type: Number,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    planViaje: { type: String, required: true },
    fechaViaje: { type: Date, required: true },
    email: { type: String, required: true },
    numeroEmergencia: { type: Number, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anio: { type: Number, required: true },
    cilindraje: { type: Number, required: true },
    fechaRTM: { type: Date, required: true },
    fechaSoat: { type: Date, required: true },
    fechaTDR: { type: Date, required: true },
    imagen: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, // Sirve para mostrarnos en BD la fecha que se modifico el objeto
  }
);

export default model("Privado", esquemaPrivado);
