const {Router}=require('express');
const CartService = require('../service/cart.service');


const router=Router();

const cartService=new CartService();

router.put('/:id/cart/add',async(req,res)=>{
    const userId=req.params.id;
    console.log(userId)
    const {productId,size,quantity}=req.body;
    try {
        const cart=await cartService.addToCart(userId,productId,size,quantity);
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/:userId/cart",async(req,res)=>{
    const userId=req.params.userId;
    try {
        const cart=await cartService.findCartByUserId(userId);
console.log("find cart ",cart)
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }

})
module.exports=router;