import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    // <div className='bg-amber-400 h-screen flex justify-center'>
    //   <h1 className='self-center font-bold text-6xl text-blue-800'> 🦚🕊️😇 </h1>
    // </div>
  ) 
}

export default App
