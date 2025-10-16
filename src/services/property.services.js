import Property from "../models/property.model.js";

export const getAllProperty = async()=>{
    return await Property.find()
};

export const createProperty = async(data)=>{
    const newProperty= new Property(data)
    return await newProperty.save()
}

export const getPropertyById = async(id)=>{
    return await Property.findById(id)
}

export const updateProperty = async (id, data)=>{
    return await Property.findByIdAndUpdate(id, data,{new:true})
};

export const deleteProperty = async(id)=>{
    return await Property.findByIdAndDelete(id);
};

