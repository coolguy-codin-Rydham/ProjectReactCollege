import Button from "../Commons/Button"
import Card from "./Card"
import Wave2 from "/Wave2.svg"
import {CardContent} from "../Constants/Constants.js"
const Services = () => {
  return (
    <>
    <div className="relative flex items-start w-full justify-normal">
        <img src={Wave2} className="absolute top-32 -z-50" alt="" />
    </div>
    <div className="flex items-center justify-center w-full pb-10">
        <div className="max-w-[1440px] grid lg:grid-cols-3 grid-cols-1 w-full h-full p-10">
            <div className="flex flex-col items-start justify-center w-full h-full px-10 py-24">
                <h1 className="mb-9 max-lg:text-center text-[2.98rem] font-semibold leading-normal  text-[#314584]">Anything you need we&apos;ve <br /> got you covered</h1>
                <div className="flex items-center justify-center w-full">
                <Button>Get in Touch</Button>
                </div>

            </div>
            {CardContent.map((card, index)=>{
                return (<Card image = {card.Image} heading = {card.Heading} key={index} content = {card.Content}/>)
            })}

        </div>

      
    </div>
    </>
  )
}

export default Services
