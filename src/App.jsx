import React from 'react'

import { Footer, Testimonials, Features, Header} from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
