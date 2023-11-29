import TUser from './user.interface'
import { User } from './user.model'

const createUserIntoDB = async (user: TUser) => {
  const createUser = await User.create(user)

  return createUser
}

const findUsersIntoDB = async () => {
  const allUsers = await User.find().select('-password')
  return allUsers
}
const findSingleUserIntoDB = async (userId: string) => {
  const allUsers = await User.findOne({ userId }).select('-password')
  return allUsers
}

export { createUserIntoDB, findUsersIntoDB, findSingleUserIntoDB }
