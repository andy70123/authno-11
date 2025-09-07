'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "UPLOAD YOUR PHOTOS",
      description: "Simply choose and upload photos following our clear, step-by-step examples.",
      icon: "/Frame 5.png"
    },
    {
      number: "2", 
      title: "AI EXPERT ASSESSMENT",
      description: "Our AI will verify your product and provide an estimated price range.",
      icon: "/Frame 34.png"
    },
    {
      number: "3",
      title: "GET YOUR RESULT", 
      description: "Discover if your item is genuine, find out its estimated price range, and receive a digital certificate.",
      icon: "/Frame 1.png"
    }
  ];

  return (
    <section style={{
      padding: '2rem 0',
      backgroundColor: 'white',
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>


                 {/* Bottom Section - Three Steps */}
         <div className="how-it-works-steps" style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(auto-fit, minmax(410px, 1fr))',
           gap: '3rem',
           alignItems: 'start'
         }}>
          {steps.map((step, index) => (
                         <div
               key={index}
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 textAlign: 'left',
                 gap: '1.5rem',
                 width: '410px'
               }}
             >
                             {/* Step Icon */}
               <div style={{
                 width: '120px',
                 height: '120px',
                 backgroundColor: 'transparent',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 transition: 'transform 0.3s ease',
                 overflow: 'hidden'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'scale(1.05)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'scale(1)';
               }}
               >
                 <img
                   src={step.icon}
                   alt={step.title}
                   style={{
                     width: '80%',
                     height: '80%',
                     objectFit: 'contain'
                   }}
                 />
               </div>

                             {/* Step Number and Title */}
               <div style={{
                 display: 'flex',
                 flexDirection: 'column',
                 gap: '0.5rem',
                 width: '100%',
                 alignItems: 'flex-start'
               }}>
                 <h3 style={{
                   fontSize: '1.5rem',
                   fontWeight: 'bold',
                   color: '#2d2d2d',
                   margin: 0,
                   letterSpacing: '0.05em',
                   textTransform: 'uppercase',
                   textAlign: 'left'
                 }}>
                   {step.number}. {step.title}
                 </h3>
               </div>

               {/* Step Description */}
               <p style={{
                 fontSize: '1rem',
                 color: '#6c757d',
                 lineHeight: 1.6,
                 margin: 0,
                 textAlign: 'left',
                 width: '100%'
               }}>
                 {step.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
