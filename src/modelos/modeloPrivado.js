import { Schema, model } from "mongoose";

const esquemaPrivado = new Schema(
  {
    nombre: { type: String, required: true },
    documento: {
      type: Number,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
      default: () => {
        return Date.prototype.toPrimitive();
      },
    },
    planViaje: { type: String, required: true },
    fechaViaje: { type: Date, required: true },
    email: { type: String, required: true },
    numeroEmergencia: { type: Number, required: true },
    imagen: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, // Sirve para mostrarnos en BD la fecha que se modifico el objeto
  }
);

export default model("Privado", esquemaPrivado);
