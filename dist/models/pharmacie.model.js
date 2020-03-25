"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let pharmacieSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    telephone: { type: String, required: true },
    adresse: { type: String, required: true },
    ville: { type: String, required: true },
    longitude: { type: Number },
    latitude: { type: Number },
    localite: { type: String },
    nbrV: { type: Number, required: true, default: 1 },
    nbrA: { type: Number, required: true, default: 0 }
});
const Pharmacie = mongoose_1.default.model("Pharmacie", pharmacieSchema);
exports.default = Pharmacie;
