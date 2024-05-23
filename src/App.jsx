import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, BallCanvas } from './components'
import { Footer } from './components/Footer'
import { ErrorPage } from './components/ErrorPage'
import { Home } from './components/Home'
import { SingleTestimonial } from './components/SingleTestimonial'
import sound from './assets/music/summer-walk.wav';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <audio src={sound} autoPlay loop />

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/testimonials' element={<Feedbacks />}></Route>
        <Route path='/about' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/work' element={<Works />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/testimonial/:testimonialId' element={<SingleTestimonial />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>

      </Routes>

      {/* <Home /> */}


    </>
  )
}

export default App
