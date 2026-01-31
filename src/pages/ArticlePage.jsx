import { useParams } from "react-router-dom";
import MathContent from "../components/MathContent";

// Load all markdown articles from src/content/articles at build time
const articles = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function ArticlePage() {
  const { slug } = useParams();

  // Find the matching markdown file based on URL slug
  const match = Object.entries(articles).find(([path]) =>
    path.includes(`${slug}.md`)
  );

  if (!match) {
    return <div className="page">Article not found.</div>;
  }

  const rawContent = match[1];

  // Extract metadata from frontmatter
  const titleMatch = rawContent.match(/title:\s*(.*)/);
  const categoryMatch = rawContent.match(/category:\s*(.*)/);
  const levelMatch = rawContent.match(/level:\s*(.*)/);
  const dateMatch = rawContent.match(/date:\s*(.*)/);

  const title = titleMatch ? titleMatch[1] : slug;
  const category = categoryMatch ? categoryMatch[1] : "General";
  const level = levelMatch ? levelMatch[1] : "Unknown";
  const date = dateMatch ? dateMatch[1] : "";

  // Remove the frontmatter block before rendering markdown
  const content = rawContent.replace(/---[\s\S]*?---/, "").trim();

  return (
    <div className="page fade-in">
      {/* Article header with metadata */}
      <div className="article-header">
        <h1>{title}</h1>

        <div className="article-meta">
          <span className="meta-item">{category}</span>
          <span className="meta-item">{level}</span>
          {date && <span className="meta-item">{date}</span>}
        </div>
      </div>

      {/* Render markdown body without frontmatter */}
      <article>
        <MathContent content={content} />
      </article>
    </div>
  );
}
