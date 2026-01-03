import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#5a2d2d" }}>
      <Link to="/" style={{ color: "#ffd1dc", marginRight: "15px" }}>Home</Link>
      <Link to="/products" style={{ color: "#ffd1dc", marginRight: "15px" }}>Products</Link>
      <Link to="/cart" style={{ color: "#ffd1dc" }}>Cart</Link>
    </nav>
  );
}
