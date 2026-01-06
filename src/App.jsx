import './App.css'
import Calculator from './Components/Calculator'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar/>
      <div className="container mt-4">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculator' element={<Calculator/>}/>

      </Routes>
      </div>
    </>
  )
}

export default App
