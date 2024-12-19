import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Promo from './components/Promo'
import Plan from './components/Plan'
import Products from './components/Products'
import Build from './components/Build'
import Adp from './components/Adp'
import Link from './components/Link'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Promo />
      <Plan />
      <Products />
      <Build />
      <Adp />
      <Link />
      <Footer />
    </>
  )
}

export default App
