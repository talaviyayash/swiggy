import User from "../models/UserModel.js";


const CreateUser = async(req,res)=>{
    const exists = await User.findOne({
        email : req.body.email
    })
    if (exists){
        return res.send({
            "email":"change"
        })
    }

    const create = await User.create({
        name  : req.body.name,
        email  : req.body.email,
        password  : req.body.password,
        number  : req.body.number,
    })
    res.send({
        userinformation : create
    })
}
const LoginUser = async(req,res)=>{
    const loginUser = await User.findOne({
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

export { CreateUser , LoginUser}