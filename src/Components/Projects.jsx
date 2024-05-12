import ImageGrid from "./ImageGrid"
import Wave4 from "/Wave4.svg"
const Projects = () => {
  return (
    <>
    <div className="relative flex items-start justify-start w-full">
        <img src={Wave4} className="absolute top-72 -left-72 -z-50" alt="" />
      </div>
      <div className="flex items-center justify-center w-full py-10">
        <div className="max-w-[1440px] w-full flex flex-col items-center justify-center p-5">
            <div className="w-full p-10">
                <h1 className="text-[#314584] font-semibold text-5xl pb-4 text-left leading-normal">See Some of our <br /> Creative Work</h1>
            </div>
            <ImageGrid/>
            
        </div>
      </div>
      
    </>
  )
}

export default Projects
