export default function Tutorials() {
  return (
    <div className="page fade-in">
      <h2 className="section-title">Tutorials</h2>

      <div className="tutorial-section">
        <h3>Basics</h3>
        <ul>
          <li>Introduction to SRM</li>
          <li>Flux and Torque</li>
          <li>Current Control</li>
        </ul>

        <h3>Intermediate</h3>
        <ul>
          <li>Ripple Reduction</li>
          <li>Modeling</li>
          <li>Controllers</li>
        </ul>

        <h3>Advanced</h3>
        <ul>
          <li>Floquet Theory</li>
          <li>Stability Analysis</li>
          <li>Experiments</li>
        </ul>
      </div>
    </div>
  );
}
