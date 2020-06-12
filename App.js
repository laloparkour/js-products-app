class Product {
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = "
        <div class="card text-center mb-4">
        <div class="card-body">
            <strong>    Product name</strong>: ${product.name}
            <str    ong>Model</strong>: ${product.model}
                <strong>Product Price</strong>: ${product.price}
            </div>
        </div>
        ";
        productList.appendChild(element);

    }

    deleteProduct() {

    }

    showMessage() {

    }
}

/* DOM Events */
document.getElementById('product-form')
    .addEventListener('submit', 
        function(event) {
            const name = document.getElementById('name').value;
            const model = document.getElementById('model').value;
            const price = document.getElementById('price').value;

            const product = new Product(name, model, price);
            
            const ui = new UI();
            ui.addProduct(product);

            event.preventDefault();//Nos permite cancelar el evento de refrescar la pagina


});

39.:04