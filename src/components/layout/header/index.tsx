import React, { useState, useEffect, useRef } from "react";
import "./style.css";
// Кастомний хук ScrollSpy (твій оригінальний)
const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let current: string | null = null;

      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          current = id;
          break;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearchQuery("");
  };

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Закриття пошуку при Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  // Закриття пошуку при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  // Блокування скролу при відкритому меню
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

  const sections = ["home", "tvshows", "movies", "series"];
  const activeId = useScrollSpy(sections, 100);

  return (
    <header className="fixed left-0 w-full bg-[#000] shadow-md z-20">
      <div className="flex justify-between items-center xl:px-16 px-5 py-3 relative">
        <a href="#home">
          <img className="xl:w-full w-[50%]" src="/Logo.svg" alt="Logo" />
        </a>
        <div
          className={`lg:relative absolute top-12 lg:top-0 right-0 lg:pt-0 pt-5 bg-[#000] w-full lg:w-auto transform transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-x-0 opacity-100 h-screen overflow-y-scroll px-7"
              : "lg:translate-x-0 translate-x-full lg:opacity-100 opacity-0"
          }`}>
          <nav className="flex lg:flex-row flex-wrap flex-col gap-6">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-md relative  font-mulish font-extrabold group transition-colors duration-300 ${
                  activeId === section
                    ? "text-white"
                    : "text-rey hover:text-white"
                }`}>
                {section === "home"
                  ? "Home"
                  : section === "tvshows"
                  ? "TV Shows"
                  : section.charAt(0).toUpperCase() + section.slice(1)}

                <span
                  className={`absolute ${
                    activeId === section ? "w-full" : "w-0 group-hover:w-full"
                  } h-0.5 -bottom-1 left-0 bg-gradient-to-r from-[#326cff] via-[#26FFF2] transition-all duration-300`}></span>
              </a>
            ))}
          </nav>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className={`absolute xl:top-20 top-16 xl:left-44 lg:left-28 left-11 w-[70%] 
              ml-2
              px-3 py-1
              rounded-md
              border border-gray-600
              bg-black text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 
              ${searchOpen ? "opacity-100 " : "opacity-0 pointer-events-none"}
            `}
        />
        <div className="pr-10 lg:pr-0 flex relative items-center header-search">
          {/* Пошук */}
          <div ref={searchRef} className=" flex items-center">
            <button
              onClick={toggleSearch}
              aria-label="Пошук"
              className="text-gray-300 hover:text-white bg-transparent duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
          <div className="">
            <button type="submit">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6868 21.9067C11.6255 22.3472 11.4194 22.7506 11.1047 23.0454C10.7901 23.3402 10.3869 23.5077 9.96704 23.5181C9.53564 23.5247 9.11599 23.3652 8.78735 23.0688C8.4587 22.7725 8.24291 22.3592 8.17993 21.9067H11.6868Z"
                  fill="white"
                />
                <path
                  d="M11.6868 21.9067C11.6255 22.3472 11.4194 22.7506 11.1047 23.0454C10.7901 23.3402 10.3869 23.5077 9.96704 23.5181C9.53564 23.5247 9.11599 23.3652 8.78735 23.0688C8.4587 22.7725 8.24291 22.3592 8.17993 21.9067H11.6868Z"
                  stroke="white"
                />
                <path
                  d="M19.7718 18.4149C19.1246 17.8254 18.558 17.1496 18.0872 16.4057C17.5733 15.3788 17.2653 14.2573 17.1812 13.1072V9.71956C17.1785 9.30807 17.1426 8.89752 17.0738 8.49206C16.5456 8.38417 16.0379 8.18964 15.5705 7.91603C15.7486 8.50224 15.8392 9.11259 15.8389 9.72642V13.114C15.9212 14.5171 16.2989 15.8855 16.9463 17.1257C17.4097 17.8759 17.9595 18.5666 18.5839 19.183H1.39597C2.02041 18.5666 2.5702 17.8759 3.03356 17.1257C3.68095 15.8855 4.05868 14.5171 4.14094 13.114V9.71956C4.13741 8.92593 4.28712 8.13938 4.5815 7.40495C4.87589 6.67052 5.30917 6.00264 5.85652 5.43954C6.40388 4.87645 7.05456 4.4292 7.77132 4.12341C8.48808 3.81762 9.25683 3.65929 10.0336 3.6575C11.1703 3.65843 12.2816 4.00192 13.2282 4.64498C13.1238 4.25341 13.0653 3.85058 13.0537 3.44492V3.01289C12.3529 2.66066 11.6001 2.42896 10.8255 2.32714V1.46309C10.8255 1.22029 10.7311 0.987432 10.5631 0.815746C10.3951 0.64406 10.1672 0.547607 9.92953 0.547607C9.6919 0.547607 9.46401 0.64406 9.29598 0.815746C9.12795 0.987432 9.03356 1.22029 9.03356 1.46309V2.36143C7.29914 2.61142 5.71179 3.49411 4.56458 4.84655C3.41736 6.19899 2.78774 7.92984 2.79195 9.71956V13.1072C2.70789 14.2573 2.39985 15.3788 1.88591 16.4057C1.42341 17.1479 0.865903 17.8236 0.228188 18.4149C0.156598 18.4792 0.0992224 18.5583 0.0598775 18.647C0.0205325 18.7356 0.000120669 18.8319 0 18.9292V19.8619C0 20.0437 0.0707093 20.2182 0.196573 20.3468C0.322436 20.4754 0.493143 20.5476 0.671141 20.5476H19.3289C19.5069 20.5476 19.6776 20.4754 19.8034 20.3468C19.9293 20.2182 20 20.0437 20 19.8619V18.9292C19.9999 18.8319 19.9795 18.7356 19.9401 18.647C19.9008 18.5583 19.8434 18.4792 19.7718 18.4149Z"
                  fill="white"
                />
                <path
                  d="M17.9663 0C19.8072 0 21.3002 1.58186 21.3003 3.5332C21.3003 5.48461 19.8072 7.06641 17.9663 7.06641C16.1255 7.06623 14.6333 5.4845 14.6333 3.5332C14.6334 1.58196 16.1256 0.000174811 17.9663 0Z"
                  fill="url(#paint0_linear_1_48)"
                />
                <path
                  d="M17.9663 0C19.8072 0 21.3002 1.58186 21.3003 3.5332C21.3003 5.48461 19.8072 7.06641 17.9663 7.06641C16.1255 7.06623 14.6333 5.4845 14.6333 3.5332C14.6334 1.58196 16.1256 0.000174811 17.9663 0Z"
                  stroke="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_48"
                    x1="17.9666"
                    y1="0"
                    x2="17.9666"
                    y2="7.06667"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#326CFF" />
                    <stop offset="1" stopColor="#26FFF2" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
          <div className="">
            <button type="submit">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1847 12.6891C13.7648 12.3844 14.4287 12.2109 15.1357 12.2109H15.1381C15.21 12.2109 15.2436 12.1266 15.1909 12.0797C14.4555 11.4344 13.6156 10.9132 12.7054 10.5375C12.6958 10.5328 12.6862 10.5305 12.6766 10.5258C14.165 9.46875 15.1333 7.75078 15.1333 5.8125C15.1333 2.60156 12.4777 0 9.20126 0C5.92484 0 3.27158 2.60156 3.27158 5.8125C3.27158 7.75078 4.23989 9.46875 5.7307 10.5258C5.72111 10.5305 5.71152 10.5328 5.70194 10.5375C4.63057 10.9805 3.66945 11.6156 2.84256 12.4266C2.02044 13.229 1.36592 14.1803 0.915533 15.2273C0.472397 16.2526 0.233241 17.3512 0.210875 18.4641C0.210236 18.4891 0.214723 18.514 0.224072 18.5373C0.233421 18.5605 0.247443 18.5818 0.265312 18.5997C0.283182 18.6176 0.304536 18.6318 0.328117 18.6415C0.351699 18.6513 0.37703 18.6563 0.402619 18.6562H1.8383C1.94136 18.6562 2.02765 18.5742 2.03004 18.4734C2.07798 16.6641 2.81859 14.9695 4.12964 13.6852C5.48383 12.3563 7.28622 11.625 9.20366 11.625C10.5626 11.625 11.8665 11.993 12.9906 12.682C13.0195 12.6998 13.0526 12.7098 13.0867 12.711C13.1208 12.7122 13.1546 12.7047 13.1847 12.6891ZM9.20366 9.84375C8.10592 9.84375 7.0729 9.42422 6.29394 8.6625C5.91068 8.28869 5.60685 7.84443 5.39994 7.35529C5.19303 6.86616 5.08713 6.34183 5.08836 5.8125C5.08836 4.73672 5.51738 3.72422 6.29394 2.9625C7.07051 2.20078 8.10353 1.78125 9.20366 1.78125C10.3038 1.78125 11.3344 2.20078 12.1134 2.9625C12.4966 3.33631 12.8005 3.78057 13.0074 4.26971C13.2143 4.75884 13.3202 5.28317 13.319 5.8125C13.319 6.88828 12.8899 7.90078 12.1134 8.6625C11.3344 9.42422 10.3014 9.84375 9.20366 9.84375ZM18.0191 15.4219H16.0058V13.4531C16.0058 13.35 15.9195 13.2656 15.814 13.2656H14.4718C14.3664 13.2656 14.2801 13.35 14.2801 13.4531V15.4219H12.2668C12.1613 15.4219 12.075 15.5063 12.075 15.6094V16.9219C12.075 17.025 12.1613 17.1094 12.2668 17.1094H14.2801V19.0781C14.2801 19.1812 14.3664 19.2656 14.4718 19.2656H15.814C15.9195 19.2656 16.0058 19.1812 16.0058 19.0781V17.1094H18.0191C18.1245 17.1094 18.2108 17.025 18.2108 16.9219V15.6094C18.2108 15.5063 18.1245 15.4219 18.0191 15.4219Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Burger Icon */}
        <div
          className="absolute right-5 flex flex-col justify-between w-6 h-4 lg:hidden cursor-pointer z-20"
          onClick={toggleMenu}>
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}></span>
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}></span>
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[11px]" : ""
            }`}></span>
        </div>
      </div>
    </header>
  );
};
