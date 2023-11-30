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
  )
    .select('-password')
    .select('-orders')

  return allUsers
}

// find single user service
const findSingleUserIntoDB = async (userId: string) => {
  const user = await User.findOne({ userId })
    .select('-password')
    .select('-orders')
  if (user) {
    return user
  } else {
    throw new Error('Can Not Find User.')
  }
}

// update  user service
const updateUserIntoDB = async (userId: string, updateUserData: TUser) => {
  if (!(await User.isUserExists(Number(userId)))) {
    throw new Error('User not found!')
  } else {
    try {
      const updateUser = await User.findOneAndUpdate(
        { userId },
        updateUserData,
        {
          new: true,
        },
      )
      return updateUser
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

// delete user service
const deleteUserIntoDB = async (userId: string) => {
  if (!(await User.isUserExists(Number(userId)))) {
    throw new Error('User not found!')
  } else {
    const result = await User.deleteOne({ userId })
    return result
  }
}

export {
  createUserIntoDB,
  findUsersIntoDB,
  findSingleUserIntoDB,
  updateUserIntoDB,
  deleteUserIntoDB,
}
