"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let likeSchema = new mongoose_1.default.Schema({
    like: { type: Number, required: true, default: 0 }
});
const Like = mongoose_1.default.model("Like", likeSchema);
exports.default = Like;
