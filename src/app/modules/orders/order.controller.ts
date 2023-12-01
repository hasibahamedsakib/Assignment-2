/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import {
  getOrdersIntoDB,
  getTotalOrderPriceIntoDB,
  newOrderIntoDB,
} from './order.service'

// create new order
const newOrderController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const orderData = req.body
    await newOrderIntoDB(userId, orderData)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    })
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Can Not Update',
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

// get orders by specific user
const getOrdersController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const orders = await getOrdersIntoDB(userId)

    if (orders) {
      res.status(200).json({
        success: true,
        message: 'Order fetched successfully!',
        data: orders,
      })
    }
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Can Not Find User',
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

// calculate all the price => totalPrice = price * quantity
const totalPriceOfOrderController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await getTotalOrderPriceIntoDB(userId)
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice: result,
      },
    })
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'something went wrong!',
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

export { newOrderController, getOrdersController, totalPriceOfOrderController }
