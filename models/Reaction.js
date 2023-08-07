const { Schema, model } = require('mongoose');

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      default: new ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
  }
  ,
  {
    toJSON: {
      getters: true,
    },
  }
);

//TODO: not a model, but will be used as reaction field's subdoc schema in thought model
//const Reaction = model('reaction', reactionSchema);

module.exports = User;