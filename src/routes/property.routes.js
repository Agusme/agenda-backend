import { Router } from "express";
import { getAll } from "../controllers/property.controllers.js";

const router = Router()

router.get("/",getAll
)

router.post('/',(req, res)=>{
    res.json({message:'Creando una nueva propiedad', data:req.body})
})

router.get('/:id', (req,res)=> {
    const{id}=req.params
    res.json({message:`Obteniendo la prop con id : ${id}`})
})
router.put('/:id', (req,res)=>{
    const {id}=req.params
    res.json({message:`Editando prop con id:${id}`})
})
router.delete('/:id', (req, res)=>{
    const {id}= req.params
    res.json({message:`Eliminando la prop con id : ${id}`})
})

router.get('/search',(req,res)=>{
    const {q}=req.query
    res.json({message:`Buscando prop con el termino: ${q}`})
})


export default router
