'use client';

export default function AboutUsSection() {
  return (
    <section style={{
      padding: '2rem 0',
      backgroundColor: 'white',
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
        {/* Main Heading */}
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'bold',
          color: '#2d2d2d',
          margin: 0,
          marginBottom: '3rem',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          lineHeight: 1.2
        }}>
          ABOUT US
        </h2>

        {/* Description Paragraph */}
                 <p style={{
           fontSize: 'clamp(1rem, 2vw, 1.25rem)',
           color: '#2d2d2d',
           lineHeight: 1.6,
           margin: 0,
           marginBottom: '4rem',
           fontWeight: '400',
           width: '100%'
         }}>
          FOUNDED BY A TEAM PASSIONATE ABOUT LUXURY, TECHNOLOGY, AND TRUST, WE'VE SPENT YEARS PERFECTING THE ART AND SCIENCE OF AUTHENTICATION. OUR SPECIALISTS WORK HAND-IN-HAND WITH ADVANCED AI SYSTEMS TO DELIVER RESULTS YOU CAN DEPEND ON.
        </p>

                 {/* Two Images Side by Side */}
         <div className="about-us-images-grid" style={{
           display: 'grid',
           gridTemplateColumns: '1fr 1fr',
           gap: '4rem',
           alignItems: 'center',
           justifyContent: 'space-between'
         }}>
          {/* Left Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
                         <img
               src="/image 11.png"
               alt="Our team working together"
               style={{
                 maxWidth: '100%',
                 height: 'auto',
                 objectFit: 'cover',
                 borderRadius: '0'
               }}
             />
          </div>

          {/* Right Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
                         <img
               src="/image 12.png"
               alt="Our team collaboration"
               style={{
                 maxWidth: '100%',
                 height: 'auto',
                 objectFit: 'cover',
                 borderRadius: '0'
               }}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
