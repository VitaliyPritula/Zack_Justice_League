import { Link } from "react-router-dom";
import { popularPeople } from "../data/popularPeople";
import "./style.css";
export const PopularPeople = () => {
  return (
    <section className="overflow-hidden">
      <div className="text-white mx-auto 2xl:px-20 px-4 pt-[70px] pb-[60px]">
        <h2 className="text-white mb-7 text-md relative font-semibold before:absolute before:top-1/2 before:left-0 before:w-[9px] before:h-[20px] before:bg-gradient-to-r before:from-[#326cff] before:via-[#26FFF2] before:rounded-2xl before:-translate-y-1/2 pl-3">
          <Link to="" className="flex items-center gap-2">
            Popular Actors & Directors
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
        <div className="flex xl:gap-x-20 lg:gap-x-2 overflow-x-scroll scroll-smooth scrollbar-hidden snap-x snap-mandatory">
          {popularPeople.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="text-center flex flex-col items-center 2xl:flex-[0_0_12%] xl:flex-[0_0_20%] lg:flex-[0_0_28%] md2:flex-[0_0_28%] md1:flex-[0_0_44%] flex-[0_0_35%]">
              <img
                src={item.image}
                alt={item.name}
                className="w-[100%] rounded-full shadow-md"
              />
              <p className="text-white mt-2 text-sm">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
