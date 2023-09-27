import express from 'espress'
import ProductManager from '/ProductManager'


const app = express
const puerto = 8080;

const productos = ProductManager.getProducts();

app.use(express.json());


app.get('/products', (req, res) => {
    try {
        const products = ProductManager.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'no se pudieron obtener los productos' });
    }
});

app.get('/', (req, res)=>{
    let limit = req.query.limit
    if(!limit || limit < 0 ){
        return res.send({productos})
    }
    productos.forEach(e => {
        if(e <= limit){
            res.send(e)
        }
    });
})

app.get('/products/:id', (req, res)=>{
    let id = req.params.id
    let producto = ProductManager.getProductById(id)
    if(!producto){
        return res.send({productos})
    }
    res.send({producto})

})

app.listen(puerto, () => {
    console.log(`servidor funciona`);
});