import express, {Router} from "express";

const Products = express.Router();

let productos = [];

Products.get('/', (req,res) =>{
    if (productos <= 0){
        return res.status(400).send({Status: "error", Payload: "hubo un error"})
    }
    res.json(productos)
    res.send({Status:"success", Payload: productos})
})

Products.get('/:pid', (req,res)=> {
    const id = parseInt(req.params.id)
    const product = this.products.find(product => product.id === id);
    if (product){
        return res.status(400).json ({error: "no se encontro"})
    }
    res.json({Status: "Succes", Payload: product})
})

export default Products;