// Temporary frontend data (will come from backend later)
const products = []; // EMPTY store initially

const newProductsDiv = document.getElementById("new-products");
const offerProductsDiv = document.getElementById("offer-products");

function showEmptyMessage(container) {
  container.innerHTML = `<p class="empty">No products available</p>`;
}

function renderProducts(list, container) {
  if (list.length === 0) {
    showEmptyMessage(container);
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
    </div>
  `).join("");
}

// Filters (for future backend use)
const newArrivals = products.filter(p => p.isNew);
const offers = products.filter(p => p.isOffer);

renderProducts(newArrivals, newProductsDiv);
renderProducts(offers, offerProductsDiv);
