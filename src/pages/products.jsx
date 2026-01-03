import { useState } from "react";

export default function Products() {
  const [products] = useState([]);

  return (
    <div className="container">
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((p, i) => (
          <div key={i} className="product">
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}
