"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let infoSchema = new mongoose_1.default.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true }
});
const Info = mongoose_1.default.model("Info", infoSchema);
exports.default = Info;
