import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page fade-in">
      <div className="hero fade-in">
        <h1>Mouli Research Lab</h1>
        <p>
          Articles and tutorials on Power Electronics, Electric Drives, and
          Mathematical Modeling.
        </p>

        <div className="hero-buttons">
          <Link to="/articles">Explore Articles</Link>
          <Link to="/tutorials">View Tutorials</Link>
        </div>
      </div>

      <h2 className="section-title fade-in">Topics</h2>

      <div className="grid fade-in">
        <Link to="/topics/control-theory" className="card">
          <h3>Control Theory</h3>
        </Link>

        <Link to="/topics/power-electronics" className="card">
          <h3>Power Electronics</h3>
        </Link>

        <Link to="/topics/electric-drives" className="card">
          <h3>Electric Drives</h3>
        </Link>

        <Link to="/topics/mathematics" className="card">
          <h3>Mathematics</h3>
        </Link>

        <Link to="/topics/simulations" className="card">
          <h3>Simulations</h3>
        </Link>

        <Link to="/topics/experiments" className="card">
          <h3>Experiments</h3>
        </Link>
      </div>
    </div>
  );
}
