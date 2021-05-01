import express from 'express'
import { router } from './route.js'
import { connectConfig } from './db/connect.js'

const app = express()

router(app)
connectConfig()
app.listen(8080)
