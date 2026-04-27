import { Link } from "react-router-dom";

export type ProjectCardProps = {
  href: string;
  imageClass: string;
  imageSrc?: string;
  country: string;
  title: string;
  description: string;
  hasBorderClass?: boolean;
};

export const ProjectCard = ({
  href,
  imageClass,
  imageSrc,
  country,
  title,
  description,
  hasBorderClass,
}: ProjectCardProps) => {
  return (
    <li
      className={`shrink-0 w-[281px] md:w-[477px] ${
        hasBorderClass ? "mr-5" : ""
      }`}
    >
      <Link to={href} className="block w-full h-full bg-white">
        
        {/* Image */}
        <div className="w-full overflow-hidden">
          <div
            className={`w-full bg-cover bg-center pb-[75.0588%] ${imageClass}`}
            style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between px-[30px] py-5 md:px-[45px] md:py-[35px]">
          
          <div>
            <span className="block leading-[25.6px] mb-2.5 md:mb-[15px]">
              {country}
            </span>

            <h2 className="text-sky-950 text-lg md:text-xl leading-[27px] md:leading-[30px] font-moderatmedium">
              {title}
            </h2>

            <p className="mt-[15px] whitespace-pre-line leading-[25.6px] md:mt-[25px]">
              {description}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center mt-[25px] md:mt-[50px] text-sky-950">
            <span className="w-5 h-[15px] mr-2.5">
              <img
                src="https://c.animaapp.com/mny151nwX361MY/assets/icon-7.svg"
                alt="Icon"
                className="w-full h-full"
              />
            </span>

            <span className="leading-[25.6px]">
              Explora el proyecto
            </span>
          </div>

        </div>

      </Link>
    </li>
  );
};