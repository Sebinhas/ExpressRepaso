import  express  from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Estamos en el metodo GET")
})

router.post('/',(req,res)=>{
    res.send("Estamos en el metodo POST")
})

router.delete('/',(req,res)=>{
    res.send("Estamos en el metodo DELETE")
})

router.patch('/',(req,res)=>{
    res.send("Estamos en el metodo PATCH")
})

export default router;