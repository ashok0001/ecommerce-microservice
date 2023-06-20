const {Router}=require("express");
const ProductService = require("../service/product.service");
const router=Router();

const productService=new ProductService();

router.post("/create", async(req,res)=>{
    try {
        const product = await productService.createProduct(req.body);

        return res.status(200).send(product);

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const product = await productService.findProductById(req.params.id)
        console.log("find by id ",product)
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
})

module.exports=router