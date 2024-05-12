import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import News from "./Components/News"
import ParticlesComponent from "./Components/ParticlesContainer"
import Projects from "./Components/Projects"
import Reviews from "./Components/Reviews"
import Services from "./Components/Services"

function App() {
 return (
  <div>
    <div className="flex flex-col items-center justify-center ">
      <ParticlesComponent id="main"/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Reviews/>
      <Projects/>
      <News/>
    </div>
  </div>
 )
}

export default App
