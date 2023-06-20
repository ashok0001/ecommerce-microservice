// const User = require("../model/user.model");

const User = require("../model/user.model");

class UserService{

    async findUserById(userId){
        const user=await User.findOne({_id:userId})

        if(!user){
            throw new Error("User Not Exist With Id ",userId)
        }

        return user;
    }
}

module.exports=UserService;