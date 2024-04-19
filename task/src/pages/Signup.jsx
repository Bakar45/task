import React from "react";

const Signup = () => {
  return (
    <div className="w-full h-[680px] xmd:h-[500px]  md:flex-col flex bg-[#00ABE1] flex justify-around lg:px-10 md:px-4 xl:px-20 py-4">
      <div className="my-20 border border-white border-[20px] rounded-3xl  md:h-[60vh] sm:w-full  md:w-full w-[30%] md:h-1/2 relative sm:p-2 md:p-4  p-8">
        {/* <div className="bg-re-600 p-4 border border-white"> */}
          <div className=" xmd:h-full h-full flex items-center flex-col justify-center center">
            <img className="h-[200px] sm:h-[200px]   " src="./qrcode.svg" />
            <div className="text-white  xmd:text-xl md:text-xl text-2xl  xmd:mt-2 mt-4">
              Sign Up{" "}
            </div>
          {/* </div> */}
        </div>
      </div>

      <div className="my-20 md:hidden rounded-3xl bg-white  sm:w-full md:w-full w-2/3 md:h-1/2 relative sm:p-2 md:p-4 xmd:p-12  p-8 text-xl xmd:text-lg  text-sky-800 ">
        <div className="  absolute  top-[220px] xmd:top-[120px] xmd:text-sm  right-14 xmd:right-14 w-[35vw]  xmd:w-[30vw] ">

        <img className='absolute  ml-[-25vw] mt-[-45%] z-20 xmd:h-[30vw] h-[35vw]  ' src='./logo.png' alt='Logo' />


          <span className="font-bold ">Sign Up today</span> and manage your
          profile like a pro with personalized assistant and access to a trusted
          tech comunity of 1200 members who connected $150M+ of total assests.
        </div>

      </div>
      {/* 
        <div className='sm:w-full relative lgh-full border-white border-[20px] md:border-[10px] rounded-[40px] w-[30%] '>
            
         
        </div>
        <div className=' sm:hidden m:hidden h-full md:h-relative w-2/3  bg-white rounded-lg '>
          <img className='relative  ml-[-70px] mt-4 z-20 lg:h-[69%] md:h-[250px] ' src='./logo.png' alt='Logo' />

           
        </div> */}
    </div>
  );
};

export default Signup;
