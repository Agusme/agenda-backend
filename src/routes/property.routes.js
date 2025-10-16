import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/property.controllers.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";
import { propertyValidationRules, validateProperty } from "../middlewares/validateProperty.js";

const router = Router();

router.route('/')
.get(getAll)
.post(propertyValidationRules, validateProperty, create);

router.route('/:id')
.get(validateObjectId, getOne)
.put(validateObjectId, propertyValidationRules, validateProperty, update)
.delete(validateObjectId, remove)


export default router;
