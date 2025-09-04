'use client';

export default function TrustabilitySection() {
  return (
         <section className="trustability-section" style={{
       padding: '4rem 0',
       backgroundColor: 'white',
       minHeight: '70vh',
       display: 'flex',
       alignItems: 'center'
     }}>
      <div className="trustability-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left Content */}
        <div className="trustability-content" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Main Heading */}
                     <h2 style={{
             fontSize: 'clamp(3rem, 8vw, 6rem)',
             fontWeight: 'bold',
             color: '#2d2d2d',
             lineHeight: 1.1,
             letterSpacing: '-0.015em',
             margin: 0
           }}>
            TRUSTABILITY
          </h2>

          {/* Description Paragraphs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: '400'
            }}>
              HARNESS AI TO QUICKLY CONFIRM WHETHER YOUR ITEM IS GENUINE AND PROVIDE AN ACCURATE VALUE ESTIMATE.
            </p>

            <p style={{
              fontSize: '1rem',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: '400'
            }}>
              WE DON&apos;T BUY OR SELL ITEMS SO YOU CAN TRUST OUR VALUATIONS TO BE FAIR, TRANSPARENT, AND FREE FROM BIAS. WE WANT TO KEEP IT EASY FOR YOU AND TAKE AWAY THE GUESSWORK.
            </p>
          </div>

          {/* Coming Soon Button */}
          <div style={{
            marginTop: '1rem'
          }}>
            <button style={{
              backgroundColor: 'transparent',
              color: '#2d2d2d',
              border: 'none',
              padding: '0.5rem 0',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              textUnderlineOffset: '0.25rem',
              textDecorationThickness: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1a1a1a';
              e.currentTarget.style.textDecorationThickness = '3px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#2d2d2d';
              e.currentTarget.style.textDecorationThickness = '2px';
            }}
            >
              COMING SOON
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="trustability-image" style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            height: 'auto'
          }}>
                         <img
               src="/Chanel.png"
               alt="Chanel luxury bags"
               style={{
                 width: '100%',
                 height: 'auto',
                 objectFit: 'contain',
                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
               }}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
