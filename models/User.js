const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //TODO: must match a valid email address,
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  }
  // ,
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);
//TODO: create virtual called friendcount that retrieves user's friends array field

const User = model('user', userSchema);

module.exports = User;