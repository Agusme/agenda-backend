import * as propertyService from '../services/property.services.js'

export const getAll = async(req, res)=>{
try {
    const properties= await propertyService.getAllProperty();
    res.status(200).json(properties)
} catch (error) {
    res.status(500).json({message:'Error al obtener propiedades', error})
}
}