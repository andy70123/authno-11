'use client';

export default function AboutOurFoundersSection() {
  return (
    <section style={{
      padding: '2rem 0',
      backgroundColor: 'white',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="about-founders-container" style={{
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
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: '#2d2d2d',
            margin: 0,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1.2
          }}>
            ABOUT OUR FOUNDERS
          </h2>

          {/* Founder Name */}
          <h3 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#2d2d2d',
            margin: 0,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1.2
          }}>
            ANDY LAU
          </h3>

          {/* Founder Title */}
          <h4 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 'normal',
            fontStyle: 'italic',
            color: '#2d2d2d',
            margin: 0,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1.2
          }}>
            FOUNDER
          </h4>

          {/* Description Paragraph */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#2d2d2d',
            lineHeight: 1.6,
            margin: 0,
            fontWeight: '400',
            width: '100%'
          }}>
            ANDY LAU'S JOURNEY INTO THE SECONDHAND MARKET BEGAN IN 1999 WITH AN EBAY ACCOUNT AND A VINTAGE LOUIS VUITTON BAG. EBAY'S AUTHENTICATION PROCESS EMPOWERED HIM TO SELL THRIFT ITEMS WITH CONFIDENCE, SPARKING A PASSION FOR LUXURY AUTHENTICATION. THIS EXPERIENCE LED TO A CAREER DEDICATED TO HELPING OTHERS NAVIGATE THE COMPLEX WORLD OF LUXURY GOODS WITH TRUST AND EXPERTISE.
          </p>
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
            src="/image 11.png"
            alt="Our founders team collaboration"
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
