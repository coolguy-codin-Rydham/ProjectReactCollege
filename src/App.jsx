import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services"

function App() {
 return (
  <div>
    <div className="flex flex-col items-center justify-center ">
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
  </div>
 )
}

export default App
