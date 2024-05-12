import Wave3 from "/Wave3.svg";
import Desk from "/Rivews/Desk.svg";
import Right from "/Icons/Right.svg";
import Left from "/Icons/Left.svg";
import {Reviews as R} from "../Constants/Constants.js"
import { useState } from "react";
import React from "react";

const Reviews = () => {
    const [currIndex, setCurrIndex] = useState(1);
    const currReview = R[currIndex]
    const handlePrev = ()=>{
        setCurrIndex(currIndex>0?currIndex-1:currIndex)
    }
    const handleNext = ()=>{
        setCurrIndex(currIndex<R.length-1?currIndex+1:currIndex)
    }
  return (
    <>
      <div className="relative flex items-end justify-end w-full pt-10">
        <img src={Wave3} className="absolute top-72 -z-50" alt="" />
      </div>
      <div className="flex items-center justify-center w-full pt-10">
        <div className="max-w-[1440px] flex max-lg:flex-col items-center justify-center h-full w-full">
          <div className="w-full h-full p-10">
            <img src={Desk} alt="" />
          </div>
          <div className="flex flex-col w-full h-full max-lg:items-center max-lg:text-center">
            <>
              <p className=" font-semibold pb-5 text-[#FF3946]">OUR COMPANY</p>
              <h3 className="pb-4 text-[#314584] text-5xl font-semibold">
                Some Fine <br /> Words About Us
              </h3>
              <h3 className="text-lg font-bold uppercase pb-5  text-[#ff3946]">
                {currReview.Name} Said:{" "}
              </h3>
              <p className="text-[#314584] ">
              {currReview.Review.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
              </p>
            </>
            <div className="flex gap-2 pt-10">
              <div className={`flex items-center cursor-pointer justify-center w-10 h-10 ${currIndex==0?"bg-gray-200 scale-90":"bg-[#FF3946]"} duration-200 rounded-full`} onClick={handlePrev}>
                <img src={Left} className="h-6" alt="" />
              </div>
              <div className={`flex items-center justify-center cursor-pointer w-10 h-10 ${currIndex==R.length-1?"bg-gray-200 scale-90":"bg-[#FF3946]"} duration-200 rounded-full`} onClick={handleNext}>
                <img src={Right} alt="" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
