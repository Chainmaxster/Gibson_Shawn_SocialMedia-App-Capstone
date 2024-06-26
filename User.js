import mongoose from 'mongoose';

const { Schema, model, Types } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Exclude password by default
  },
  picturePath: {
    type: String,
    default: '',
  },
  friends: [{
    type: Types.ObjectId,
    ref: 'User',
  }],
  location: {
    type: String,
    default: '',
  },
  occupation: {
    type: String,
    default: '',
  },
  viewedProfile: {
    type: Number,
    default: 0,
  },
  impressions: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
  versionKey: false, // Removes __v field
});

const User = model('User', userSchema);

export default User;
