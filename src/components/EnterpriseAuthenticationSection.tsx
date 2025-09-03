'use client';

export default function EnterpriseAuthenticationSection() {
  return (
    <section style={{
      padding: '6rem 0',
      backgroundColor: 'white',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="enterprise-auth-container" style={{
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
             fontSize: 'clamp(1.4rem, 3vw, 2rem)',
             fontWeight: 'bold',
             color: '#2d2d2d',
             margin: 0,
             letterSpacing: '0.02em',
             textTransform: 'uppercase',
             lineHeight: 1.1
           }}>
            OUR ENTERPRISE AUTHENTICATION
          </h2>

                     {/* Sub-heading */}
           <h3 style={{
             fontSize: 'clamp(1.4rem, 3vw, 2rem)',
             fontWeight: 'bold',
             color: '#2d2d2d',
             margin: 0,
             letterSpacing: '0.02em',
             lineHeight: 1.1,
             textTransform: 'uppercase'
           }}>
            SELL FASTER & FOR HIGHER PRICES
          </h3>

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
              SOLUTIONS ARE TAILORED FOR BUSINESSES THAT NEED RELIABLE AND EFFICIENT AUTHENTICATION SERVICES FOR LUXURY GOODS. YOU'LL GAIN PRIORITY ACCESS TO OUR EXPERIENCED SENIOR AUTHENTICATORS, WHO PROVIDE THE HIGHEST LEVEL OF VERIFICATION AND MOST ACCURATE PRICE ESTIMATES.
            </p>

            <p style={{
                             fontSize: '1rem',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: '400'
            }}>
              CONTACT US TODAY TO LEARN MORE ABOUT HOW WE CAN SUPPORT YOUR BUSINESS IN MAINTAINING THE HIGHEST STANDARDS OF AUTHENTICITY.
            </p>
          </div>

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
              LEARN MORE
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
             src="/image10.png"
             alt="Enterprise authentication luxury handbags display"
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
