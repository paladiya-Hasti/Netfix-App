import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import CardDetails from './component/Card/CardDetail'
import Titelcard from './component/TitelCard/TitelCard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProtectedRoute from './component/proterouter/ProterRouter'



const App = () => {
  
  return (
    <div>

       <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/card" element={<Titelcard title="Popular on Netflix" />} />
        <Route path="/details/:id" element={<CardDetails />} />

       </Routes>
      
   
     
    </div>
  )
}

export default App