import Navbar from "./components/Navbar"
import "./App.css"
import Beforeslider from "./components/Beforeslider"
import Slider from "./components/slider"
import Afterslider from "./components/Afterslider"
function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <Beforeslider/>
      <Slider/>
      <Afterslider/>
    </div>
  )
}

export default App
