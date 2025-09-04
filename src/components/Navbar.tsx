'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

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
        padding: '0 clamp(1rem, 4vw, 2rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
        gap: '1rem'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}>
            <Image
              src="/Logo.jpg"
              alt="Authno Logo"
              width={120}
              height={40}
              style={{
                height: 'clamp(30px, 6vw, 40px)',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 3vw, 3rem)',
          flexWrap: 'nowrap'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                color: '#000000',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#666666';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
              }}
            >
              {link.name}
            </Link>
                     ))}
        </div>
      </div>
    </nav>
  );
}
