const fs = require('fs');
const { json } = require('stream/consumers');

class ProductManager {
    constructor() {
        this.path = path;
        this.products = [];
        this.contador = 1; 
    }
}

function addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
        return;
    }

    if (this.products.some(product => product.code === code)) {
        return;
    }

    const producto = {
        id: this.contador++, 
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
    this.products.push(producto);
    const datosProducto = JSON.stringify(this.products, null, 2)
    fs.writeFileSync(this.path, datosProducto)
}

function getProducts() {
    const datosProducto = fs.readFileSync(this.path, 'utf8')
    console.log(JSON.parse(datosProducto))
}

function getProductById(id) {
    const datosProducto = fs.readFileSync(this.path, 'utf8')
    this.products = JSON.parce(datosProducto)
    const producto = this.products.find(producto => producto.id === id);
    if (producto) {
        console.log(producto)
    } else {
        console.error('not found');
    }
}

function updateProduct(id, updatedProduct){
    const producto_actualizar= this.getProductById(id)
    if(!producto_actualizar) {
        console.log("No existe este producto")
        return
    }
    const datosProducto = JSON.stringify(this.products, null, 2)
    fs.writeFileSync(this.path, datosProducto) 
    Object.assign(producto_actualizar, updateProduct)
    console.log('Producto actualizado con éxito.');

}

function deleteProduct(id) {
    const eliminar_producto = this.getProductById(id)
    if(!eliminar_producto){
        console.log("No existe este producto")
        return
    }
    const datosProducto = JSON.stringify(this.products, null, 2)
    fs.writeFileSync(this.path, datosProducto)
    const eliminar_index = this.products.indexOf(eliminar_producto)
    this.products.splice(eliminar_index, 1)
    console.log('Producto eliminado con éxito.');
}