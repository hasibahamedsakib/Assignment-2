/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import {
  createUserIntoDB,
  deleteUserIntoDB,
  findSingleUserIntoDB,
  findUsersIntoDB,
  updateUserIntoDB,
} from './user.service'
import UserValidationSchema from './user.validation'

// Creating User
const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const zodParseData = UserValidationSchema.parse(userData)
    const result = await createUserIntoDB(zodParseData)

    //   making object for result
    const makeResultObj = result.toObject()

    const { password, orders, ...resultWithoutPass } = makeResultObj

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: resultWithoutPass,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error: {
        code: 400,
        description:
          error.message == 'User already exists' ? error.message : error,
      },
    })
  }
}

// Find All Users
const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await findUsersIntoDB()
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully !',
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

// Find Single User.
const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await findSingleUserIntoDB(userId)
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully !',
      data: result,
    })
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

// Update A User
const updateUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const updateUserData = req.body

    const result: any = await updateUserIntoDB(userId, updateUserData)

    //   making object for result
    const makeResultObj = result.toObject()

    const { password, orders, ...resultWithoutPass } = makeResultObj
    res.status(200).json({
      success: true,
      message: 'Users Updated successfully !',
      data: resultWithoutPass,
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

// Delete A User
const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId

    const result = await deleteUserIntoDB(userId)

    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'can not deleted user',
        error: {
          code: 404,
          description: 'deleted incomplete',
        },
      })
    }
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'can not deleted user',
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

export {
  createUserController,
  getUsersController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
}
