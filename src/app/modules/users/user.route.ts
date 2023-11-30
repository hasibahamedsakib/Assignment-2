import express from 'express'
const router = express.Router()
// importing all controllers
import {
  createUserController,
  deleteUserController,
  getSingleUserController,
  getUsersController,
  updateUserController,
} from './user.controller'

// post method
router.post('/', createUserController)

// Get all users
router.get('/', getUsersController)

// Get single student by userId
router.get('/:userId', getSingleUserController)

// Update single student by userId
router.put('/:userId', updateUserController)

// Delete single student by userId
router.delete('/:userId', deleteUserController)

export const userRoute = router
