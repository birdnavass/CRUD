import express from "express"
import cors from 'cors'
import db from "./db.js"
import blogRoutes from './routes.js'

const app = express()

app.use( cors() )
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion a db ok')
} catch (error) {
    console.log(`El error es: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Hola mundO')
})

app.listen(8000, () => {
    console.log('Server UP running in 8000')
})