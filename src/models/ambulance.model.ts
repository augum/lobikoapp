import mongoose from "mongoose";

let ambulanceSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    telephone:{type:String, required:true},
    adresse:{type:String, required:true},
    ville:{type:String, required:true},
    longitude:{type:Number},
    latitude:{type:Number},
    localite:{type:String}
});
const Ambulance = mongoose.model("Ambulance",ambulanceSchema);
export default Ambulance;