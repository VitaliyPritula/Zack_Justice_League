import image from "/img.jpg";
import image20 from "/2021.svg";

export default function BivgBuck() {
  return (
    <section>
      <div className="mx-auto 2xl:pl-20 lg:pl-4 mb-[70px] lg:mb-[120px]">
        <div className="flex xl:flex-nowrap flex-wrap">
          {/* Left: Image */}
          <div className="w-full h-full flex items-center justify-center bg-black">
            <img
              src={image}
              alt="Justice League"
              className="w-full rounded-r-none rounded-3xl object-cover"
            />
          </div>
          {/* Right: Gradient background with content */}
          <div className="w-full py-4 flex flex-col justify-center items-center bg-gradient-to-tr from-[#0d1a73] via-[#000]">
            <img src={image20} alt="2021" className="w-[220px] md:w-[294px] mb-4" />
            <h3 className="2xl:text-2xl text-lg font-mulish font-bold text-white">Coming Soon...</h3>
          </div>
        </div>
      </div>
    </section>
  );
}