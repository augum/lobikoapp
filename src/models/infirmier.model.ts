import mongoose from "mongoose";

let infirmierSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    postnom:{type:String, required:false},
    telephone:{type:String, required:true},
    mail:{type:String, required:true},
    adresse:{type:String, required:true},
    grade:{type:String, required:true},
    nbrV:{type: Number, required:true, default:1},
    nbrA:{type: Number, required:true, default:0}

});

const Infirmier = mongoose.model("Infirmier",infirmierSchema);
export default Infirmier;