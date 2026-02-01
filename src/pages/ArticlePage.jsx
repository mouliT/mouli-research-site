import { useParams } from "react-router-dom";
import MathContent from "../components/MathContent";

/*
  Load all markdown articles from src/content/articles at build time.
  Vite's import.meta.glob allows dynamic imports based on filename.
*/
const articles = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function ArticlePage() {
  const { slug } = useParams();

  // Find the markdown file matching the URL slug
  const match = Object.entries(articles).find(([path]) =>
    path.includes(`${slug}.md`)
  );

  // Safety check: if article not found, show message instead of crashing
  if (!match) {
    return <div className="page">Article not found.</div>;
  }

  const rawContent = match[1];

  /* ============================
     EXTRACT METADATA (frontmatter)
     ============================ */

  const titleMatch = rawContent.match(/title:\s*(.*)/);
  const categoryMatch = rawContent.match(/category:\s*(.*)/);
  const levelMatch = rawContent.match(/level:\s*(.*)/);
  const dateMatch = rawContent.match(/date:\s*(.*)/);

  const title = titleMatch ? titleMatch[1] : slug;
  const category = categoryMatch ? categoryMatch[1] : "General";
  const level = levelMatch ? levelMatch[1] : "Unknown";
  const date = dateMatch ? dateMatch[1] : "";

  /* ============================
     REMOVE FRONTMATTER BLOCK
     ============================ */

  const content = rawContent.replace(/---[\s\S]*?---/, "").trim();

  /* ============================
     GENERATE TABLE OF CONTENTS
     Extract all "## Heading" lines
     ============================ */

  const headings = content.match(/^##\s.+/gm) || [];

  return (
    <div className="page fade-in">

      {/* ============================
          ARTICLE HEADER
          ============================ */}
      <div className="article-header">
        <h1>{title}</h1>

        <div className="article-meta">
          <span className="meta-item">{category}</span>
          <span className="meta-item">{level}</span>
          {date && <span className="meta-item">{date}</span>}
        </div>
      </div>

      {/* ============================
          TABLE OF CONTENTS
          ============================ */}
      {headings.length > 0 && (
        <div className="toc">
          <h3>Contents</h3>
          <ul>
            {headings.map((h, i) => {
              const text = h.replace("## ", "").trim();
              const id = text
                .toLowerCase()
                .replace(/[^\w]+/g, "-");

              return (
                <li key={i}>
                  <a href={`#${id}`}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ============================
          ARTICLE BODY
          ============================ */}
      <article>
        <MathContent content={content} />
      </article>

    </div>
  );
}
