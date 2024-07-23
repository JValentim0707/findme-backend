import express from "express";
import cors from "cors"
import db from '../../models/index.js'

// Routes
import authRoute from './auth.js'

const app = express()

// app.use( cors( { origin: 'http://localhost:8080' }))
app.use( cors())

app.use(express.json())

app.use("/auth", authRoute);

export default app