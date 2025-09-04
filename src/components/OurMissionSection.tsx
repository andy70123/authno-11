'use client';

export default function OurMissionSection() {
  return (
    <section style={{
      padding: '2rem 0',
      backgroundColor: 'white',
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="our-mission-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 'bold',
          color: '#2d2d2d',
          margin: 0,
          marginBottom: '3rem',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          lineHeight: 1.1
        }}>
          OUR MISSION
        </h1>

        {/* Mission Description */}
        <p style={{
          fontSize: '1rem',
          color: '#2d2d2d',
          lineHeight: 1.6,
          margin: 0,
          fontWeight: '400',
          maxWidth: '900px'
        }}>
          WE EXIST TO BRING ABSOLUTE CONFIDENCE TO EVERY LUXURY PURCHASE. BY COMBINING CUTTING-EDGE AI WITH DEEP INDUSTRY KNOWLEDGE, WE EMPOWER PEOPLE AND COMPANIES TO MAKE BETTER INFORMED DECISIONS. THAT WAY WE CAN PROTECT AUTHENTICITY, PRESERVE VALUE, AND GIVE PEACE OF MIND WITH EVERY TRANSACTION.
        </p>
      </div>
    </section>
  );
}
