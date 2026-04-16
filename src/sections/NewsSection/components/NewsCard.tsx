export type NewsCardProps = {
  liClassName: string;
  spanVariantClassName: string;
  date: string;
  href: string;
  title: string;
  urlText: string;
};

export const NewsCard = ({
  liClassName,
  spanVariantClassName,
  date,
  href,
  title,
  urlText,
}: NewsCardProps) => {
  return (
    <li className={liClassName}>
      <div className="w-full">
        
        <div className="w-full mb-[25px] md:mb-[35px]">
          <span
            className={`block w-full bg-cover bg-center pb-[75.0376%] ${spanVariantClassName}`}
          />
        </div>

        <p className="leading-[25.6px] mb-2.5 md:mb-[15px]">
          {date}
        </p>

        <a
          href={href}
          className="flex items-start text-sky-950"
        >
          <span className="w-5 h-[15px] mr-2.5 mt-[5px]">
            <img
              src="https://c.animaapp.com/mny151nwX361MY/assets/icon-7.svg"
              alt="Icon"
              className="w-full h-full"
            />
          </span>

          <span className="text-lg md:text-xl leading-[27px] font-moderatmedium">
            {title}
          </span>
        </a>

        <a
          href={href}
          className="hidden md:flex items-center mt-[15px] text-sky-950"
        >
          <span className="w-5 h-[15px] mr-2.5">
            <img
              src="https://c.animaapp.com/mny151nwX361MY/assets/icon-7.svg"
              alt="Icon"
              className="w-full h-full"
            />
          </span>

          <span className="leading-[25.6px]">
            {urlText}
          </span>
        </a>

      </div>
    </li>
  );
};