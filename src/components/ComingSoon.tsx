import React from "react";

const ComingSoon = ({ onRegisterClick }) => {
  return (
    <section className="mx-auto max-w-[1224px] lg:pb-[120px] pb-[50px]">
      <div className="bg-[url(/bg-img.jpg)] bg-no-repeat bg-cover rounded-3xl px-[57px] 2xl:py-[70px] lg:py-[50px] py-[30px]">
        <div className="flex flex-wrap items-center 2xl:gap-20 gap-12">
          <h2 className="2xl:text-2xl text-xl 2xl:w-[730px] xl:w-[555px]">
            Are You New Here? Don’t wait, Register Now.
          </h2>
          <button
            type="button"
            onClick={onRegisterClick}
            className="ring-offset-background xl:w-auto w-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground py-[15px] hover:bg-gradient-to-bl bg-gradient-to-br from-[#326cff]  to-[#26FFF2] !rounded-[50px] px-[18px] font-mulish"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
