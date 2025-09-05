'use client';

export default function ServicesHero() {
  return (
    <section style={{
      padding: '8rem 0',
      backgroundColor: 'white',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="services-hero-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Left Section - Text Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Main Heading */}
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2d2d2d',
            margin: 0,
            letterSpacing: '0%',
            textTransform: 'uppercase',
            lineHeight: 1.1
          }}>
            SERVICES
          </h1>

          {/* Sub-heading */}
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#2d2d2d',
            margin: 0,
            letterSpacing: '0%',
            lineHeight: 1.2
          }}>
            $30 BASIC AUTHENTICATION
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#2d2d2d',
            lineHeight: 1.6,
            margin: 0,
            fontWeight: '400',
            maxWidth: '600px'
          }}>
            ALL AUTHENTICATIONS START AT A BASE PRICE OF $10, WHICH INCLUDES CHECKING IF YOUR ITEM IS REAL OR FAKE BASED ON THE PHOTOS YOU SEND. PREMIUM SERVICES INCLUDING GETTING AN ESTIMATED PRICE OR FASTER PROCESSING ARE AVAILABLE FOR AN ADDITIONAL FEE. SELECTING A SENIOR AUTHENTICATOR WILL INCLUDE A CERTIFICATE IF DEEMED AUTHENTIC.
          </p>

          {/* CTA Button */}
          <div style={{
            marginTop: '1rem'
          }}>
            <button style={{
              backgroundColor: '#2d2d2d',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              borderRadius: '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2d2d2d';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              START AUTHENTICATION
            </button>
          </div>
        </div>

                          {/* Right Section - Image */}
         <div style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: '500px',
           paddingLeft: '2rem'
         }}>
           <img
             src="/image9.png"
             alt="Authentication service illustration"
             style={{
               maxWidth: '100%',
               maxHeight: '100%',
               objectFit: 'contain'
             }}
           />
         </div>
      </div>
    </section>
  );
}
