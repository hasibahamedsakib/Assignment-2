import mongoose, { Schema } from 'mongoose'
import TUser, { TAddress, TFullName } from './user.interface'

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

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    unique: [true, 'User ID is must be Unique'],
    trim: true,
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
    unique: [true, 'Email must be unique'],
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
})

// disable the version key.
userSchema.set('versionKey', false)

// create and export User model.
export const User = mongoose.model('User', userSchema)
