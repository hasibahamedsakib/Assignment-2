import TUser from './user.interface'
import { User } from './user.model'

const createUserIntoDB = async (user: TUser) => {
  const createUser = await User.create(user)

  return createUser
}

const findUsersIntoDB = async () => {
  const allUsers = await User.find(
    {},
    {
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
      _id: 0,
    },
  ).select('-password')
  return allUsers
}
const findSingleUserIntoDB = async (userId: string) => {
  const allUsers = await User.findOne(
    { userId },
    { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 },
  ).select('-password')
  return allUsers
}

export { createUserIntoDB, findUsersIntoDB, findSingleUserIntoDB }
