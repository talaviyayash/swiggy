import DeliveryBoy from "../models/DeliveryBoyModel.js";



const CreateDeliveryBoy = async(req,res)=>{
    const exists = await DeliveryBoy.findOne({
        email : req.body.email
    })
    if (exists){
        return res.send({
            "email":"exists",
        })
    }

    const create = await DeliveryBoy.create({
        name  : req.body.name,
        email  : req.body.email,
        password  : req.body.password,
        number  : req.body.number,
    })
    res.send({
        userinformation : create
    })
}



const LoginDeliveryBoy = async(req,res)=>{
    const loginUser = await DeliveryBoy.findOne({
        email : req.body.email
    })
    if(!loginUser) {
        return res.send({
            "login" :"failed",
        })
    }
    const password = await loginUser.isPasswordCorrect(req.body.password)
    if(password){
    return   res.send({
        loginUser 
    })
}

    return res.send({
        "login": "failed"
    })
        
}



export  { CreateDeliveryBoy , LoginDeliveryBoy}