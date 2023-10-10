import express, {Router} from "express";

const Cart = express.Router();

const list = [];

Cart.length('/', (req, res) => {
    if (list <= 0){
        return res.status(400).send({status:"error", Payload:"hubo un error"})
    }
    res.json(list)
    res.send({Status:"success", Payload: list})
})

export default Cart