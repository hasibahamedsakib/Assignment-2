import TUser from './user.interface'
import { User } from './user.model'

// create user service
const createUserIntoDB = async (user: TUser) => {
  if (
    (await User.isUserExists(user.userId)) ||
    (await User.isUserExistsEmail(user.email))
  ) {
    throw new Error('User already exists')
  }
  const createUser = await User.create(user)
  return createUser
}

// find all users service
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

// find single user service
const findSingleUserIntoDB = async (userId: string) => {
  const user = await User.findOne({ userId }).select('-password')
  if (user) {
    return user
  } else {
    throw new Error('Can Not Find User.')
  }
}

// update  user service
const updateUserIntoDB = async (userId: string, updateUserData: TUser) => {
  const user = await User.findOne({ userId })

  if (!user) {
    throw new Error('Can Not Find User.')
  }
  user.set(updateUserData)
  const updateUser = await user.save()
  return updateUser
}

export {
  createUserIntoDB,
  findUsersIntoDB,
  findSingleUserIntoDB,
  updateUserIntoDB,
}
