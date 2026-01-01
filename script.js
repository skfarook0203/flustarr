let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
  showMessage(`${name} added to cart`);
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeItem(${index})">X</button>`;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = `Total: ₹${total}`;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function showMessage(msg) {
  const el = document.getElementById("cartMsg");
  el.innerText = msg;
  setTimeout(() => el.innerText = "", 2000);
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
