import { ReactNode } from "react";

export type FlipCardProps = {
  frontContent: ReactNode;
  backContent: ReactNode;
  visibleSide: String | "front" | "back";
};

export default function FlipCard({
  frontContent,
  backContent,
  visibleSide,
}: FlipCardProps) {
  return (
    <div className="flip-card">
      <div
        className="flip-card-inner"
        style={visibleSide === "back" ? { transform: "rotateY(180deg)" } : {}}
      >
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
}
