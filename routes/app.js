import Products from "./routes/Products";
import Cart from "./routes/Cart";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('api/products', Products);
app.use('api/cart', Cart);

app.listen(port, () => {
    console.log("Servidor activo");
})