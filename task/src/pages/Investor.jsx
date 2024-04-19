import React from "react";

const Investor = () => {
  return (
    <div className="xl:h-[770px]- w-full bg-[hsl(273,39%,61%)] xl:p-20 xm:p-10 md:p-4 sm:p-4  flex items-center">
      <div className="bg-white w-full my-0 xl:h-[500px] lg:[900px] md:h relative lg:absolut  rounded-2xl flex lg:flex-col items-center">
        <div className="relative  w-[60%] lg:w-full xl:h-full lg:h-[30x] md:h-[2000p] sm:h-[1500px] z- flex items-center  "></div>
        <div className="bg-red-0 flex  flex-col justify-center align-middle relative w-[34%]  lg:w-full h-full   xl:pl-10 lg:p-8 xm:p-6 md:p-4 sm:p-6 sm:text-lg xl:text-2xl text-sky-700">
          <span className="font-bold">
            Receive personalized investor reports{" "}
          </span>{" "}
          and understand how your trading activities contributes to your overall
          wealth.
        </div>
        <div className="absolute xl:w-[400px] lg:w-[50vw] xm:w-[60vw] md:w-[50vw] sm:w-[80vw]     z-20 xl:h-[110%] lg:h-[100%] md:h=80% sm:h-[320px] xl:top-[-30px] lg:top-0 xl:left-[10vw] lg:left-[16vw] md:left-[10vw] sm:left-6 rounded-3xl ">
          <img
            src="./bg15.svg"
            className="w-full  h-full object-cover rounded-3xl"
            alt="Background"
          />
          <img
            src="./card12.svg"
            className="z-40 absolute  top-20 xl:left-[-100px] xl:w-[320px] md:left-6 sm:left-[-35px]  lg:w-[230px] md:w-[250px] sm:h-[240px] "
            alt="Card 12"
          />
          <img
            src="./card14.svg"
            className="z-60 absolute  sm:top-16 top-20 xl:left-[150px] sm:left-[24vw] lg:left-[180px] md:left-46   xl:w-[300px] lg:w-[220px] md:w-[230px] sm:h-[220px]"
            alt="Card 14"
          />
          <img
            src="./card13.svg"
            className="z-80 absolute sm:top-16 top-10 md:left-16 sm:left-[10vw] transition-transform duration-500 hover:translate-y-[-20%] hover:translate-x-[20%] xl:w-[320px] lg:w-[250px] md:w-[250px] sm:w-[200px]"
            alt="Card 13"
          />
        </div>
      </div>
    </div>
  );
};

export default Investor;
