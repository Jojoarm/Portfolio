import { useRef, type MouseEvent, type ReactNode } from 'react';

// interface CardData {
//   review: string;
//   // Add more properties if needed (like `imgPath`, `title`, etc.)
// }

interface GlowCardProps {
  //   card: CardData;
  children: ReactNode;
  index: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, index }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      card.style.setProperty('--start', `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card border border-black-50 bg-black-100 timeline-card rounded-xl p-5 md:p-10  mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      {children}
    </div>
  );
};

export default GlowCard;
