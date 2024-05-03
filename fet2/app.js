// Product class representing a single product
var Product = /** @class */ (function () {
    function Product(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
    Product.prototype.render = function () {
        var productDiv = document.createElement('div');
        productDiv.classList.add('product');
        var image = document.createElement('img');
        image.src = this.image;
        image.alt = this.name;
        image.classList.add('product-image');
        productDiv.appendChild(image);
        var name = document.createElement('h2');
        name.textContent = this.name;
        productDiv.appendChild(name);
        var price = document.createElement('p');
        price.textContent = "Price: ".concat(this.price);
        productDiv.appendChild(price);
        return productDiv;
    };
    return Product;
}());
var WatchShop = /** @class */ (function () {
    function WatchShop(products, containerId) {
        this.products = products;
        this.productsContainer = document.getElementById(containerId);
    }
    WatchShop.prototype.displayProducts = function () {
        var _this = this;
        if (this.productsContainer) {
            this.products.forEach(function (product) {
                var productElement = product.render();
                _this.productsContainer.appendChild(productElement);
            });
        }
        else {
            console.error('Products container not found');
        }
    };
    return WatchShop;
}());
var productsData = [
    { name: 'Classic Analog Watch', price: '$50', image: 'https://via.placeholder.com/300' },
    { name: 'Digital Sport Watch', price: '$70', image: 'https://via.placeholder.com/300' },
    { name: 'Luxury Gold Watch', price: '$200', image: 'https://via.placeholder.com/300' },
    { name: 'Smart Watch', price: '$120', image: 'https://via.placeholder.com/300' }
];
var products = productsData.map(function (product) { return new Product(product.name, product.price, product.image); });
var watchShop = new WatchShop(products, 'products');
watchShop.displayProducts();
