import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre del cliente es obligatorio"],
    maxlength: [100, "El nombre del cliente no puede tener más de 100 caracteres"],
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Por favor, introduce un email válido"],
  },
  phone: {
    type: String,
    required: [true, "El teléfono es obligatorio"],
    maxlength: [20, "El número de teléfono no puede tener más de 20 caracteres"],
  },
  typeTransaction: {
    type: String,
    enum: ["Compra", "Alquiler"],
    required: [true, "El tipo de transacción es obligatorio"],
  },
  notes: {
    type: String,
    maxlength: [300, "Las notas no pueden tener más de 300 caracteres"],
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
