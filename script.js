// PRODUCT DATA (Supplier base price)
const products = [
    {
        name: "T‑Shirt",
        basePrice: 400,
        image: "https://via.placeholder.com/150?text=T-Shirt"
    },
    {
        name: "Shoes",
        basePrice: 1600,
        image: "https://via.placeholder.com/150?text=Shoes"
    },
    {
        name: "Watch",
        basePrice: 2400,
        image: "https://via.placeholder.com/150?text=Watch"
    }
];

// Apply 24% markup
products.forEach(p => {
    p.price = Math.round(p.basePrice * 1.24);
});

// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart
function addToCart(index) {
    cart.push(products[index]);
    saveCart();
    alert("Added to cart");
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    loadCart();
}

// Load products
function loadProducts() {
    const container = document.getElementById("products");
    if (!container) return;

    products.forEach((p, i) => {
        container.innerHTML += `
            <div class="product">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${i})">Add to Cart</button>
            </div>
        `;
    });
}

// Load cart
function loadCart() {
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;
        list.innerHTML += `
            <li>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${i})">X</button>
            </li>
        `;
    });

    totalEl.innerText = total;
}

loadProducts();
loadCart();

