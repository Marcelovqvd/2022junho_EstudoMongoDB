import express from 'express'
import dotenv from 'dotenv'
import { router } from "./routes/index.js";
import { errorHandler } from './middleware/errorMiddleware.js'
import { connectDB } from './database/db.js'

dotenv.config()
connectDB()

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(router);
app.use(errorHandler)


app.listen(port, () => console.log(`Running at ${port}`))
