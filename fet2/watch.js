<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Watch Shop</title>
    <style>
        /* CSS styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
        }
        .product {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .product img {
            width: 100%;
            border-radius: 5px;
        }
        .product h2 {
            margin-top: 0;
        }
        .product p {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Watch Shop</h1>
        <div id="products"></div>
    </div>

    <script>
        // JavaScript code to display products
        document.addEventListener("DOMContentLoaded", function () {
            const productsContainer = document.getElementById('products');

            // Sample product data
            const products = [
                { name: 'Classic Analog Watch', price: '$50', image: 'https://via.placeholder.com/300' },
                { name: 'Digital Sport Watch', price: '$70', image: 'https://via.placeholder.com/300' },
                { name: 'Luxury Gold Watch', price: '$200', image: 'https://via.placeholder.com/300' },
                { name: 'Smart Watch', price: '$120', image: 'https://via.placeholder.com/300' }
            ];

            // Function to create product elements
            function createProduct(product) {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const image = document.createElement('img');
                image.src = product.image;
                productDiv.appendChild(image);

                const name = document.createElement('h2');
                name.textContent = product.name;
                productDiv.appendChild(name);

                const price = document.createElement('p');
                price.textContent = `Price: ${product.price}`;
                productDiv.appendChild(price);

                productsContainer.appendChild(productDiv);
            }

            // Display products
            products.forEach(createProduct);
        });
    </script>
</body>
</html>
