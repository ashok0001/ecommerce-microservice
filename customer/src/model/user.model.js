const mongoose = require('mongoose');

// Create a User schema
const userSchema = new mongoose.Schema({
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
  },
  role: {
    type: String,
  },
  mobile: {
    type: String,
  },
  Adresses:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses',
        required: true,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
