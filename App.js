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
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>    Product name</strong>: ${product.name}
                <strong>Model</strong>: ${product.model}
                <strong>Product Price</strong>: ${product.price}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Sucefully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message))
        /* Showing in DOM */
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
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

            if(name === '' || model === '' || price === ''){
                return ui.showMessage('Complete Fields Please', 'danger');
            }

            ui.addProduct(product);
            ui.resetForm();
            ui.showMessage('Product Added Sucefully', 'success');

            event.preventDefault();//Nos permite cancelar el evento de refrescar la pagina
});

document.getElementById('product-list')
    .addEventListener('click', function(e) { 
        const ui =  new UI();
        ui.deleteProduct(e.target);
});