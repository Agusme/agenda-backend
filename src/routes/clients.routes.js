import { Router } from "express";
import { createClientC, getAllClientC, getOneC, removeClientC, updateClientC } from "../controllers/client.controllers.js";

const router = Router();

router.route('/')
.get(getAllClientC)
.post(createClientC)

router.route('/:id')
.get(getOneC)
.put(updateClientC)
.delete(removeClientC)


export default router;