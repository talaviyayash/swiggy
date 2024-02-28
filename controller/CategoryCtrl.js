import Category from "../models/CategoryModel.js";



const CreateCategory = async(req,res)=>{

    const create = await Category.create({
        name  : req?.body?.name,
        description  : req?.body?.description,
        Resturant : req?.body?.Resturant_id
    })
    res.send({
        Categoryinformation : create
    })
}




export  { CreateCategory }