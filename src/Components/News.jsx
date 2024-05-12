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
      <div className="flex items-center justify-center w-full h-full p-10 bg-gray-500">
        <div></div>
      </div>
    </>
  );
};

export default News;
