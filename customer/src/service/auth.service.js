const mongoose = require('mongoose');
const { UserModel } = require('../model');
const User = require('../model/user.model');

class AuthService {

    async Signup(data){
        const {firstName,lastName,email,password}=data;

        const isEmailExist=await User.findOne({email});

        if (isEmailExist) {
            console.log("isEmailExist",isEmailExist)
            throw new Error('Email is already in use');
        }

        const user=await User.create({firstName,lastName,email,password,createdAt:Date.now()})

        // console.log("signup method",data)
        return user;
        
    }

    
   

}

module.exports = AuthService;