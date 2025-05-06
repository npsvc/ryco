import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


const App = () => {
  const allImages = [
    'src/assets/photos/fav.jpg',
    'src/assets/photos/Super School-102.jpg',
    'src/assets/photos/i15.jpg',
    'src/assets/photos/i16.jpg',
    'src/assets/photos/i20.jpg',
    'src/assets/photos/i23.jpg',
    'src/assets/photos/s3.jpg',
    'src/assets/photos/s5.jpg'
  ]

  const [visibleCount, setVisibleCount] = useState(2)
  useEffect(() => {
    const width = window.innerWidth
    if (width >= 1200) {
      setVisibleCount(4)
    } else if (width >= 768) {
      setVisibleCount(3)
    } else {
      setVisibleCount(2)
    }
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
  
    const elements = document.querySelectorAll('.fade-in-on-scroll')
    elements.forEach(el => observer.observe(el))
  
    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [visibleCount])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [visibleCount])

  const handleSeeMore = () => {
    if (visibleCount < allImages.length) {
      setVisibleCount(prev => prev + 2)
    }
  }
  return (
    <div>
      <div id='naslov'>
        <img className='petar' src='src/assets/petar-shota.png'></img>
        <h1>Ryco Exchange Program</h1>
        <img className='skola' src='src/assets/ekonomska.png'></img>
      </div>
      <div id='ryco'>
        <h2>About Ryco</h2>
        <p>Regional Youth Cooperation Office (RYCO) 
          is an independently functioning institutional 
          mechanism, founded by the Western Balkans 6 
          participants (WB 6): Albania, Bosnia and 
          Herzegovina, Kosovo*, Montenegro, North 
          Macedonia and Serbia, aiming to promote the 
          spirit of reconciliation and cooperation between 
          the youth in the region through youth exchange 
          programs.</p>
          <a href='https://www.rycowb.org//'>Learn more</a>
      </div>
      <div id='footer'>
        <img src='src/assets/evropa.png'></img>
        <img src='src/assets/giz.logo_.png'></img>
        <img src='src/assets/rycologo.png'></img>
      </div>
      <div id='prsl'>
      <div className="overlay"></div>
        <img src='src/assets/photos/w1.jpg'></img>
  <div className="text">
    <h1>Our Exchange</h1>
    <p>Fier &#10084; Bijelo Polje</p>
  </div>
      </div>
      <div className="gallery-preview-wrapper">
        <h2 className="section-title">Photo Highlights</h2>
        <div className="gallery-grid">
        {allImages.slice(0, visibleCount).map((src, idx) => (
    <div key={idx} className="gallery-item">
      <img
        src={src}
        className="gallery-image fade-in-on-scroll"
        alt={`Highlight ${idx + 1}`}
      />
    </div>
  ))}
          
        </div>

        {visibleCount < allImages.length ? (
          <button onClick={handleSeeMore} className="see-more-button">See more</button>
        ) : (
          <Link to="/gallery" className="see-more-button"  onClick={() => window.scrollTo(0, 0)}>See full gallery</Link>
        )}
      </div>
    <div className="app-wrapper">
      <div className="button-container fade-in-section">
      <Link to="/gallery" className="nav-button" 
      onClick={() => window.scrollTo(0, 0)}> 
        <img src='src/assets/galerijaicon.png' alt="Galerija" />
        <span>Gallery</span>
      </Link>
      <Link to="/report" className="nav-button" onClick={() => window.scrollTo(0, 0)}>
        <img src='src/assets/izvjestaj.png' alt="Izvještaji" />
        <span>Report</span>
      </Link>
      </div>
    </div>
    <div id='credits'>
    <p>Made by:</p>
    <p>FrontEnd: Nikolina Pisarević | BackEnd: Jovan Kešeljević</p>
    </div>
    </div>
  )
}

export default App
