import { NextFunction, Request, Response } from 'express'

const TestController = {
  // [GET] /users
  index(req: Request, res: Response, next: NextFunction) {
    res.send('Test API')
  }
}

export { TestController }
