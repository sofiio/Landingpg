import React from "react";

function MainBody() {
  return (
    <div className=" ">
      <img src="/Frame12.svg" alt="" className="w-full" />
      <div className="container flex flex-row-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* first section/buttons */}
        <div className="flex flex-col sm:flex-row gap-8 mx-auto ">
          <button className="w-[220px] sm:w-[130px] md:w-[170px] lg:w-[220px] h-[60px] rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus1.svg" alt="" />
            Guides
          </button>
          <button className="w-[220px] sm:w-[130px] md:w-[170px]  lg:w-[220px]  h-[60px]  rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus2.svg" alt="" />
            Transport
          </button>
          <button className="w-[220px] sm:w-[130px] md:w-[170px]  lg:w-[220px]  h-[60px] rounded-full border-2 flex gap-2 items-center justify-center">
            <img src="/bus3.svg" alt="" />
            Equipment
          </button>
          <button className="w-[220px] sm:w-[130px] md:w-[170px]  lg:w-[220px]  h-[60px]  rounded-full border-2 flex gap-2 items-center justify-center">
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

        <div className="flex gap-2 md:gap-16 lg:gap-2 lg:flex-col xl:flex-row mt-6">
          <img src="/Rectangle5.svg" alt="" className="" />
          <div className="gap-2  float-right">
            <div className="flex flex-col lg:flex-row gap-2">
              <img src="/Rectangle1.svg" alt="" />
              <img src="/Rectangle2.svg" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 mt-4">
              <img src="/Rectangle3.svg" alt="" />
              <img src="/Rectangle4.svg" alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* third section/ Tours around the country */}
      <div className="container items-center mt-14 lg:mt-28 ">
        <h2 className=" text-3xl  ">
          <strong>Tours around the country</strong>
        </h2>
        <button className="text-bookmark-purple mt-4 ">See all</button>
        <div className="flex flex-col xl:flex-row gap-2 mt-4">
          <img src="/Rectangle6.svg" alt="" className="" />
          <img src="/Rectangle7.svg" alt="" className="" />
          <img src="/Rectangle8.svg" alt="" className="" />
          <img src="/Rectangle9.svg" alt="" className="" />
        </div>
      </div>

      {/* fourth section/ Stay at the hotel */}
      <div className="container items-center mt-14 lg:mt-28">
        <h2 className=" text-3xl  ">
          <strong>Stay at the hotel</strong>
        </h2>
        <button className="text-bookmark-purple mt-4 ">See all</button>
        <div className="flex flex-col xl:flex-row gap-2 mt-4">
          <img src="/Rectangle10.svg" alt="" className="" />
          <img src="/Rectangle11.svg" alt="" className="" />
          <img src="/Rectangle12.svg" alt="" className="" />
          <img src="/Rectangle13.svg" alt="" className="" />
        </div>
      </div>

      {/* fifth section/ Discover a new landmark */}
      <div className="container items-center mt-14 lg:mt-28">
        <h2 className=" text-3xl  ">
          <strong>Discover a new landmark</strong>
        </h2>
        <button className="text-bookmark-purple mt-4">See all</button>
        <div className="flex flex-col xl:flex-row gap-16 mt-4">
          <img src="/Rectangle15.svg" alt="" className="" />
          <img src="/Rectangle16.svg" alt="" className="" />
          <img src="/Rectangle17.svg" alt="" className="" />
        </div>
      </div>



      {/* sixth section/ Have extreme fun */}
      <div className="container items-center mt-14 lg:mt-28">
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
