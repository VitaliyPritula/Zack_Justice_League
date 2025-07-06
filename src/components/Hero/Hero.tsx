import React, { useState, useEffect } from "react";
import image from "/Hero_img.webp";
import "./style.css"; // Assuming you have some styles in Hero.css
const MovieCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <section className="mx-auto px-4 overflow-hidden border-b border-gray-200">
      <div className="xl:flex items-center text-white pt-8">
        {/* Текст зліва */}
        <div className="xl:flex-[0_0_50%] 2xl:pl-16 lg:mb-0 mb-7 z-20">
          <div className="mb-4">
            <div className="xl:w-[80%]">
              <h1 className="title font-marcellus leading-[70px] font-normal mb-4">
                Zack Snyder's Justice League
              </h1>
            </div>
            <div className="flex items-center gap-[18px] mb-2 text-sm text-gray-300 ">
              <span className="font-mulish">2021</span>
              <span className="px-[15px] gradient-border font-mulish text-white">18+</span>
              <span className="font-mulish">4h 2min</span>
              <span className="font-mulish">⭐ 8.8</span>
            </div>
            <p className="xl:w-[63%] text-accent-200 text-sm mb-6 font-mulish font-regular">
              Determined to ensure Superman's ultimate sacrifice was not in
              vain, Bruce Wayne aligns forces with Diana Prince with plans to
              recruit a team of metahumans to protect the world from an
              approaching threat of catastrophic proportions.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <a
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 py-2 hover:bg-gradient-to-bl bg-gradient-to-br from-[#326cff]  to-[#26FFF2]  rounded-full px-8 scroll-smooth font-mulish">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.2923 10.3932L2.15764 17.7762C1.21269 18.4021 0 17.6442 0 16.3824V1.61647C0 0.356646 1.21094 -0.403248 2.15764 0.224664L13.2923 7.60763C13.5073 7.74786 13.686 7.95055 13.8103 8.19516C13.9345 8.43977 14 8.71759 14 9.00043C14 9.28328 13.9345 9.5611 13.8103 9.80571C13.686 10.0503 13.5073 10.253 13.2923 10.3932Z"
                    fill="white"
                  />
                </svg>
                Watch
              </a>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors duration-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-white hover:bg-white/50  h-10 py-2 rounded-full px-8 border-white hover:bg-white/50 text-accent-100 !rounded-full font-mulish">
                More information
              </button>
            </div>
          </div>
        </div>
        {/* popup video */}

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-2xl p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-5 right-5 text-white text-l">
                &times;
              </button>
              <div className="min-w-16 h-[400px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GycrYSiDKAQ" // заміни на своє відео
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        )}
        {/* Зображення справа */}
        <div className="xl:flex-[0_0_55%] transform translyte-x-[200%]">
          <img
            src={image}
            alt="Justice League"
            className="max-w-[100%] h-[58%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
