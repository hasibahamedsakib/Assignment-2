import { Request, Response } from 'express'
import {
  createUserIntoDB,
  findSingleUserIntoDB,
  findUsersIntoDB,
} from './user.service'
const createUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const result = await createUserIntoDB(user)

    //   making object for result
    const withoutResult = result.toObject()
    delete withoutResult.password

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: withoutResult,
    })
  } catch (error: any) {
    res.status(400).json({
      status: false,
      message: 'something went wrong',
      error: error.message,
    })
  }
}

const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await findUsersIntoDB()
    res.status(201).json({
      success: true,
      message: 'Users fetched successfully! !',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      status: false,
      message: 'something went wrong',
      error: error.message,
    })
  }
}
const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await findSingleUserIntoDB(userId)
    res.status(201).json({
      success: true,
      message: 'Users fetched successfully! !',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      status: false,
      message: 'something went wrong',
      error: error.message,
    })
  }
}

export { createUserController, getUsersController, getSingleUserController }
