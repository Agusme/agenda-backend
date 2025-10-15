import { Router } from "express";

const router = Router()

router.get("/", (req, res)=>{
    res.json({message: 'Obteniendo todas las propiedades'})
})

export default router
