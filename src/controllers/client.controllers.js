import * as clientServices from '../services/client.services.js'

export const getAllClientC = async(req, res)=>{
    try {
        const clients = await clientServices.getAllClients();
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({message:'Error al obtener clientes'})
    }
}

export const createClientC = async(req, res)=>{
    try {
        const newClient = await clientServices.createClient(req.body);
        res.status(201).json(newClient)
    } catch (error) {
        res.status(400).json({message:'Error al crear cliente', error})
    }
};

export const getOneC = async(req, res)=>{
try {
    const {id}= req.params;
    const client = await clientServices.updateClient(id)
    if(!client){
        return res.status(404).json({message:'Cliente no encontrado'});
    }
    res.status(200).json(client);
} catch (error) {
    res.status(500).json({message:'Error al obtener cliente', error});
}
}

export const updateClientC = async(req, res)=>{
    try {
        const {id}= req.params;
        const updated= await clientServices.updateClient(id, req.body)
        if(!updated){
            return res.status(404).json({message:'Cliente no encontrado'})
        }
        res.status(200).json({message:'Cliente actualizado', updated})
    } catch (error) {
        res.status(400).json({message:'Error al actualizar Cliente', error})
    }
}

export const removeClientC = async(req, res)=>{
try {
    const {id}= req.params
    const deleted = await clientServices.deleteClient(id)
    if(!deleted){
        return res.status(404).json({message:'Cliente no encontrado'})
    }
    res.status(200).json({message:'Cliente eliminado con éxito'})
} catch (error) {
    res.status(500).json({message:'Error al eliminar cliente', error})
}
}