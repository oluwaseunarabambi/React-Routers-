import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Nav from './components/pages/Nav'
import NotFound from './components/pages/NotFound'
import Login from './components/pages/Login'
import Settings from './components/pages/Settings'
import Contact from './components/pages/Contact'



  function App() {
  

    return (
      <>
        



        <BrowserRouter>    
            <Routes>
             
                <Route path='/' element={<Home/>}/>
                  <Route path='/nav' element={<Nav/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/settings' element={<Settings/>}/>
                  <Route path='/login' element={<Login/>}/>  
                  <Route path='*' element={<NotFound/>}/>        
            </Routes>
        </BrowserRouter>

      </>
    )
  }

export default App
