type TitleProps = {
  title: string;
  sub: string;
};

const Title = ({ title, sub }: TitleProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
      <div className="bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap text-white">
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default Title;
