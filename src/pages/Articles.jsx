import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Articles</h2>
      <ul>
        <li>
          <Link to="/articles/torque-ripple">
            Torque Ripple in SRM
          </Link>
        </li>
      </ul>
    </div>
  );
}
