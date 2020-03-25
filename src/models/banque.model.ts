import mongoose from "mongoose";

let banqueSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    telephone:{type:String, required:true},
    adresse:{type:String, required:true},
    ville:{type:String, required:true},
    longitude:{type:Number},
    latitude:{type:Number},
    localite:{type:String},
    nbrV:{type: Number, required:true, default:1},
    nbrA:{type: Number, required:true, default:0}
});
const Banque = mongoose.model("Banque",banqueSchema);
export default Banque;