import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

function home() {
  return (
    <div className="min-h-screen mx-2 md:mx-10">
    <Header />
    <Hero />
    <About heading = "Expertise" />
    <Projects heading = "Works"  />
    <Experience  heading = "Experience" />
    <Blog heading = "Blog" />
    <Testimonials heading= "What they say"/>
    <Faq heading = "Frequently Asked Questions" />
    <Footer/>
  </div>

  )
}

export default home