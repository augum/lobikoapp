"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let infirmierSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    postnom: { type: String, required: false },
    telephone: { type: String, required: true },
    mail: { type: String, required: true },
    adresse: { type: String, required: true },
    grade: { type: String, required: true },
    nbrV: { type: Number, required: true, default: 1 },
    nbrA: { type: Number, required: true, default: 0 }
});
const Infirmier = mongoose_1.default.model("Infirmier", infirmierSchema);
exports.default = Infirmier;
