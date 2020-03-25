import mongoose from "mongoose";

let hopitalSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    telephone:{type:String, required:true},
    mail:{type:String, required:false},
    ville:{type:String, required:true},
    adresse:{type:String, required:true},
    service:{type: String, required:true},
    longitude:{type:Number},
    latitude:{type:Number},
    localite:{type:String},
    nbrV:{type: Number, required:true, default:1},
    nbrA:{type: Number, required:true, default:0}

});

const Hopital = mongoose.model("Hopital",hopitalSchema);
export default Hopital;