import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";
import Tutorials from "./pages/Tutorials";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </>
  );
}

export default App;
