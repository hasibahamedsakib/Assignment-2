import express from 'express'
const router = express.Router()
// importing all controllers
import {
  createUserController,
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

export const userRoute = router
