const users = []

//creating user
const addUser = ({ id, username, room }) => {
    //clear data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and Room are required!'
        }
    }

    //existing users
    const existingUser = users.find((user)=>{
        return user.username === username && user.room === room
    })

    if(existingUser){
        return {
            error: 'Username is taken!'
        }
    }

    //store the user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user)=> user.id === id)
}

const getusersInRoom = (room) => {
    return users.filter((user)=> user.room === room )
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getusersInRoom
}