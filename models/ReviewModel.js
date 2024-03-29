import mongoose , {Schema} from "mongoose";


const ReviewSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    userName: {
        type:String
    },
    Restaurant: {
        type: mongoose.Types.ObjectId,
        ref:'Restaurant'
    },
    review: {
        type:String
    },
    star: {
        type:String
    },
    deliveryBoyId: {
        type: mongoose.Types.ObjectId,
        ref:"DeliverBoy"
    },
    itsFor: {
        type:String
    }
},{
    timestamps : true,
})


export default mongoose.model('Review',ReviewSchema)