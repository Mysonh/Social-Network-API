const { Schema, Types } = require ('mongoose')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: string,
            required: true,
            max length: 280,
        },
        username: {
            type: string,
            required: true,
        }
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
          },
          id: false,
    }
);

module.exports = reactionSchema;