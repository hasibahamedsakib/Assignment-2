import express from 'express'
const router = express.Router()
// importing all controllers
import {
  createUserController,
  getSingleUserController,
  getUsersController,
} from './user.controller'

// post method
router.post('/', createUserController)

// get all users
router.get('/', getUsersController)

// get single student by userId
router.get('/:userId', getSingleUserController)

export const userRoute = router
