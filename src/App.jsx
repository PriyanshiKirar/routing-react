import React from 'react'
import Nav from "./components/Nav"
import About from './components/About'
import Service from './components/Service'
import Pagenotfound from './components/Pagenotfound'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Listitem from "./components/Listitem"
const App = () => {
  return (
    <div className='w-[80%] mx-auto bg-pink-200 my-10 p-10'>
<Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Service' element={<Service/>}/>
   <Route path='/List' element={<List/>}/>
   <Route path='/List/:i' element={<Listitem/>}/>

  <Route path='*' element={<Pagenotfound/>}/>

</Routes>
    </div>
  )
}

export default App