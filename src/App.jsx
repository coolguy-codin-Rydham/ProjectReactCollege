import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
 return (
  <div>
    <div className="flex flex-col items-center justify-center ">
      <Navbar/>
      <Hero/>
    </div>
  </div>
 )
}

export default App
