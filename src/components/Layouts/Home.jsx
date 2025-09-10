import React from 'react'
import Hero from '../Pages/Hero'
import Header from '../Pages/Header'
import Services from '../Pages/Services'
import About from '../Pages/About'
import Footer from '../Pages/Footer'

function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
    </main>
  )
}

export default Home