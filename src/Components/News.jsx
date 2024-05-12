import Cardi from "./Cardi";
import Wave5 from "/Wave5.svg";
const News = () => {
  return (
    <>
      <div className="relative flex items-end justify-end w-full">
        <img
          src={Wave5}
          className="absolute top-[10rem] max-lg:top-[1rem] -z-50"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center w-full h-full p-10">
        <div className="max-w-[1440px] w-full p-10">
            <h5 className=" uppercase font-semibold pb-4 text-[#FF3946]">Blog Stories</h5>
            <h1 className="text-5xl font-semibold text-[#314584]">Check Our News</h1>
            <div className="grid grid-cols-3 gap-10 pt-10 pb-5">

                <Cardi/>
                <Cardi/>
                <Cardi/>
                
            </div>
        </div>
      </div>
    </>
  );
};

export default News;
