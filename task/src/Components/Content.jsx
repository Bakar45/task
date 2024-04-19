import React from "react";

const Content = () => {
  return (
    <div className=" h-[566px] md:h-full w-full  flex md :flex-col sm:flex-col  p-9 md:p-4 justify-around">
      <div className=" h-full  w-1/2  md:w-full p-4  leading-10">
        <h1 className="text-6xl md:text-3xl sm:text-3xl font-bold text-sky-500">
          FAANG <br></br>
          INVESTING <br></br>COMUNITY
        </h1>
        <p className="text-blue-500 font-bold text-2xl md:text-xl sm:text-xl leading-10">
          We help people working in BigTech <br></br> make better finicial
          decisions<br></br> with the data and insights<br></br> provided by AI
        </p>
      </div>

      <div className="h-500px md:h-400px sm:h-300px w-5/4 p-6 flex flex-col justify-around center items-center border-sky-400 border-[20px]  md:border-[10px] sm:border=[10px] rounded-[40px] leading-9">
        <div className="h-[300px] w-full ">
          <div className=" text-2xl font-bold text-sky-500 w-full flex items-center justify-center">
            Welcome Back
          </div>
          <form>
            <input className=" h-14 md:h-12 sm:h-8 w-full bg-sky-50 hover:border-sky-600 border rounded-lg my-6 outline-none p-4" />
            <input className="h-14 md:h-12 sm:h-8 w-full bg-sky-50 hover:border-sky-600 border rounded-lg outline-none p-4" />
            <div className=" w-full flex justify-end"> <span className="text-sky-600 cursor-pointer"> Forgot Password ?</span></div>
            <button className="h-14 md:h-10 sm:h-8 rounded-lg text-white w-full bg-sky-400 my-4">Login</button>

            <div className="flex justify-around">
              <div className="text-blue-800 sm:text-sm">Do You have and account ?</div>
              <div className="text-sky-400 font-bold sm:text-sm">Create One</div>
            </div>
          </form>
        </div>
            <image/>
        </div>
      </div>
       
  );
};

export default Content;
