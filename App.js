class Product {
    constructor(name, price, shop) {
        this.name = name;
        this.price = price;
        this.shop = shop;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = '
        ';
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
            const price = document.getElementById('price').value;
            const shop = document.getElementById('shop').value;
            
            const product = new Product(name, price, shop);



            event.preventDefault();
});