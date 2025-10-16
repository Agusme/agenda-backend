import { Router } from "express";
import { createClientC, getAllClientC, getOneC, removeClientC, updateClientC } from "../controllers/client.controllers.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const router = Router();

router.route('/')
.get(getAllClientC)
.post(createClientC)

router.route('/:id')
.get( validateObjectId ,getOneC)
.put(validateObjectId, updateClientC)
.delete(validateObjectId, removeClientC)


export default router;