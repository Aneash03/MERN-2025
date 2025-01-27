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
import UseRef from "./components/Functional components/Hooks/UseRef"
import UseMemo from "./components/Functional components/Hooks/UseMemo"
import UseCallBack from "./components/Functional components/Hooks/UseCallback"
import ReactLifecycleMethods from "./components/Class components/ReactLifecycleMethods"
import Student from "./components/Functional components/Hooks/UseContext"
import Memo from "./components/Functional components/Memoization/Memo"
import LazyloadingWithsuspense from "./components/Functional components/Memoization/LazyloadingWithsuspense"
import UseLocalStorage from "./components/Functional components/Hooks/UseLocalStorage"
import HoC from "./components/Functional components/HoC/HoC"
import DarkModeToggle from "./components/Functional components/Hooks/DarkModeToggle"
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
        <Route path="/useref" element={<UseRef/>}></Route>
        <Route path="/usememo" element={<UseMemo/>}></Route>
        <Route path="/usecallback" element={<UseCallBack/>}></Route>
        <Route path="/reactlm" element={<ReactLifecycleMethods/>}></Route>
        <Route path="/student" element={<Student/>}></Route>
        <Route path="/memo" element={<Memo/>}></Route>
        <Route path="/lazy" element={<LazyloadingWithsuspense/>}></Route>
        <Route path="/usecustom" element={<UseLocalStorage/>}></Route>
        <Route path="/hoc" element={<HoC/>}></Route>
        <Route path="/toggle" element={<DarkModeToggle/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;