import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
  typeProperty: {
    required: true,
    type: String,
    enum: ["Casa", "Departamento", "Terreno", "Local"],
  },
  typeTransaction: {
    required: true,
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
    require: true,
    type: String,
    maxlength: 100,
  },
  description: {
    required: true,
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
