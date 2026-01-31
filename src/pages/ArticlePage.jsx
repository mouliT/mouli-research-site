import { useParams } from "react-router-dom";
import MathContent from "../components/MathContent";

/*
  Load all markdown articles at build time using Vite's glob import.
  This allows us to dynamically render articles based on URL slug.
*/
const articles = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function ArticlePage() {
  const { slug } = useParams();

  // Find the markdown file that matches the URL slug
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
     REMOVE FRONTMATTER
     ============================ */

  const content = rawContent.replace(/---[\s\S]*?---/, "").trim();

  /* ============================
     GENERATE TABLE OF CONTENTS
     Extract all ## headings from markdown
     ============================ */

  const headings = content.match(/^##\s.+/gm) || [];

  return (
    <div className="page fade-in">

      {/* ============================
          ARTICLE HEADER (title + metadata)
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
          Auto-generated from ## headings
          ============================ */}
      {headings.length > 0 && (
        <div className="toc">
          <h3>Contents</h3>
          <ul>
            {headings.map((h, i) => {
              const text = h.replace("## ", "");
              const id = text.toLowerCase().replace(/\s+/g, "-");

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
          Render markdown with LaTeX, images, GIFs, video, gallery
          ============================ */}
      <article>
        <MathContent content={content} />
      </article>
    </div>
  );
}
