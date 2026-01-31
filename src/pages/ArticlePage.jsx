import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MathContent from "../components/MathContent";

export default function ArticlePage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/src/content/articles/${slug}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [slug]);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <MathContent content={content} />
    </div>
  );
}
