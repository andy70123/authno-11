'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Services', href: '/services' },
    { name: 'About us', href: '/our-story' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    }}>
                   <div className="navbar-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem 0 130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px'
      }}>
                {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#000000',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#666666';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
              }}
            >
              {link.name}
            </a>
                     ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          <div style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#000000',
            transition: 'all 0.3s ease'
          }} />
          <div style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#000000',
            transition: 'all 0.3s ease'
          }} />
          <div style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#000000',
            transition: 'all 0.3s ease'
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e5e5e5',
          padding: '1rem 2rem',
          display: 'block'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                display: 'block',
                color: '#000000',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '0.75rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
                     ))}
        </div>
      )}
    </nav>
  );
}
