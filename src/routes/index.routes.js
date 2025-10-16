import { Router } from 'express'
import propertyRoutes from './property.routes.js'
import clientRoutes from './clients.routes.js'
const router = Router()

router.use('/properties', propertyRoutes)
router.use('/clients', clientRoutes )
export default router;
