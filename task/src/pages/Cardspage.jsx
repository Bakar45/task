import React from "react";

const Cardspage = () => {
  return (
    <div className="h-[660px] md:h-[477px]    flex w-full bg-[#3994E9] xl:p-20  xm:p-10 md:p-4 px-20">
      <div className="bg-white relative h-full md:w-full  rounded-2xl flex md:flex-col-reverse p-2">

        <div className="flex flex-col justify-center align-middle relative lg:w-1/2  w-1/2 md:w-full sm:w-full h-full xl:p-16 xl:p-10 xm:p-8 md:p-6   xl:text-3xl lg:text-2xl xmd:text-2xl md:text-xl sm:text-lg text-sky-800 md:w-1/2">
          <span className="font-bold">Connect Your brokerage accounts </span>{" "}
          and get access to trading ideas, aggeregated stats and discussions in
          your tech investing community right away.{" "}
        </div>


        <div className=" lg:w-1/2 md:w-full flex justify-center items-center lg:h-full  flex flex-col">
          <img
            className="absolute xl:top-[-4px] xm:top-[-20px] md:top-40px xl:w-[40vw] xm:w-[100px] sm:w-[200px]   z-10 relative "
            src="./card1.svg "
            alt="card1"
          />
          <img
            className="absolute xl:top-27 xm:top-34 md:top-12 xl:w-[40vw] xm:w-[100px] sm:w-[200px]  z-20 "
            src="./card2.svg "
            alt="card1"
          />
          
          <img
            className="absolute xl:top-[180px]  xm:top-60 md:top-16  z-40 xl:w-[40vw] xm:w-[100px] sm:w-[200px]   transition-transform duration-300 hover:scale-110 "
            src="./card3.svg "
            alt="card1"
          />
        </div>
      </div>
    </div>
  );
};

export default Cardspage;
