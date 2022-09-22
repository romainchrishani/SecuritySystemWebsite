import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App