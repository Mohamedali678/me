import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <Header />
  <Hero />
  <Projects />
  <Contact />
  </div>
)
