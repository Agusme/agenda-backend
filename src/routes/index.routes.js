// src/routes/index.routes.js
import { Router } from 'express'
import propertyRoutes from './property.routes.js'

const router = Router()

router.use('/properties', propertyRoutes)

export default router
