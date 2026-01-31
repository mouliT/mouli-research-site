import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <div className="hero">
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

      <h2 className="section-title">Topics</h2>

      <div className="grid">
        <div className="card"><h3>Control Theory</h3></div>
        <div className="card"><h3>Power Electronics</h3></div>
        <div className="card"><h3>Electric Drives</h3></div>
        <div className="card"><h3>Mathematics</h3></div>
        <div className="card"><h3>Simulations</h3></div>
        <div className="card"><h3>Experiments</h3></div>
      </div>
    </div>
  );
}
