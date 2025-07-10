import { popularGenres } from "./data/popularGenres";
import { Link } from "react-router-dom";

export const PopularGenres = () => {
  return (
    <section>
      <div className="mx-auto 2xl:pl-20 pl-4 mb-[70px]">
        <h2 className="text-white mb-7 text-md relative font-semibold before:absolute before:top-1/2 before:left-0 before:w-[9px] before:h-[20px] before:bg-gradient-to-r before:from-[#326cff] before:via-[#26FFF2] before:rounded-2xl before:-translate-y-1/2 pl-3">
          <Link to="/tvshows" className="flex items-center gap-2">
            Popular Genres
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
        <div className="grid grid-cols-1 md1:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-4 2xl:pr-15 pr-4 mx-auto">
          {popularGenres.map((genre) => (
            <Link
              to={genre.url}
              key={genre.id}
              className={`rounded-xl h-[198px] flex-[0_0_33.33%] flex flex-col justify-center items-center text-center text-white font-semibold shadow-md ${genre.color}`}>
              <div className="mb-2 flex flex-col justify-center items-center">
                {genre.icon.endsWith(".svg") ||
                genre.icon.endsWith(".jpg") ||
                genre.icon.startsWith("/") ? (
                  <img
                    src={genre.icon}
                    alt={genre.name}
                    className="w-[80px] h-[80px] object-contain"
                  />
                ) : (
                  <span className="text-3xl"></span>
                )}
              </div>
              <p className="text-[28px] font-mulish font-bold">{genre.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
