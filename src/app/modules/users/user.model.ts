import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import TUser, {
  TAddress,
  TFullName,
  TOrders,
  UserModel,
} from './user.interface'
import config from '../../config'

const fullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, `{VALUE} is required`],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, `{VALUE} is required`],
  },
})
// disable the _id filed
fullNameSchema.set('_id', false)

const addressSchema = new Schema<TAddress>({
  street: {
    type: String,
    required: [true, `{VALUE} is required`],
  },
  city: {
    type: String,
    required: [true, `{VALUE} is required`],
  },
  country: {
    type: String,
    required: [true, `{VALUE} is required`],
  },
})
// disable the _id filed
addressSchema.set('_id', false)

// orders schema
const ordersSchema = new Schema<TOrders>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: [true, `{VALUE} is required`],
  },
})
// disable the _id filed
ordersSchema.set('_id', false)

const userSchema = new Schema<TUser, UserModel>({
  userId: {
    type: Number,
    // unique: [true, 'User ID is must be Unique'],
    trim: true,
    minlength: 10,
    required: [true, `{VALUE} is required`],
  },
  username: {
    type: String,
    trim: true,
    required: [true, `{VALUE} is required`],
  },
  password: {
    type: String,
    required: [true, `{VALUE} is required`],
  },
  fullName: {
    type: fullNameSchema,
    required: [true, `FullName is required`],
  },
  age: {
    type: Number,
    required: [true, `{VALUE} is required`],
  },
  email: {
    type: String,
    // unique: [true, 'Email must be unique'],
    required: [true, `{VALUE} is required`],
  },
  isActive: {
    type: Boolean,
    required: [true, `{VALUE} is required`],
    default: true,
  },
  hobbies: {
    type: [String],
    required: [true, `{VALUE} is required`],
  },
  address: {
    type: addressSchema,
    required: [true, `{VALUE} is required`],
  },
  orders: {
    type: [ordersSchema],
  },
})

// disable the version key.
userSchema.set('versionKey', false)

// hashing password
userSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  user.password = await bcrypt.hash(user.password, Number(config.salt_rounds))
})

// creating a static method by userId
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId })
  return existingUser
}
// creating a static method by email
userSchema.statics.isUserExistsEmail = async function (email: string) {
  const existingEmailUser = await User.findOne({ email })
  return existingEmailUser
}

// create and export User model.
export const User = mongoose.model<TUser, UserModel>('User', userSchema)
