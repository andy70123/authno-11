'use client';

export default function AdditionalServicesSection() {
  const services = [
    {
      title: "BASIC AUTHENTICATION SERVICE",
      description: "Please choose your preferred authenticator. Prices range from $10 to $30.",
      price: "$10-$30"
    },
    {
      title: "PREMIUM SERVICE OPTION",
      description: "Choose our premium service for 0-8 hour turnaround. This option automatically selects an available senior authenticator to assist you.",
      price: null
    },
    {
      title: "MARKET VALUATION ESTIMATE",
      description: "Our experts analyze current market trends and comparable sales to provide you with an estimated value for your item.",
      price: null
    }
  ];

  return (
    <section style={{
      padding: '6rem 0',
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
          textAlign: 'center',
          marginBottom: '4rem',
          letterSpacing: '0.02em',
          textTransform: 'uppercase'
        }}>
          ADDITIONAL SERVICES
        </h2>

        {/* Services Cards */}
        <div className="additional-services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
                             style={{
                 backgroundColor: '#f8f9fa',
                 padding: '3rem 2rem',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 textAlign: 'center',
                 gap: '2rem',
                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                 transition: 'transform 0.3s ease',
                 minHeight: '350px',
                 justifyContent: 'space-between'
               }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Service Title */}
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontWeight: 'bold',
                color: '#2d2d2d',
                margin: 0,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                lineHeight: 1.3,
                textAlign: 'center'
              }}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: '#2d2d2d',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: '400',
                flex: 1,
                display: 'flex',
                alignItems: 'center'
              }}>
                {service.description}
              </p>

              {/* Price (if available) */}
              {service.price && (
                <div style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontWeight: 'bold',
                  color: '#2d2d2d',
                  marginTop: 'auto'
                }}>
                  {service.price}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
