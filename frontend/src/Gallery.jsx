import React, { useEffect, useState } from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [allImages, setAllImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.nina.lukamasulovic.site/api/images', {
          headers: {
            Authorization: 'Bearer 1|RwZ6nv6XpLgKfHZwiBgurw59HZjvYhM6u8ulXEB9209150f6',
          },
        })
        const data = await response.json()
        setAllImages(data.map(item => item.url))
      } catch (error) {
        console.error('Failed to fetch images:', error)
      }
    }

    fetchImages()
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
  }, [allImages])

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await fetch('https://api.nina.lukamasulovic.site/api/images', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer 1|RwZ6nv6XpLgKfHZwiBgurw59HZjvYhM6u8ulXEB9209150f6',
        },
        body: formData,
      })

      if (!response.ok) throw new Error('Upload failed')

      const result = await response.json()
      setAllImages(prev => [...prev, result.url])
    } catch (error) {
      console.error('Image upload error:', error)
      alert('Greška pri slanju slike.')
    }
  }
  
  const handleDeleteImage = async (filename) => {
    const confirmed = window.confirm('Da li ste sigurni da želite da obrišete ovu sliku?')
    if (!confirmed) return

    try {
      const response = await fetch('https://api.nina.lukamasulovic.site/api/images', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 1|RwZ6nv6XpLgKfHZwiBgurw59HZjvYhM6u8ulXEB9209150f6',
        },
        body: JSON.stringify({ filename }),
      })

      if (!response.ok) throw new Error('Delete failed')

      setAllImages(prev => prev.filter(image => image.split('/').pop() !== filename))
      setSelectedImage(null)
    } catch (error) {
      console.error('Delete error:', error)
      alert('Greška pri brisanju slike.')
    }
  }

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Full Gallery</h1>
      <div className="gallery-grid">
        {allImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-image fade-in-on-scroll"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <div>
              <a href={selectedImage} download className="download-button">Download</a>
              <button className="delete-button" onClick={() => {
                const filename = selectedImage.split('/').pop()
                handleDeleteImage(filename)
              }}>Delete</button>
            </div>
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
