import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({ 
  ownerName: {
    type: String,
    required: [true, "El nombre del propietario es obligatorio"],
    maxlength: [100, "El nombre del propietario no puede tener más de 100 caracteres"],
  },
  ownerPhone: {
    type: String,
    maxlength: [20, "El teléfono no puede tener más de 20 caracteres"],
  },
  typeProperty: {
    required: [true, "El tipo de propiedad es obligatorio"],
    type: String,
    enum: ["Casa", "Departamento", "Terreno", "Local"],
  },
  typeTransaction: {
    required: [true, "El tipo de transacción es obligatorio"],
    type: String,
    enum: ["Venta", "Alquiler"],
  },
  bathroom: {
    type: Number,
  },
  bedroom: {
    type: Number,
  },
  location: {
    required: [true, "La ubicación es obligatoria"],
    type: String,
    maxlength: [100, "La ubicación no puede tener más de 100 caracteres"],
  },
  description: {
    required: [true, "La descripión es obligatoria"],
    type: String,
  },
  map: {
    type: String,
  },
  images: {
    type: [String],
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
