import { z } from 'zod'
import { User, userSchema } from './user.model'

// Zod validation schema for full name
const FullNameSchema = z.object({
  firstName: z
    .string({ required_error: 'First name Filed must be Required' })
    .min(1, { message: 'First name must be at least 1 character long' })
    .max(20, { message: 'First name must be at most 20 characters long' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last name Filed must be Required' })
    .min(1, { message: 'Last name must be at least 1 character long' })
    .max(20, { message: 'Last name must be at most 20 characters long' })
    .trim(),
})

// Zod validation schema for address
const AddressSchema = z.object({
  street: z
    .string({ required_error: 'Street Filed must be Required' })
    .min(1, { message: 'Street must be at least 1 character long' })
    .max(20, { message: 'Street must be at most 20 characters long' }),
  city: z
    .string({ required_error: 'City Filed must be Required' })
    .min(1, { message: 'City must be at least 1 character long' })
    .max(20, { message: 'City must be at most 20 characters long' }),
  country: z
    .string({ required_error: 'Country Filed must be Required' })
    .min(1, { message: 'Country must be at least 1 character long' })
    .max(20, { message: 'Country must be at most 20 characters long' }),
})

// Zod validation schema for orders
const OrdersSchema = z.object({
  productName: z
    .string({ required_error: 'Product name must be Required' })
    .min(1, { message: 'Product name must be at least 1 character long' })
    .max(20, { message: 'Product name must be at most 20 characters long' }),
  price: z.number({ required_error: 'Product Price must be Required' }),
  quantity: z.number({ required_error: 'Product Quantity must be Required' }),
})

// Zod validation schema for the user
const UserValidationSchema = z.object({
  userId: z
    .number({ required_error: 'User ID Must Be Needed' })
    .min(5, { message: 'User ID must be at least 10 characters' }),
  // .max(10, { message: 'User ID must be at least 10 characters' }),
  username: z
    .string({ required_error: 'Username Filed must be Required' })
    .min(1, { message: 'Username must be at least 1 character long' })
    .max(20, { message: 'Username must be at most 20 characters long' })
    .trim(),
  password: z
    .string({ required_error: 'Password Filed must be Required' })
    .min(1, { message: 'Password must be at least 1 character long' })
    .max(20, { message: 'Password must be at most 20 characters long' }),
  fullName: FullNameSchema,
  age: z.number({ required_error: 'Age Filed must be Required' }),
  email: z
    .string({ required_error: 'Email Filed must be Required' })
    .min(1, { message: 'Email must be at least 1 character long' })
    .max(25, { message: 'Email must be at most 20 characters long' }),
  isActive: z.boolean({ required_error: 'Filed must be Required' }),
  hobbies: z.array(
    z
      .string({ required_error: 'Filed must be Required' })
      .min(1, { message: 'Hobby must be at least 1 character long' })
      .max(20, { message: 'Hobby must be at most 20 characters long' }),
  ),
  address: AddressSchema,
  orders: z.array(OrdersSchema).optional(),
})
// creating a static method by userId
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId })
  return existingUser
}
export default UserValidationSchema
