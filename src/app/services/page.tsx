import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section style={{
        padding: '8rem 0',
        backgroundColor: 'white',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            color: '#2d2d2d',
            margin: 0,
            marginBottom: '2rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1.1
          }}>
            COMING SOON
          </h1>
          
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            margin: 0,
            lineHeight: 1.6,
            fontWeight: '400'
          }}>
            Our services are currently under development. Stay tuned for updates!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
