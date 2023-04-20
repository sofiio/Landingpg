import React from "react";
import Hotels from "./Hotels";
import Landmarks from "./Landmarks";
import Tours from "./Tours";

function MainBody() {
  return (
    <div className=" " id="main">
      <img src="/Frame12.svg" alt="" className="w-full" />
      <div className="container flex flex-row-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* first section/buttons */}

        <div className="flex flex-col sm:flex-row gap-8 mx-auto ">
          <button className="hover:bg-red-700 hover:text-white w-[220px] sm:w-[130px] md:w-[170px] lg:w-[220px] h-[60px] rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus1.svg" alt="" />
            Guides
          </button>
          <button className="hover:bg-red-700 hover:text-white w-[220px] sm:w-[130px] md:w-[170px]  lg:w-[220px]  h-[60px]  rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus2.svg" alt="" />
            Transport
          </button>
          <button className="hover:bg-red-700 hover:text-white w-[220px] sm:w-[130px] md:w-[170px]  lg:w-[220px]  h-[60px] rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus3.svg" alt="" />
            Equipment
          </button>
          <button className="hover:bg-red-700 hover:text-white w-[220px] sm:w-[130px] md:w-[170px]  lg:w-[220px]  h-[60px]  rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus4.svg" alt="" />
            Food
          </button>
        </div>
      </div>

      {/*second section /  your preferences */}
      <div className="container items-center mt-14 lg:mt-28">
        <h2 className=" text-3xl  ">
          <strong>Your preferences</strong>
        </h2>

        <div className="flex gap-2  lg:gap-2 lg:flex-col xl:flex-row mt-6">
          <img src="/Rectangle5.svg" alt="" className="w-full lg:w-auto" />
          <div className="gap-2  float-right">
            <div className="flex-col lg:flex-row gap-2 hidden lg:flex">
              <img src="/Rectangle1.svg" alt="" />
              <img src="/Rectangle2.svg" alt="" />
            </div>
            <div className="flex-col lg:flex-row gap-2 mt-4 hidden lg:flex">
              <img src="/Rectangle3.svg" alt="" />
              <img src="/Rectangle4.svg" alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* third section/ Tours around the country */}

      <Tours />

      {/* fourth section/ Stay at the hotel */}

      <Hotels />

      {/* fifth section/ Discover a new landmark */}
      
      <Landmarks/>

      {/* sixth section/ Have extreme fun */}
      <div className="container items-center mt-14 lg:mt-28 " id="environment">
        <h2 className=" text-3xl  ">
          <strong>Have extreme fun</strong>
        </h2>

        <div className="flex flex-col lg:flex-row gap-32 lg:gap-16 xl:gap-32 mt-4">
          <img src="/file11.svg" alt="" className="" />
          <img src="/file12.svg" alt="" className="" />
          <img src="/file13.svg" alt="" className="" />
          <img src="/file14.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
