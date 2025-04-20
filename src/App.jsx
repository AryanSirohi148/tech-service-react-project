import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
