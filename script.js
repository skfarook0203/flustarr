/* ===============================
   ONE SINGLE PRODUCTS DATABASE
================================ */

const products = [
  {
    id: 1,
    name: "T‑Shirt",
    price: 499,
    discount: 24,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1999,
    discount: 0,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Watch",
    price: 2999,
    discount: 15,
    image: "https://via.placeholder.com/200"
  }
];

/* ===============================
   CART
================================ */

let cart = [];
let total = 0;

/* ===============================
   LOAD HOME DEALS (AUTO)
================================ */

function loadDeals() {
  const box = document.getElementById("dealProducts");
  if (!box) return;

  box.innerHTML = "";

  products
    .filter(p => p.discount > 0)
    .forEach(p => {
      const finalPrice = Math.round(
        p.price - (p.price * p.discount / 100)
      );

      box.innerHTML += `
        <div class="deal-card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p>
            <span class="old-price">₹${p.price}</span>
            <span class="new-price">₹${finalPrice}</span>
          </p>
          <span class="discount">${p.discount}% OFF</span>
          <button onclick="addToCart('${p.name}', ${finalPrice})">
            Add to Cart
          </button>
        </div>
      `;
    });
}

/* ===============================
   LOAD ALL PRODUCTS
================================ */

function loadAllProducts() {
  const box = document.getElementById("allProducts");
  box.innerHTML = "";

  products.forEach(p => {
    const finalPrice = p.discount > 0
      ? Math.round(p.price - (p.price * p.discount / 100))
      : p.price;

    box.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>Price: ₹${finalPrice}</p>
        <button onclick="addToCart('${p.name}', ${finalPrice})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

/* ===============================
   CART LOGIC
================================ */

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
  showMessage(`${name} added to cart`);
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach((item, i) => {
    list.innerHTML += `
      <li>${item.name} - ₹${item.price}
        <button onclick="removeItem(${i})">X</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = `Total: ₹${total}`;
}

function removeItem(i) {
  total -= cart[i].price;
  cart.splice(i, 1);
  renderCart();
}

function showMessage(msg) {
  const el = document.getElementById("cartMsg");
  el.innerText = msg;
  setTimeout(() => el.innerText = "", 2000);
}

/* ===============================
   INIT
================================ */

loadDeals();
loadAllProducts();
