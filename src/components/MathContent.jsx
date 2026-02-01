import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "katex/dist/katex.min.css";

/*
 Enables:
 - LaTeX
 - Images & HTML
 - Auto heading IDs for TOC anchors
*/
export default function MathContent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[
        rehypeKatex,
        rehypeRaw,
        rehypeSlug,              // ✅ adds id to headings
        rehypeAutolinkHeadings   // optional: clickable heading links
      ]}
    >
      {content}
    </ReactMarkdown>
  );
}
