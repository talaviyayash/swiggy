import Resturant from "../models/ResturantModel.js";



const CreateResturant = async(req,res)=>{
    const exists = await Resturant.findOne({
        email : req?.body?.email
    })
    if (exists){
        return res.send({
            "email":"exists",
        })
    }

    const create = await Resturant.create({
        name  : req?.body?.name,
        ownerName : req?.body?.ownerName,
        email  : req?.body?.email,
        password  : req?.body?.password,
        number  : req?.body?.number,
        resturantType : req?.body?.resturantType,
        timing:{
            openAt: req?.body?.openAt,
            closeAt: req?.body?.closeAt
        },

    })
    res.send({
        resturantinformation : create
    })
}



const LoginResturant = async(req,res)=>{
    const loginUser = await Resturant.findOne({
        email : req?.body?.email
    })
    if(!loginUser) {
        return res.send({
            "login" :"failed",
        })
    }
    const password = await loginUser.isPasswordCorrect(req?.body?.password)
    if(password){
    return   res.send({
        loginresturant 
    })
}

    return res.send({
        "login": "failed"
    })
        
}



export  { CreateResturant , LoginResturant}