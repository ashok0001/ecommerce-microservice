
const Cart = require("../model/cart.modal");
const CartItem = require("../model/cartItem.model");
const UserService = require("./user.service");
const axios = require("axios");


const userService = new UserService()

class CartService{

    async createCart(userId){

        userService.findUserById(userId);

        const cart=await Cart.create({user:user._id})

        return cart;
    }

    async findCartByUserId(userId){

        userService.findUserById(userId);

        const cart=await Cart.findOne({user:userId})

        return cart;
    }

    async addToCart(userId,productId,size,quantity){

        const cart=await this.findCartByUserId(userId)
        const user=await userService.findUserById(userId);
    
        const product=await axios.get(`http://localhost:5001/${productId}`)
        

        const cartItemData={
            cart:cart._id,
            product:product.data._id,
            size,
            quantity,
            price:quantity*product.data.price,
            discountedPrice:quantity*product.data.discountedPrice,
            userId:user._id
        }
        console.log('cart item data',product.data,cartItemData)
        const cartItem=await CartItem.create(cartItemData)

        cart.cartItems.push(cartItem);
        return cart.save()
    }
}

module.exports=CartService;