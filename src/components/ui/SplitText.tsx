import type { ElementType } from "react";

/**
 * Splits text into word spans ready for a GSAP stagger reveal. The split
 * itself produces no visual change — the calling component's GSAP timeline
 * animates `.split-word` targets within its scope.
 */
export function SplitText({
  text,
  as: Tag = "span",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          className="split-word-wrap"
          key={`${word}-${i}`}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <span className="split-word" style={{ display: "inline-block" }}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
