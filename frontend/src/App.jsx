// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import Grid from './Components/Grid'
import HomePage from './Components/HomePage'

import Usermanagement from "./mini-projects/Usermanagement";
import UserDetails from "./mini-projects/UserDetails";
import Nomatch from "./mini-projects/Nomatch";
import { Route, Routes } from "react-router-dom";
import Gallery from './mini-projects/Gallery'
import Trial01 from "./mini-projects/Trial01";
import ToDo from './mini-projects/Todo'
import MiniProjectNavigation from './Components/MiniProjectNavigation'

import Api from './Components/Api'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/api' element={<Api/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/users" element={<Usermanagement />}></Route>
        <Route path="/users/:id" element={<UserDetails />}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/to-do' element={<ToDo/>}></Route>
        <Route path='/trial01' element={<Trial01/>}></Route>
        <Route path='/nav' element={<MiniProjectNavigation/>}></Route>
        <Route path='*'element={<Nomatch/>}></Route>
      </Routes>
      {/* <Todo/> */}
      {/* <Tasks></Tasks> */}
      {/* <CSSTasks/> */}
    </>
  )
}

export default App
