import Product from "../models/ProductModel.js";
import  uploadCloudinary from '../utils/cloudinary.js'
//Add Product and Also id push in to the Category And Restaurant models
const CreateProduct = async(req,res)=>{
    const fileimg = req?.files?.product
    let  img = ""
    if(fileimg){
      img =await uploadCloudinary(`./temp/img/${fileimg[0]?.filename}`)
    }
    
    const create = await Product.create({
        name  : req?.body?.name,
        price : req?.body?.price,
        category  : req?.body?.category_id,
        restaurant  : req?.body?.restaurant_id,
        description  : req?.body?.description,
        img
    })
    res.send({
        Productinformation : create
    })
}


// Featch all products within catagory
const CatagoryProuct = async(req,res)=>{
    // console.log(req.query)
    const AllFeatch = await Product.find({
        category : req?.query?.category_id
    })
    res.send({
        AllProduct : AllFeatch
    })
}
const ResturentProuct = async(req,res)=>{
    const AllFeatch = await Product.aggregate([{
        $match: {
          restaurant : req?.body?.restaurant_id
        }
      }])
      res.send({
        AllProduct : AllFeatch
    })
}
const updateProduct = async (req, res) => {
    const fileimg = req?.files?.product
    if(!fileimg){
        const find =  await Product.findById(req?.body?.product_id)
        const img = find?.img
    }
    else{
        const img =await uploadCloudinary(`./temp/img/${fileimg[0]?.filename}`)
    }
const updatedproduct = await Product.findByIdAndUpdate(req?.body?.product_id , {

        name  : req?.body?.name,
        price : req?.body?.price,
        category  : req?.body?.category_id,
        restaurant  : req?.body?.restaurant_id,
        description  : req?.body?.description,
        img
})

return res.send({
    "success": true,
})

}

export  { CreateProduct , CatagoryProuct ,ResturentProuct,updateProduct}