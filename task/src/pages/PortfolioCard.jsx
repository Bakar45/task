import React from "react";

const PortfolioCard = () => {
  return (
    <div className="h-[660px] md:h-[477px]    flex w-full bg-[#3994E9] xl:p-20  xm:p-10 md:p-4 lg:px-20">
    <div className="bg-white relative h-full md:w-full  rounded-2xl flex md:flex-col p-2">
        <div className=" lg:w-1/2 md:w-full flex justify-center items-center lg:h-full  flex flex-col">

          <img
            className="relative md:absolute xl:top-[-100px] lg:top-[-150px] xm:top-[-250px] md:top-[20px] sm:top-[30px] xl:w-[40vw] xm:w-[100px] sm:w-[200px]  "
            src="./card4.svg "
            alt="card1"
          />
          <img
            className="absolute xl:top-24 lg:top-24 md:top-12 md:top-12 xl:w-[40vw] xm:w-[100px] sm:w-[200px]  "
            src="./card5.svg "
            alt="card1"
          />
            <img
              className="absolute xl:top-36 lg:top-36 md:top-16 transition-transform duration-300 hover:scale-110 sm:w-[200px]   xl:w-[40vw] xm:w-[100px] "
            src="./card6.svg "
            alt="card1"
          />
        </div>

    
        <div className="flex flex-col justify-center align-middle relative lg:w-1/2  w-1/2 md:w-full sm:w-full h-full xl:p-16 xl:p-10 xmd:p-8 md:p-6   xl:text-3xl lg:text-2xl xm:text-2xl md:text-xl sm:text-lg text-sky-800 md:w-1/2">
          <span className="font-bold">Track Your net worth </span> automatically
          and spend less time managing your personal fianaces. No need to update
          spreadsheets manually anymore. your tech investing community right
          away.{" "}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
