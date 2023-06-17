const Category = require("../model/category.modal");
const Product = require("../model/product.model");

class ProductService {
  async createProduct(productData) {
    const {
      title,
      description,
      price,
      discountedPrice,
      discountPersent,
      quantity,
      brand,
      color,
      size,
      imageUrl,
    } = productData;

    const { categoryName, parentCategory, lavel } = productData;

    const category = await Category.create({categoryName,parentCategory,lavel});

    const product=await Product.create({title,description,price,discountedPrice,discountPersent,quantity,brand,color,size,imageUrl,category:category._id})

    return product;

  }
}

module.exports=ProductService;