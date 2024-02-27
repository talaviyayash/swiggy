import Product from "../models/ProductModel.js";



const CreateProduct = async(req,res)=>{

    const create = await Product.create({
        name  : req?.body?.name,
        price : req?.body?.price,
        resturnat  : req?.body?.resturnat_id,
        category  : req?.body?.category_id,
        description  : req?.body?.description
    })
    res.send({
        Productinformation : create
    })
}




export  { CreateProduct }