class ProductManager {

    constructor() {
        this.products = [];
    };

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("todos los campos son obligatorios");
            return;
        };
        
        const productoCodigo = this.products.find((producto) => producto.code === product.code);

        if(productoCodigo) {
            console.log("Ya existe un Producto con este código");
            return;
        };
        
        if(this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1; 
        };

        this.products.push(product);
    };

    getProducts = () => {
        return this.products;
    };

    getProductById = (id) => {

        const busqueda = this.products.find((producto) => producto.id === id);
        if(!busqueda) {
            console.log("Not Found");
        } else {
            console.log(this.getProducts());
        };
    };
};

// Se creara una instancia de clase'ProductManager'
const productos = new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(productos.getProducts());

// Se llamará al método “addProduct” con los campos:
productos.addProduct("producto prueba", "este es un producto de pureba", 200, "sin imagen", "abc1234", 25);

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productos.getProducts());

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productos.addProduct("producto prueba", "este es un producto de pureba", 200, "sin imagen", "abc1234", 25);

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

// producto encontardo
productos.getProductById(1);

// producto no encontrado
productos.getProductById(3);