import { Link } from "react-router-dom";

type MediaSectionProps = {
  title: string;
  items: { id: number; title: string; image: string }[];
};

export const Tvshows = ({ title, items }: MediaSectionProps) => {
  return (
    <section  id="tvshows" className="py-[60px]">
      <div className="mx-auto 2xl:px-20 px-4">
        <h2 className="text-white mb-7 text-md relative font-semibold before:absolute before:top-1/2 before:left-0 before:w-[9px] before:h-[20px] before:bg-gradient-to-r before:from-[#326cff] before:via-[#26FFF2] before:rounded-2xl before:-translate-y-1/2 pl-3">
          <Link to="/tvshows" className="flex items-center gap-2">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right transform translate-y-0.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </h2>
        <div className="flex overflow-x-auto scroll-smooth gap-11 scrollbar-hidden">
          {items.map((item) => (
            <Link
              to={`/movie/${item.id}`}
              key={item.id}
              className="flex-shrink-0">
              <img
                src={item.image}
                className="rounded-[20px] w-full h-auto object-cover shadow-md"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
