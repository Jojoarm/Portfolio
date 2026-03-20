type TitleProps = {
  title: string;
  sub?: string;
  icon?: string;
  iconAlt?: string;
};

const Title = ({ title, sub, icon, iconAlt }: TitleProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
      <div className="bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap font-semibold text-white flex gap-2 items-center justify-center">
        {icon && (
          <img
            src={icon}
            alt={iconAlt}
            className="xl:size-7 md:size-6 size-5"
          />
        )}
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default Title;
