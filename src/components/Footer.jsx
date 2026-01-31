export default function Footer() {
  return (
    <footer className="footer">
      {/* Site identity */}
      <p>© {new Date().getFullYear()} Mouli Research Lab</p>

      {/* Short description */}
      <p className="footer-sub">
        Articles and tutorials on Power Electronics, Electric Drives, and Mathematical Modeling.
      </p>
    </footer>
  );
}
