import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/property.controllers.js";

const router = Router();

router.route('/')
.get(getAll)
.post(create)

router.route('/:id')
.get(getOne)
.put(update)
.delete(remove)


export default router;
