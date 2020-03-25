import mongoose from "mongoose";

let infoSchema = new mongoose.Schema({
    titre:{type:String, required:true},
    description:{type:String, required:true}
});

const Info = mongoose.model("Info",infoSchema);
export default Info;