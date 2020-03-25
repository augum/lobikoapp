import mongoose from "mongoose";

let centreSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    telephone:{type:String, required:true},
    ville:{type:String, required:true},
    adresse:{type:String, required:true},
    longitude:{type:Number},
    latitude:{type:Number},
    localite:{type:String}

});

const Centre = mongoose.model("Centre",centreSchema);
export default Centre;