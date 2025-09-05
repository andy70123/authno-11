'use client';

export default function WhatWeAuthenticateSection() {
  const categories = [
    {
      image: '/image 1.png',
      label: 'HANDBAGS'
    },
    {
      image: '/image 2.png',
      label: 'SNEAKERS'
    },
    {
      image: '/image 3.png',
      label: 'CLOTHING'
    },
    {
      image: '/image 4.png',
      label: 'OTHERS'
    }
  ];

  return (
         <section style={{
       padding: '6rem 0',
       backgroundColor: '#212529',
       minHeight: '80vh',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center'
     }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        {/* Main Heading */}
                         <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          letterSpacing: '0%',
          textTransform: 'uppercase',
          lineHeight: 1.1
        }}>
          WHAT WE AUTHENTICATE
        </h2>

        {/* Cards Grid */}
        <div className="auth-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {categories.map((category, index) => (
                         <div
               key={index}
               style={{
                 backgroundColor: 'transparent',
                 padding: '1rem',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: '1.5rem',
                 transition: 'transform 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-5px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
               }}
             >
                             {/* Image */}
               <div style={{
                 width: '100%',
                 height: '385px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 overflow: 'hidden'
               }}>
                <img
                  src={category.image}
                  alt={category.label}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

                             {/* Label */}
               <h3 style={{
                 fontSize: '.8rem',
                 fontWeight: 'semi-bold',
                 color: 'white',
                 textAlign: 'center',
                 margin: 0,
                 letterSpacing: '0.05em',
                 textTransform: 'uppercase'
               }}>
                 {category.label}
               </h3>
            </div>
          ))}
        </div>

        {/* More Coming Soon */}
        <div style={{
          textAlign: 'center'
        }}>
                                           <span style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '0%',
              textTransform: 'uppercase'
            }}>
            MORE COMING SOON
          </span>
        </div>
      </div>
    </section>
  );
}
