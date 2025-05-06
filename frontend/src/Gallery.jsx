import React, { useEffect, useState } from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const initialImages = [
    'src/assets/photos/fav.jpg',
    'src/assets/photos/Super School-102.jpg',
    'src/assets/photos/i15.jpg',
    'src/assets/photos/i16.jpg',
    'src/assets/photos/i20.jpg',
    'src/assets/photos/i23.jpg',
    'src/assets/photos/s3.jpg',
    'src/assets/photos/s5.jpg',
    'src/assets/photos/w1.jpg',
    'src/assets/photos/d1.jpg',
    'src/assets/photos/i1.jpg',
    'src/assets/photos/i3.jpg',
    'src/assets/photos/i4.jpg',
    'src/assets/photos/i5.jpg',
    'src/assets/photos/i6.jpg',
    'src/assets/photos/i7.jpg',
    'src/assets/photos/i8.jpg',
    'src/assets/photos/i9.jpg',
    'src/assets/photos/i10.jpg',
    'src/assets/photos/i11.jpg',
    'src/assets/photos/i12.jpg',
    'src/assets/photos/i14.jpg',
    'src/assets/photos/i18.jpg',
    'src/assets/photos/i19.jpg',
    'src/assets/photos/i21.jpg',
    'src/assets/photos/i22.jpg',
    'src/assets/photos/i25.jpg',
    'src/assets/photos/i26.jpg',
    'src/assets/photos/i27.jpg',
    'src/assets/photos/s2.jpg',
    'src/assets/photos/s4.jpg',
  ]

  const [allImages, setAllImages] = useState(initialImages)
  const [selectedImage, setSelectedImage] = useState(null)

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
  }, [])

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setAllImages(prev => [...prev, imageURL])
    }
  }

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Full Gallery</h1>
      <div className="gallery-grid">
        {allImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src.startsWith('blob:') ? src : `/${src}`}
              alt={`Gallery ${index + 1}`}
              className="gallery-image fade-in-on-scroll"
              onClick={() => setSelectedImage(src.startsWith('blob:') ? src : `/${src}`)}
            />
          </div>
        ))}
        
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <a href={selectedImage} download className="download-button">Download</a>
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}

      <label htmlFor="upload-input" className="upload-button">
        +
      </label>
      <input
        id="upload-input"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <Link to="/" className="back-button">
        &#8592;
      </Link>
        <div id='creditss'>
          <p>Made by:</p>
          <p>FrontEnd: Nikolina Pisarević | BackEnd: Jovan Kešeljević</p>
        </div>
    </div>
  )
}

export default Gallery
