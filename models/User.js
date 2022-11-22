const mongoose = require('mongoose');

const userSchema = new Schema( 
    {
username: {
    type: 'string',
    unique: true,
    required: "Enter a username",
    trim: true,
},

email: {
    type: 'string',
    required: 'Enter a valid email',
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
},

thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }
],

friends: [
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
],


    
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,

    }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;