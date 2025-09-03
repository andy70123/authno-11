'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const images = [
    '/Picture1 1.png',
    '/picture 2.jpg',
    '/picture 3.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', paddingTop: '60px' }}>
      {/* Background Image Slider */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: activeSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)' 
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', height: '100%' }}>
        <div style={{ margin: '0 auto', padding: '0 2rem', maxWidth: '1400px', width: '100%' }}>
          <div className="hero-content" style={{ maxWidth: '32rem', textAlign: 'left' }}>
            {/* Headline */}
            <h1 className="hero-title" style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              textTransform: 'uppercase', 
              lineHeight: 1.1, 
              marginBottom: '2rem' 
            }}>
              <span style={{ display: 'block' }}>EXPERT</span>
              <span style={{ display: 'block' }}>AUTHENTICATION</span>
            </h1>

            {/* Description */}
            <p className="hero-description" style={{ 
              fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', 
              color: 'white', 
              marginBottom: '3rem', 
              lineHeight: 1.6, 
              maxWidth: '36rem' 
            }}>
              AI POWERED VERIFICATION THAT CAN PROVIDE ACCURATE ASSESSMENTS IMMEDIATELY.
            </p>

            {/* CTA Button */}
            <button className="hero-button" style={{ 
              background: 'rgba(255, 255, 255, 0.6)', 
              backdropFilter: 'blur(4px)', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              color: 'black', 
              fontWeight: '600', 
              textTransform: 'uppercase', 
              padding: '1rem 2rem', 
              fontSize: '1.125rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              COMING SOON
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div style={{ 
        position: 'absolute', 
        bottom: '2rem', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        display: 'flex', 
        gap: '0.75rem', 
        zIndex: 10 
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            style={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: activeSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              transform: activeSlide === index ? 'scale(1.25)' : 'scale(1)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
