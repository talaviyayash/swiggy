import Product from "../models/ProductModel.js";
import Category from "../models/CategoryModel.js";
import Restaurant from "../models/RestaurantModel.js";


//Add Product and Also id push in to the Category And Restaurant models
const CreateProduct = async(req,res)=>{

    const create = await Product.create({
        name  : req?.body?.name,
        price : req?.body?.price,
        category  : req?.body?.category_id,
        resturnat  : req?.body?.resturnat_id,
        description  : req?.body?.description
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
          resturnat : req?.body?.resturnat_id
        }
      }])
      res.send({
        AllProduct : AllFeatch
    })
}

export  { CreateProduct , CatagoryProuct ,ResturentProuct}