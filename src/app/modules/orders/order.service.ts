/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrders } from '../users/user.interface'
import { User } from '../users/user.model'

const newOrderIntoDB = async (userId: string, orderData: TOrders) => {
  if (!(await User.isUserExists(Number(userId)))) {
    throw new Error('User not found!')
  } else {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { userId },
        { $addToSet: { orders: orderData } },
        { new: true },
      )

      return updatedUser
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

const getOrdersIntoDB = async (userId: string) => {
  if (!(await User.isUserExists(Number(userId)))) {
    throw new Error('User not found!')
  } else {
    const orderData = await User.findOne({ userId }, { _id: 0, orders: 1 })
    return orderData
  }
}

//
const getTotalOrderPriceIntoDB = async (userId: string) => {
  if (!(await User.isUserExists(Number(userId)))) {
    throw new Error('User not found!')
  } else {
    const user: any = await User.findOne({ userId })
    const totalPrice = user.orders.reduce(
      (sum: any, order: any) => sum + order.quantity * order.price,
      0,
    )
    return totalPrice
  }
}

export { newOrderIntoDB, getOrdersIntoDB, getTotalOrderPriceIntoDB }
