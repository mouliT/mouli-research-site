import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <span>Mouli Research Lab</span>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/tutorials">Tutorials</Link>
    </nav>
  );
}
