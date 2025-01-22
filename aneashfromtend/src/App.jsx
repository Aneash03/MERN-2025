import About from "./components/Functional components/About"
import Home from "./components/Functional components/Home"
import Gallery from "./components/Functional components/Gallery"
import Contact from "./components/Functional components/Contact"
import SignUp from "./components/Functional components/Signup"
import Navbar from "./components/Functional components/Navbar"
import Login from "./components/Functional components/Login"
import UseState from "./components/Functional components/Hooks/UseState"
import UseEffect from "./components/Functional components/Hooks/UseEffect"
import UseEffectAPI from "./components/Functional components/Hooks/UseEffectAPI"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import UseReducer from "./components/Functional components/Hooks/UseReducer"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery image="Sece logo" page="Gallery"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/usestate" element={<UseState/>}></Route>
        <Route path="/useeffect" element={<UseEffect/>}></Route>
        <Route path="/useeffectapi" element={<UseEffectAPI/>}></Route>
        <Route path="/usereducer" element={<UseReducer/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;