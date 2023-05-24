import { TestController } from '@/controllers/TestController'
import express from 'express'

// Api router
const apiRouter = express.Router()
apiRouter.use('/test', TestController.index)

export default {
  apiRouter
}
