const { Schema, model } = require ('mongoose')
const reactionModel = require('./Reaction')

const thoughtsSchema = new Schema(
    {
      thoughtText: {
        type: string,
        required: true,
        maxlength: 280
      },
        createdAt: {
        type: Date,
        default: Date.now,

      },
      username: {
        type: string,
        required: true,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

  thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thoughts = model('thoughts', thoughtsSchema);

  
  module.exports = Thoughts;
  
