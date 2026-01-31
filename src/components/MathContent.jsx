import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw"; // ✅ allows HTML inside markdown
import "katex/dist/katex.min.css";

/*
  MathContent component:
  - Renders Markdown
  - Supports LaTeX equations
  - Supports raw HTML (images, divs, iframes, galleries, etc.)
*/

export default function MathContent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}   // ✅ IMPORTANT FIX
    >
      {content}
    </ReactMarkdown>
  );
}
