type BgImageProps = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  className?: string;
};

const BgImage = ({ top, bottom, left, right, className }: BgImageProps) => {
  return (
    <div
      style={{ top, bottom, left, right }}
      className={`hidden md:block absolute z-10 ${className ?? ''}`}
    >
      <img src="/images/bg.png" alt="" className="w-full" />
    </div>
  );
};

export default BgImage;
