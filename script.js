// PRODUCTS DATA
const products = [
    { name: "T-Shirt", price: 499 },
    { name: "Shoes", price: 1999 },
    { name: "Watch", price: 2999 }
];

// CART (load from localStorage or empty)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SAVE CART TO LOCAL STORAGE
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// SHOW / HIDE PRODUCTS
function toggleProducts() {
    const productSection = document.getElementById("products");
    productSection.style.display =
        productSection.style.display === "none" ? "block" : "none";
}

// ADD TO CART
function addToCart(index) {
    cart.push(products[index]);
    saveCart();
    updateCart();
}

// REMOVE FROM CART
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

// UPDATE CART UI
function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeFromCart(${index})" class="remove-btn">X</button>
        `;
        cartList.appendChild(li);
    });

    totalElement.innerText = total;
}

// INITIAL LOAD
updateCart();
