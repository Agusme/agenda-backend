import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.routes.js'
import './database.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()
app.set('port', process.env.PORT|| 4000)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', router)
app.listen(app.get('port'), ()=>{
    console.log('Servidor andando en el puerto', app.get('port'))
})
