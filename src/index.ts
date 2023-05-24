import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './routes'

dotenv.config()
const APP_PORT = process.env.APP_PORT || 3000

const app = express()
app.use(express.json())

app.use('/api', router.apiRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(APP_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${APP_PORT}`)
})
