import  express  from "express";
import repasoRutas from "./routers/repasoRutas.js";

const app = express()
const PORT = 3000;

app.use('/rutaRepaso',repasoRutas)

app.get('/',(req,res)=>{
    res.send("Bienvenido al repaso de los metodos")
})

app.listen(PORT, ()=>{
    console.log("El servidor esta en funcionamiento")
})

