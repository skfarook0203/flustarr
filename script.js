const products = [
  { name: "T-Shirt", price: 499 },
  { name: "Shoes", price: 1999 },
  { name: "Watch", price: 2999 }
];

function showProducts() {
  let output = "<h3>Products</h3><ul>";

  products.forEach((product) => {
    output += `<li>${product.name} - ₹${product.price}</li>`;
  });

  output += "</ul>";

  document.getElementById("productList").innerHTML = output;
}
