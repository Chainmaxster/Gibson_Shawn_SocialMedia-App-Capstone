import mongoose from 'mongoose';

const { Schema, model, Types } = mongoose;

const postSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    picturePath: {
      type: String,
      default: '',
    },
    userPicturePath: {
      type: String,
      default: '',
    },
    likes: {
      type: Map,
      of: Boolean,
      default: new Map(),
    },
    comments: {
      type: [
        {
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          comment: { type: String, required: true },
          createdAt: { type: Date, default: Date.now },
        }
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = model('Post', postSchema);

export default Post;
