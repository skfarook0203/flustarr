const products = [
  { name: "T-Shirt", price: 499 },
  { name: "Shoes", price: 1999 },
  { name: "Watch", price: 2999 }
];

let cart = [];

function showProducts() {
  let output = "<h3>Products</h3><ul>";
  products.forEach((product, index) => {
    output += `<li>${product.name} - ₹${product.price} <button onclick="addToCart(${index})">Add to Cart</button></li>`;
  });
  output += "</ul>";
  document.getElementById("productList").innerHTML = output;
}

function addToCart(index) {
  cart.push(products[index]);
  showCart();
}

function showCart() {
  let output = "<ul>";
  let total = 0;
  cart.forEach(item => {
    output += `<li>${item.name} - ₹${item.price}</li>`;
    total += item.price;
  });
  output += `</ul><p>Total: ₹${total}</p>`;
  document.getElementById("cart").innerHTML = output;
}
