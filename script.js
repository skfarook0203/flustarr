const products = [
    { name: "T‑Shirt", price: 499 },
    { name: "Shoes", price: 1999 },
    { name: "Watch", price: 2999 }
];

let cart = [];

function showProducts() {
    let output = "";

    products.forEach((product, index) => {
        output += `
            <div class="product">
                <strong>${product.name}</strong><br>
                Price: ₹${product.price}<br>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });

    document.getElementById("productList").innerHTML =
        "<h3>Products</h3>" + output;
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    if (cart.length === 0) {
        document.getElementById("cart").innerHTML = "Cart is empty";
        return;
    }

    let total = 0;
    let output = "<ul>";

    cart.forEach((item, index) => {
        total += item.price;
        output += `
            <li>
                ${item.name} - ₹${item.price}
                <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
            </li>
        `;
    });

    output += `</ul><strong>Total: ₹${total}</strong>`;
    document.getElementById("cart").innerHTML = output;
}
