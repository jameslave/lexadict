import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: String,

  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  photoUrl: {
    type: String,
    required: true,
    trim: true,
  },

  record: {
    wins: {
      type: Number,
      default: 0,
    },
    losses: {
      type: Number,
      default: 0,
    },
  },

  timePlayed: {
    type: Number,
    default: 0,
  },
});

export default model('User', userSchema);
