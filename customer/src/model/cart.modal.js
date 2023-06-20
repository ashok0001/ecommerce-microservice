const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  cartItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cartItems',
  }],
  totalPrice: {
    type: Number,
    required: true,
    default:0
  },
  totalItem: {
    type: Number,
    required: true,
    default:0
  },
  totalDiscountedPrice: {
    type: Number,
    default:0
  },
  discounte: {
    type: Number,
    default:0
  },
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;
