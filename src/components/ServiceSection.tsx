'use client';

export default function ServiceSection() {
  return (
    <section style={{
      padding: '6rem 0',
      backgroundColor: '#000000',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        <div className="service-container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Column - Service Details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {/* Service Heading */}
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              letterSpacing: '0.02em'
            }}>
              OUR SERVICE
            </h2>

            {/* Service Offering */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 'normal',
                color: 'white',
                margin: 0,
                letterSpacing: '0.02em',
                lineHeight: 1.2
              }}>
                $30 BASIC AUTHENTICATION
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(.8rem, 2vw, 1rem)',
                color: 'white',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: '400'
              }}>
                INCLUDES AN AUTHENTIC OR COUNTERFEIT DETERMINATION WITHIN 24 HOURS OF RECEIVING SUFFICIENT IMAGES.
              </p>
            </div>

            {/* Call to Action */}
            <div style={{
              marginTop: '1rem'
            }}>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
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
                textDecorationThickness: '1px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#cccccc';
                e.currentTarget.style.textDecorationThickness = '3px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.textDecorationThickness = '2px';
              }}
              >
                START AUTHENTICATION
              </button>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Statistics Heading */}
            <h2 style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: '300',
              color: 'white',
              margin: 0,
              letterSpacing: '0.02em'
            }}>
              AUTHENTICATIONS
            </h2>

            {/* Statistics Number */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: '300',
                color: 'white',
                letterSpacing: '0.02em',
                lineHeight: 1
              }}>
                2,208,263
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
