'use client';

import { useRouter } from 'next/navigation';

export default function AboutSection() {
  const router = useRouter();
  const authenticators = [
    {
      name: "H.BIRKIN",
      description: "Hermes expert of over 20 years and global Hermes authentication coach",
      rating: "5.0/5",
      rate: "$30/hr",
      image: "/Ellipse 97.png"
    },
    {
      name: "LILIAN JAMES", 
      description: "Top Chanel authenticator running a Chanel authentication shop for over 15 years",
      rating: "5.0/5",
      rate: "$30/hr",
      image: "/Ellipse 98.png"
    },
    {
      name: "FRANCIS",
      description: "Christian Dior and Loro Piana expert formerly performing authentication for LVMH",
      rating: "5.0/5", 
      rate: "$30/hr",
      image: "/Ellipse 99.png"
    },
    {
      name: "LUKAB",
      description: "Streetwear and sneaker expert authenticator previously at StockX",
      rating: "5.0/5",
      rate: "$30/hr",
      image: "/Ellipse 100.png"
    }
  ];

  return (
    <section style={{
      paddingTop: '6rem',
      paddingBottom: '0',
      backgroundColor: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* About Us Section */}
        <div className="about-main-container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          {/* Left Content */}
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
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              margin: 0
            }}>
              ABOUT US
            </h2>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: '400'
            }}>
              WE HELP INDIVIDUALS, DEALERS, AND GLOBAL BRANDS FEEL CONFIDENT AND ASSURED BY COMBINING OUR ADVANCED AI EXPERTISE WITH YEARS OF INDUSTRY EXPERIENCE. OUR SOLE FOCUS IS DELIVERING THE MOST TRUSTED, ACCURATE LUXURY GOODS AUTHENTICATION.
            </p>

            {/* Learn More Link */}
            <div style={{
              marginTop: '1rem'
            }}>
              <button 
                onClick={() => router.push('/our-story')}
                style={{
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
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '4/3'
            }}>
                             <img
                 src="/Image 5.png"
                 alt="About us team"
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                 }}
               />
            </div>
          </div>
        </div>

        

        {/* Meet Our Authenticators Section */}
        <div style={{
          textAlign: 'center'
        }}>
          {/* Main Heading */}
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: '#2d2d2d',
            textAlign: 'center',
            marginBottom: '4rem',
            letterSpacing: '0.02em'
          }}>
            MEET OUR AUTHENTICATORS
          </h2>

          {/* Authenticator Cards */}
          <div className="authenticator-cards-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {authenticators.map((authenticator, index) => (
              <div
                key={index}
                                 style={{
                   backgroundColor: '#f8f9fa',
                   padding: '2rem',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   gap: '1.5rem',
                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                   transition: 'transform 0.3s ease',
                   height: '100%',
                   justifyContent: 'space-between'
                 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                                 {/* Profile Image */}
                 <div style={{
                   width: '80px',
                   height: '80px',
                   borderRadius: '50%',
                   overflow: 'hidden',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}>
                   <img
                     src={authenticator.image}
                     alt={authenticator.name}
                     style={{
                       width: '100%',
                       height: '100%',
                       objectFit: 'cover'
                     }}
                   />
                 </div>

                {/* Name */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#2d2d2d',
                  textAlign: 'center',
                  margin: 0,
                  letterSpacing: '0.05em'
                }}>
                  {authenticator.name}
                </h3>

                                 {/* Description */}
                 <p style={{
                   fontSize: '0.9rem',
                   color: '#6c757d',
                   textAlign: 'center',
                   margin: 0,
                   lineHeight: 1.5,
                   flex: 1
                 }}>
                   {authenticator.description}
                 </p>

                 {/* Bottom Section - Rating and Button */}
                 <div style={{
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   gap: '1rem',
                   width: '100%'
                 }}>
                   {/* Rating and Rate */}
                   <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '1rem'
                   }}>
                     <div style={{
                       display: 'flex',
                       alignItems: 'center',
                       gap: '0.25rem'
                     }}>
                       <span style={{
                         fontSize: '1rem',
                         fontWeight: 'bold',
                         color: '#2d2d2d'
                       }}>
                         {authenticator.rating}
                       </span>
                       <span style={{
                         fontSize: '1rem',
                         color: '#fbbf24'
                       }}>
                         ★
                       </span>
                     </div>
                     <span style={{
                       fontSize: '1rem',
                       fontWeight: 'bold',
                       color: '#2d2d2d'
                     }}>
                       {authenticator.rate}
                     </span>
                   </div>

                   {/* View More Button */}
                   <button style={{
                     backgroundColor: '#2d2d2d',
                     color: 'white',
                     border: 'none',
                     padding: '0.75rem 1.5rem',
                     fontSize: '0.9rem',
                     fontWeight: '600',
                     cursor: 'pointer',
                     transition: 'all 0.3s ease',
                     textTransform: 'uppercase',
                     letterSpacing: '0.05em',
                     width: '60%'
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
                     View more
                   </button>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div style={{
!          marginTop: '6rem'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 0rem',
            textAlign: 'left'
          }}>
            {/* Main Heading */}
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#2d2d2d',
              marginBottom: '2rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}>
              HOW IT WORKS
            </h2>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#2d2d2d',
              lineHeight: 1.6,
              marginBottom: '3rem',
              fontWeight: '400',
              maxWidth: '600px'
            }}>
              HASSLE-FREE AUTHENTICATION IN JUST 3 STEPS. OUR USER-FRIENDLY PROCESS LETS YOU GET RESULTS IN AS LITTLE AS 1 HOUR, FROM ANYWHERE IN THE WORLD.
            </p>

            {/* Coming Soon Button */}
            <div style={{
              marginTop: '2rem'
            }}>
              <button 
                onClick={() => router.push('/how-it-works')}
                style={{
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
        </div>
      </div>
    </section>
  );
}
