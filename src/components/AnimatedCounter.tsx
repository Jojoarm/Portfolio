interface AnimatedCounterProps {
  figure: number;
  description: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  figure,
  description,
  suffix = '+',
}) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center">
      <div className="flex gap-1 text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ">
        <h2 className="counter " data-target={figure.toString()}>
          0
        </h2>
        {suffix && (
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary-blue">
            {suffix}
          </p>
        )}
      </div>
      <p className="text-white-50 text-lg text-center">{description}</p>
    </div>
  );
};

export default AnimatedCounter;
