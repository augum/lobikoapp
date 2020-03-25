import express,{Request,Response} from "express";
import mongoose from "mongoose";
import Hopital from "./models/hopital.model";
import Centre from "./models/centre.model";
import Info from "./models/info.model";
import Medecin from "./models/medecin.model";
import Pharmacie from "./models/pharmacie.model";
import bodyParser from "body-parser";
import cors from "cors";
import Banque from "./models/banque.model";
import Ambulance from "./models/ambulance.model";
import Like from "./models/like.model";

export default class Server{
 constructor(private port:number){}

 public start():void{
     const app = express();
     app.use(bodyParser.json());
     app.use(cors());
     const uri ="mongodb+srv://maku:fiston1984@cluster0-dcmzv.mongodb.net/test?retryWrites=true&w=majority";
     //const uri ="mongodb://localhost:27017/LOBIKO";
     mongoose.connect(uri,(err)=>{
         if(err) console.log(err);
         else console.log("connecté mongodb makuma");
     });
     app.get("/",(req:Request,resp:Response)=>{
         resp.send("lobiko ezo tambola malamu");

     });
     app.get("/hopital",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw || "";
        Hopital.find({ville:{$regex:".*(?i)"+kw+".*"}},
            (err, hopitals)=>{
            if(err) resp.status(500).send(err);
            else resp.send(hopitals);
        });
     });
     app.get("/hopitalp",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw;
        Hopital.find({localite:{$regex:kw}},
            (err, hopitals)=>{
            if(err) resp.status(500).send(err);
            else resp.send(hopitals);
        });
     });
     //ambulance dans la ville
     app.get("/ambulance",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw || "";
        Ambulance.find({ville:{$regex:".*(?i)"+kw+".*"}},
            (err, ambulances)=>{
            if(err) resp.status(500).send(err);
            else resp.send(ambulances);
        });
     });
     //ambulance le plus proche
      app.get("/ambulancep",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw;
        Ambulance.find({localite:{$regex:kw}},
            (err, ambulances)=>{
            if(err) resp.status(500).send(err);
            else resp.send(ambulances);
        });
     });
     // banques de sang dans une ville
     app.get("/banque",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw || "";
        Banque.find({ville:{$regex:".*(?i)"+kw+".*"}},
            (err, banques)=>{
            if(err) resp.status(500).send(err);
            else resp.send(banques);
        });
     });
     //banque de sang le plus proche de mois
     app.get("/banquep",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw;
        Banque.find({localite:{$regex:kw}},
            (err, banques)=>{
            if(err) resp.status(500).send(err);
            else resp.send(banques);
        });
     });
     app.get("/medecins",(req:Request,resp:Response)=>{
         let kw:string=req.query.kw || "";
        Medecin.find({specialite:{$regex:".*(?i)"+kw+".*"}},
            (err, medecins)=>{
            if(err) resp.status(500).send(err);
            else resp.send(medecins);
        });
    });
    //like
    app.get("/likes",(req:Request,resp:Response)=>{
           Like.find((err,likes)=>{
           if(err) resp.status(500).send(err)
           else resp.send(likes);
       });
   });
   app.put("/likes/:id",(req:Request,resp:Response)=>{
    Like.findByIdAndUpdate(req.params.id,req.body,(err,like)=>{
        if(err) resp.status(500).send(err);
        else resp.send("un like");
    });  
  });
app.post("/likes",(req:Request,resp:Response)=>{
    let like = new Like(req.body);
    like.save(err=>{
        if(err) resp.status(500).send(err);
        else resp.send(like);
    });
});
    //pharmacie proche
    app.get("/pharmacies",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw;
        Pharmacie.find({localite:{$regex:kw}},
            (err, pharmacies)=>{
            if(err) resp.status(500).send(err);
            else resp.send(pharmacies);
        });
     });
     app.get("/pharmacieV",(req:Request,resp:Response)=>{
        let kw:string=req.query.kw || "";
        Pharmacie.find({ville:{$regex:".*(?i)"+kw+".*"}},
            (err, pharmacies)=>{
            if(err) resp.status(500).send(err);
            else resp.send(pharmacies);
        });
     });
     app.post("/hopital",(req:Request,resp:Response)=>{
         let hopital = new Hopital(req.body);
         hopital.save(err=>{
             if(err) resp.status(500).send(err);
             else resp.send(hopital);
         });
    });

    app.post("/centre",(req:Request,resp:Response)=>{
        let centre = new Centre(req.body);
        centre.save(err=>{
            if(err) resp.status(500).send(err);
            else resp.send(centre);
        });
   });
   app.get("/centrep",(req:Request,resp:Response)=>{
    let kw:string=req.query.kw;
    Centre.find({localite:{$regex:kw}},
        (err, centres)=>{
        if(err) resp.status(500).send(err);
        else resp.send(centres);
    });
 });
 app.get("/centre",(req:Request,resp:Response)=>{
    let kw:string=req.query.kw || "";
    Centre.find({ville:{$regex:".*(?i)"+kw+".*"}},
        (err, centres)=>{
        if(err) resp.status(500).send(err);
        else resp.send(centres);
    });
 });

 app.post("/info",(req:Request,resp:Response)=>{
    let info = new Info(req.body);
    info.save(err=>{
        if(err) resp.status(500).send(err);
        else resp.send(info);
    });
});
app.get("/info",(req:Request,resp:Response)=>{
    //let kw:string=req.query.kw;
    Info.find((err, infos)=>{
        if(err) resp.status(500).send(err);
        else resp.send(infos);
    }).sort({"_id": -1})
 });
    app.post("/ambulance",(req:Request,resp:Response)=>{
        let ambulance = new Ambulance(req.body);
        ambulance.save(err=>{
            if(err) resp.status(500).send(err);
            else resp.send(ambulance);
        });
   });
   app.post("/banque",(req:Request,resp:Response)=>{
    let banque = new Banque(req.body);
    banque.save(err=>{
        if(err) resp.status(500).send(err);
        else resp.send(banque);
    });
});
    app.post("/pharmacies",(req:Request,resp:Response)=>{
        let pharmacie = new Pharmacie(req.body);
        pharmacie.save(err=>{
            if(err) resp.status(500).send(err);
            else resp.send(pharmacie);
        });
   });
    app.post("/medecins",(req:Request,resp:Response)=>{
        let medecin = new Medecin(req.body);
        medecin.save(err=>{
            if(err) resp.status(500).send(err);
            else resp.send(medecin);
        });
   });
   app.put("/medecins/:id",(req:Request,resp:Response)=>{
    Medecin.findByIdAndUpdate(req.params.id,req.body,(err,medecin)=>{
        if(err) resp.status(500).send(err);
        else resp.send("Medecin desormain visible");
    });  
});
     app.listen(this.port,()=>{
         console.log("server etamboli");
     })
 }
} 