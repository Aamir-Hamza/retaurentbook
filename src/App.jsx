import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Setting from './components/Setting'
import {Routes,Route} from "react-router-dom"
import Sidebar from './components/Sidebar'
import Booking from './components/Booking'

function App() {
 
 

  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path='/home' element={<Setting/>}/>
      <Route path='/booking' element={<Booking/>}/>
    </Routes>

    </>
  )
}

export default App
