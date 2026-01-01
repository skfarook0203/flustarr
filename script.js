const products = [
    { name: "T-Shirt", price: 499 },
    { name: "Shoes", price: 1999 },
    { name: "Watch", price: 2999 }
];

let cart = [];

function showProducts() {
    let output = `<div class="box"><h3>Products</h3>`;

    products.forEach((product, index) => {
        output += `
            <p>
                ${product.name} - ₹${product.price}
                <br>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </p>
        `;
    });

    output += `</div>`;
    document.getElementById("productList").innerHTML = output;
}

function addToCart(index) {
    cart.push(products[index]);
    showCart();
}

function showCart() {
    if (cart.length === 0) {
        document.getElementById("cart").innerHTML = "Cart is empty";
        return;
    }

    let total = 0;
    let output = "<ul>";

    cart.forEach(item => {
        output += `<li>${item.name} - ₹${item.price}</li>`;
        total += item.price;
    });

    output += `</ul><strong>Total: ₹${total}</strong>`;
    document.getElementById("cart").innerHTML = output;
}

