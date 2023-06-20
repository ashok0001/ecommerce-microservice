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
      topLavelCategory,
      secondLavelCategory,
      thirdLavelCategory
    } = productData;

    // const { categoryName, parentCategory, lavel } = productData;

    // const category = await Category.create({categoryName,parentCategory,lavel});

    // const product=await Product.create({title,description,price,discountedPrice,discountPersent,quantity,brand,color,size,imageUrl,category:category._id})

    // return product;

    try {
      // Find top-level category
      let topLevel = await Category.findOne({ name: topLavelCategory });
  
      // Create top-level category if it doesn't exist
      if (!topLevel) {
        topLevel = new Category({
          name: topLavelCategory,
          level: 1,
        });
        topLevel = await topLevel.save();
      }
  
      // Find second-level category
      let secondLevel = await Category.findOne({
        name: secondLavelCategory,
        parentCategory: topLevel._id,
      });
  
      // Create second-level category if it doesn't exist
      if (!secondLevel) {
        secondLevel = new Category({
          name: secondLavelCategory,
          parentCategory: topLevel._id,
          level: 2,
        });
        secondLevel = await secondLevel.save();
      }
  
      // Find third-level category
      let thirdLevel = await Category.findOne({
        name: thirdLavelCategory,
        parentCategory: secondLevel._id,
      });
  
      // Create third-level category if it doesn't exist
      if (!thirdLevel) {
        thirdLevel = new Category({
          name: thirdLavelCategory,
          parentCategory: secondLevel._id,
          level: 3,
        });
        thirdLevel = await thirdLevel.save();
      }
  
      // Create the product
      const product = new Product({
        title: title,
        color: color,
        description: description,
        discountedPrice: discountedPrice,
        discountPersent: discountPersent,
        imageUrl: imageUrl,
        brand: brand,
        price: price,
        sizes: size,
        quantity: quantity,
        category: thirdLevel,
        createdAt: new Date(),
      });
  
      const savedProduct = await product.save();
  
      console.log("Product saved:", savedProduct);
  
      return savedProduct;

    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Failed to create product");
    }

  }

  async findProductById(id){
    const data = await Product.findById(id)
    return data
  }
}

module.exports=ProductService;