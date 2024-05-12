import { useState } from "react"
import { Projects, Projects2 } from "../Constants/Constants"

const ImageGrid = () => {

  const [select, setSelect] = useState(Projects);
  
  
  return (
    <>
    <div className="relative z-50 grid w-full h-full grid-cols-1 gap-2 p-10 lg:grid-cols-3 md:grid-cols-2 ">
      {select.map((proj, index)=>{
        return(
          <div key={index} className="">
            <a href={proj.Link}><img src={proj.Image} alt="" className="relative z-50 rounded"/></a>
          </div>
        )
      })}
    </div>

    {select === Projects && <button onClick={()=>{
      setSelect(Projects2)
    }} className="w-full font-bold text-center text-[#FF3946] cursor-pointer">See More</button>
    }

    {select === Projects2&& <button onClick={()=>{
      setSelect(Projects)
    }} className="w-full font-bold text-center text-[#FF3946] cursor-pointer">See Less</button>
    }
    </>
  )
}

export default ImageGrid