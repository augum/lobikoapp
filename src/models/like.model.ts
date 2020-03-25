import mongoose from "mongoose";

let likeSchema = new mongoose.Schema({
    
    like:{type: Number, required:true, default:0}
});
const Like = mongoose.model("Like",likeSchema);
export default Like;