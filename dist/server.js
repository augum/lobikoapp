"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const hopital_model_1 = __importDefault(require("./models/hopital.model"));
const centre_model_1 = __importDefault(require("./models/centre.model"));
const info_model_1 = __importDefault(require("./models/info.model"));
const medecin_model_1 = __importDefault(require("./models/medecin.model"));
const pharmacie_model_1 = __importDefault(require("./models/pharmacie.model"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const banque_model_1 = __importDefault(require("./models/banque.model"));
const ambulance_model_1 = __importDefault(require("./models/ambulance.model"));
const like_model_1 = __importDefault(require("./models/like.model"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.use(body_parser_1.default.json());
        app.use(cors_1.default());
        const uri = "mongodb+srv://maku:fiston1984@cluster0-dcmzv.mongodb.net/test?retryWrites=true&w=majority";
        //const uri ="mongodb://localhost:27017/LOBIKO";
        mongoose_1.default.connect(uri, (err) => {
            if (err)
                console.log(err);
            else
                console.log("connecté mongodb makuma");
        });
        app.get("/", (req, resp) => {
            resp.send("lobiko ezo tambola malamu");
        });
        app.get("/hopital", (req, resp) => {
            let kw = req.query.kw || "";
            hopital_model_1.default.find({ ville: { $regex: ".*(?i)" + kw + ".*" } }, (err, hopitals) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(hopitals);
            });
        });
        app.get("/hopitalp", (req, resp) => {
            let kw = req.query.kw;
            hopital_model_1.default.find({ localite: { $regex: kw } }, (err, hopitals) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(hopitals);
            });
        });
        //ambulance dans la ville
        app.get("/ambulance", (req, resp) => {
            let kw = req.query.kw || "";
            ambulance_model_1.default.find({ ville: { $regex: ".*(?i)" + kw + ".*" } }, (err, ambulances) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(ambulances);
            });
        });
        //ambulance le plus proche
        app.get("/ambulancep", (req, resp) => {
            let kw = req.query.kw;
            ambulance_model_1.default.find({ localite: { $regex: kw } }, (err, ambulances) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(ambulances);
            });
        });
        // banques de sang dans une ville
        app.get("/banque", (req, resp) => {
            let kw = req.query.kw || "";
            banque_model_1.default.find({ ville: { $regex: ".*(?i)" + kw + ".*" } }, (err, banques) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(banques);
            });
        });
        //banque de sang le plus proche de mois
        app.get("/banquep", (req, resp) => {
            let kw = req.query.kw;
            banque_model_1.default.find({ localite: { $regex: kw } }, (err, banques) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(banques);
            });
        });
        app.get("/medecins", (req, resp) => {
            let kw = req.query.kw || "";
            medecin_model_1.default.find({ specialite: { $regex: ".*(?i)" + kw + ".*" } }, (err, medecins) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(medecins);
            });
        });
        //like
        app.get("/likes", (req, resp) => {
            like_model_1.default.find((err, likes) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(likes);
            });
        });
        app.put("/likes/:id", (req, resp) => {
            like_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err, like) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send("un like");
            });
        });
        app.post("/likes", (req, resp) => {
            let like = new like_model_1.default(req.body);
            like.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(like);
            });
        });
        //pharmacie proche
        app.get("/pharmacies", (req, resp) => {
            let kw = req.query.kw;
            pharmacie_model_1.default.find({ localite: { $regex: kw } }, (err, pharmacies) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(pharmacies);
            });
        });
        app.get("/pharmacieV", (req, resp) => {
            let kw = req.query.kw || "";
            pharmacie_model_1.default.find({ ville: { $regex: ".*(?i)" + kw + ".*" } }, (err, pharmacies) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(pharmacies);
            });
        });
        app.post("/hopital", (req, resp) => {
            let hopital = new hopital_model_1.default(req.body);
            hopital.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(hopital);
            });
        });
        app.post("/centre", (req, resp) => {
            let centre = new centre_model_1.default(req.body);
            centre.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(centre);
            });
        });
        app.get("/centrep", (req, resp) => {
            let kw = req.query.kw;
            centre_model_1.default.find({ localite: { $regex: kw } }, (err, centres) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(centres);
            });
        });
        app.get("/centre", (req, resp) => {
            let kw = req.query.kw || "";
            centre_model_1.default.find({ ville: { $regex: ".*(?i)" + kw + ".*" } }, (err, centres) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(centres);
            });
        });
        app.post("/info", (req, resp) => {
            let info = new info_model_1.default(req.body);
            info.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(info);
            });
        });
        app.get("/info", (req, resp) => {
            //let kw:string=req.query.kw;
            info_model_1.default.find((err, infos) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(infos);
            }).sort({ "_id": -1 });
        });
        app.post("/ambulance", (req, resp) => {
            let ambulance = new ambulance_model_1.default(req.body);
            ambulance.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(ambulance);
            });
        });
        app.post("/banque", (req, resp) => {
            let banque = new banque_model_1.default(req.body);
            banque.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(banque);
            });
        });
        app.post("/pharmacies", (req, resp) => {
            let pharmacie = new pharmacie_model_1.default(req.body);
            pharmacie.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(pharmacie);
            });
        });
        app.post("/medecins", (req, resp) => {
            let medecin = new medecin_model_1.default(req.body);
            medecin.save(err => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send(medecin);
            });
        });
        app.put("/medecins/:id", (req, resp) => {
            medecin_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err, medecin) => {
                if (err)
                    resp.status(500).send(err);
                else
                    resp.send("Medecin desormain visible");
            });
        });
        app.listen(this.port, () => {
            console.log("server etamboli");
        });
    }
}
exports.default = Server;
