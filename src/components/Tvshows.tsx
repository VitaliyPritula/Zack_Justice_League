import React from "react";

type MediaSectionProps = {
  title: string;
  items: { id: number; title: string; image: string }[];
};

export const Tvshows = ({ items }: MediaSectionProps) => {
  return (
    <section id="tvshows" className="py-[60px]">
      <div className="px-20">
        <h2 className="flex items-center text-white text-md">
          Trending TV Shows
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right transform translate-y-0.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </h2>
           <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[120px] md:w-[140px] lg:w-[160px] flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
