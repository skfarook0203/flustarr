const products = [
  { name: "T-Shirt", price: 499 },
  { name: "Shoes", price: 1999 },
  { name: "Watch", price: 2999 }
];

function showProducts() {
  let output = "";
  products.forEach((product) => {
    output += product.name + " - ₹" + product.price + "\n";
  });
  alert(output);
}
