const {Router}=require('express');
const AuthService = require('../service/auth.service');


const router=Router();

const authService=new AuthService()

router.post('/signup',async(req,res)=>{
    try {
        const user= await authService.Signup(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
})

module.exports=router;