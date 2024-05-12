import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Reviews from "./Components/Reviews"
import Services from "./Components/Services"

function App() {
 return (
  <div>
    <div className="flex flex-col items-center justify-center ">
      <Navbar/>
      <Hero/>
      <Services/>
      <Reviews/>
    </div>
  </div>
 )
}

export default App
