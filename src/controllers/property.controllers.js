import * as propertyService from '../services/property.services.js'

export const getAll = async(req, res)=>{
try {
    const properties= await propertyService.getAllProperty();
    res.status(200).json(properties)
} catch (error) {
    res.status(500).json({message:'Error al obtener propiedades', error})
}
}

export const create = async(req, res)=>{
    try {
        const newProperty = await propertyService.createProperty(req.body);
        res.status(201).json(newProperty)
    } catch (error) {
        res.status(400).json({message:'Error al crear propiedad', error})
    }
}

export const getOne = async(req, res)=>{
    try {
        const property = await propertyService.getPropertyById(req.params.id);
        if(!property)
            return res.status(404).json({message:'Propiedad no encontrada'});
        res.status(200).json({message:property})
    } catch (error) {
        res.status(500).json({message:'Error al obtener propiedad', error})
    }
};

export const update = async(req, res)=>{
    try {
        const updated= await propertyService.updateProperty(req.para.id, req.body)
        res.status(200).json(updated)
    } catch (error) {
        res.status(400).json({message:'Error al actualizar propiedad', error})
    }
};

export const remove =async(req, res)=>{
    try {
        await propertyService.deleteProperty(req.params.id);
        res.status(200).json({message:'Propiedad eliminada'})
    } catch (error) {
        res.status(500).json({message:'Error al eliminar propiedad', error})
    }
};

