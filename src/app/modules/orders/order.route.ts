import express from 'express'
import {
  getOrdersController,
  newOrderController,
  totalPriceOfOrderController,
} from './order.controller'
const router = express.Router()

// get order
router.get('/:userId/orders', getOrdersController)

// get total order price
router.get('/:userId/orders/total-price', totalPriceOfOrderController)

// create a new order
router.put('/:userId/orders', newOrderController)

export const orderRoute = router
