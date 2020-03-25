"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let medecinSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    postnom: { type: String, required: false },
    telephone: { type: String, required: true },
    mail: { type: String, required: true },
    adresse: { type: String, required: true },
    hopital: { type: String, required: true },
    specialite: { type: String, required: true },
    cnom: { type: String, required: true },
    visible: { type: Boolean, required: true, default: false },
    nbrV: { type: Number, required: true, default: 1 },
    nbrA: { type: Number, required: true, default: 0 }
});
const Medecin = mongoose_1.default.model("Medecin", medecinSchema);
exports.default = Medecin;
