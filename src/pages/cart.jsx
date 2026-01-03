export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, i) => (
          <div key={i}>
            <p>{item.name} - ₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
