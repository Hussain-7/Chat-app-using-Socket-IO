
var User = require('../models/users');

const users=[];
//join user to chat
function userJoin(id,username,room){
    const user={id,username,room};

    console.log("In User Join Function!!!"+username);
    //Here I can Store Users in User Data base


    //here i can read user and display them in an array
    users.push(user);

    return user;
}

function getCurrentUser(id)
{
    return users.find(user => user.id === id);
}


//User Leaves Chat
function userLeave(id){
    const index=users.findIndex(user=>user.id===id);

    if(index !== -1)
    {
        return users.splice(index,1)[0];
    }
}

//get room users
function getRoomUsers(room){
    return users.filter(user =>user.room===room);
}

module.exports={
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
}