import { Link } from "react-router-dom";

// Load all markdown files from src/content/articles
// Load markdown files as raw text using Vite's glob import
const articles = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function Articles() {
  const articleList = Object.entries(articles).map(([path, content]) => {
    const slug = path.split("/").pop().replace(".md", "");

    const titleMatch = content.match(/title:\s*(.*)/);
    const categoryMatch = content.match(/category:\s*(.*)/);

    return {
      slug,
      title: titleMatch ? titleMatch[1] : slug,
      category: categoryMatch ? categoryMatch[1] : "General",
    };
  });

  return (
    <div className="page fade-in">
      <h2 className="section-title">Articles</h2>

      <div className="grid">
        {articleList.map((article) => (
          <div key={article.slug} className="card">
            <Link to={`/articles/${article.slug}`}>
              <h3>{article.title}</h3>
            </Link>
            <p className="category">{article.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
