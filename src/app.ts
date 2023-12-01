import express, { Request, Response } from 'express'
import cors from 'cors'
import { userRoute } from './app/modules/users/user.route'
import { orderRoute } from './app/modules/orders/order.route'

const app = express()

// using middleware
app.use(express.json())
app.use(cors())

// using userRoute
app.use('/api/users', userRoute)

// using orderRoute
app.use('/api/users', orderRoute)

// home route
app.get('/', (req: Request, res: Response) => {
  res.send('<h1><i>welcome to server</i></h1>')
})

// handling client error
app.use((req: Request, res: Response, next) => {
  res.status(400).json({
    success: false,
    message: 'Requested url not found',
    error: {
      code: 400,
      description: 'Route not valid,check again',
    },
  })
  next()
})

// handling server error
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((error: any, req: Request, res: Response, next: any) => {
  res.status(500).json({
    success: false,
    message: 'Something went wrong',
    error: {
      code: 500,
      description: error.message,
    },
  })
})

export default app
