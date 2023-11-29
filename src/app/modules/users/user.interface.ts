import { Model } from 'mongoose'

export type TFullName = {
  firstName: string
  lastName: string
}

export type TAddress = {
  street: string
  city: string
  country: string
}

export type TOrders = [
  {
    productName: string
    price: number
    quantity: number
  },
]

export type TUser = {
  //   userId: number | { type: number; unique: boolean[]; trim: boolean }
  userId: number
  username: string
  password: string
  fullName: TFullName
  age: number
  // email: string | { type: string; unique: boolean[] }
  email: string
  isActive: boolean
  hobbies: string[]
  address: TAddress
  orders: TOrders
}

// create and export userExisting model
export interface UserModel extends Model<TUser> {
  isUserExists(userId: number): Promise<TUser | null>
}
// create and export userExisting model
export interface UserModel extends Model<TUser> {
  isUserExistsEmail(userId: string): Promise<TUser | null>
}

export default TUser
