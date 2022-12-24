import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import CreateProduct from './pages/CreateProduct'
import ProductList from './pages/ProductList'
const App = () => {
  return (
    <>
     <Navbar/>
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<CreateProduct/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App