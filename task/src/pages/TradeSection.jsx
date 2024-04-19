import React from "react";


const TradeSection = () => {

  return (
    <div className="h-[777px] lg:h-full w-full flex lg:flex-col  items-center bg-[#FBBC12] p-20  overflow-visible xl:p-20  xm:p-10 md:p-4 px-20 ">
       <div className= " lg:bg-white flex flex-col p-1 overflow- items-center rounded-3xl ">

      <div className=" relative h-[500px] lg:h-[200px] rounded-2xl  flex overflow-hidden ">
        <div className="bg-white flex flex-col justify-center align-middle relative w-1/2 lg:w-full h-full  xl:p-16 lg:p-8  xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sky-700">
          <span className="font-bold">Automate mentoring </span> of your trading
          accounts 24/7. Control your risks and manage your portfolio like a
          PRO.
        </div>
        <div className="w-3/4 lg:hidden h-full  overflow-visible bg-white"></div>

        {/* ................ */}
      </div >
      
      <div className="absolute lg:relative lg:mt-4 w-[400px] lg:w-[50vw] xm:[60vw] md:[70vw] sm:w-[80vw] rounded-3xl h-[550px] overflow- xl:right-44 lg:right-0 flex flex-col">
        <img
          src="./bg11.svg"
          className="w-full h-full object-cover rounded-3xl "
          alt="bg"
        />

        <img
          src="./card7.svg"
          className="absolute inset-0 top-16 z-400 w-full trasition-transform duration-300  hover:scale-110"
          alt="card"
        />
        <img
          src="./card8.svg"
          className="absolute inset-y-[206px] z-200 top-44 w-full "
          alt="card"
        />
        <img
          src="./card9.svg"
          className="absolute inset-y-[300px] z-200 w-full"
          alt="card"
        />

        <img
          src="./bg10.svg"
          className="  absolute z-200 w-full z-20 bottom-4"
          alt="bg2"
        />
      </div>
      </div>

    </div>
  );
};

export default TradeSection;
