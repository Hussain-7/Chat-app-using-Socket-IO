const mongoose = require('mongoose');
const moment=require('moment')

const ConversationSchema = new mongoose.Schema({
    roomName:String,
    members: [{  
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    }],
    messages:[
    {
        author:String,
        body:String,
        posted_At:{
            type: Date,
            default: moment().format('h:mm a'),
        }
    }
    ]
});
module.exports = mongoose.model("Conversation", ConversationSchema);