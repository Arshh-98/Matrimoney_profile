import React, { useState, useEffect } from 'react';
import './Biodata7.css';

const Biodata7 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const carouselImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000",
    "https://images.unsplash.com/photo-1519085185750-7ad95c8c7280?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
  ];

  const hobbies = [
    { 
      title: "Fitness & Mindfulness", 
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
      caption: "Balancing physical strength with mental clarity."
    },
    { 
      title: "Nature Photography", 
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
      caption: "Capturing the unspoken beauty of the wilderness."
    },
    { 
      title: "Culinary Arts", 
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
      caption: "Exploring flavors from my roots and around the world."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('b7-visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.b7-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="b7-body">
      {/* BACKGROUND BLOBS */}
      <div className="b7-bg-blobs">
        <div className="b7-blob" style={{width: '600px', height: '600px', background: 'var(--b7-sage-light)', top: '-10%', left: '-10%'}}></div>
        <div className="b7-blob" style={{width: '500px', height: '500px', background: 'var(--b7-clay)', bottom: '10%', right: '0%', animationDelay: '2s'}}></div>
      </div>

      {/* HERO SECTION */}
      <section className="b7-hero">
        <div className="b7-hero-tag">A Life of Purpose</div>
        <h1 className="b7-hero-title b7-split-char">
          { "ARSHAD AHMED".split("").map((char, i) => (
            <span key={i} style={{animationDelay: `${i * 0.1}s`}}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p style={{fontSize: '1.4rem', color: 'var(--b7-clay)', maxWidth: '600px'}}>
           Grounded in tradition, growing with modern vision.
        </p>

        <div className="b7-carousel-container" style={{marginTop: '80px'}}>
           {carouselImages.map((src, i) => (
             <div key={i} className={`b7-slide ${activeSlide === i ? 'active' : ''}`}>
               <img src={src} alt={`Profile ${i}`} />
             </div>
           ))}
        </div>
      </section>

      {/* CORE STATS CARD */}
      <section className="b7-section" style={{padding: '0 20px'}}>
        <div className="b7-card-leaf b7-reveal">
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px', textAlign: 'center'}}>
             <div>
               <h4 style={{color: 'var(--b7-clay)', textTransform: 'uppercase', fontSize: '0.7rem'}}>Dimensions</h4>
               <p style={{fontSize: '2rem', fontWeight: 700}}>28Y / 5'11"</p>
             </div>
             <div>
               <h4 style={{color: 'var(--b7-clay)', textTransform: 'uppercase', fontSize: '0.7rem'}}>Location</h4>
               <p style={{fontSize: '2rem', fontWeight: 700}}>Bangalore</p>
             </div>
             <div>
               <h4 style={{color: 'var(--b7-clay)', textTransform: 'uppercase', fontSize: '0.7rem'}}>Heritage</h4>
               <p style={{fontSize: '2rem', fontWeight: 700}}>North Roots</p>
             </div>
           </div>
        </div>
      </section>

      {/* PHILOSOPHY & CAREER */}
      <section className="b7-section" style={{padding: '120px 20px'}}>
         <div className="b7-grid-details">
            <div className="b7-reveal">
               <h2 style={{fontSize: '3.5rem', marginBottom: '30px'}}>Ambition Meets Serenity</h2>
               <p style={{fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8}}>
                 My journey as a Software Engineer has taught me the value of precision and structure, while my love for nature keeps me humble. I believe in a home built on intellectual synergy and shared laughter.
               </p>
               <div style={{marginTop: '40px', padding: '30px', borderLeft: '3px solid var(--b7-sage-deep)', background: 'rgba(112, 130, 56, 0.05)'}}>
                  <p><strong>Professional:</strong> Senior Engineering Lead</p>
                  <p><strong>Educational:</strong> B.Tech, Computer Science (Honors)</p>
               </div>
            </div>
            <div className="b7-reveal" style={{borderRadius: '40px', overflow: 'hidden', height: '500px'}}>
               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Focus" />
            </div>
         </div>
      </section>

      {/* FAMILY SECTION - ENHANCED */}
      <section className="b7-section" style={{padding: '120px 20px', background: 'var(--b7-sand)', borderRadius: '100px 100px 0 0'}}>
         <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 style={{fontSize: '3.5rem'}}>Roots & Foundation</h2>
            <p>The values that defined the man I have become.</p>
         </div>
         <div className="b7-grid-details">
            <div className="b7-reveal">
               <div className="b7-family-item">
                  <div className="b7-family-circle"></div>
                  <div>
                    <h4 style={{fontSize: '1.2rem'}}>Father: The Pillar</h4>
                    <p style={{opacity: 0.7}}>Retired Government Official. Taught me integrity and the value of disciplined service.</p>
                  </div>
               </div>
               <div className="b7-family-item">
                  <div className="b7-family-circle"></div>
                  <div>
                    <h4 style={{fontSize: '1.2rem'}}>Mother: The Heart</h4>
                    <p style={{opacity: 0.7}}>Home Maker. The source of our family's empathy and cultural grounding.</p>
                  </div>
               </div>
               <div className="b7-family-item">
                  <div className="b7-family-circle"></div>
                  <div>
                    <h4 style={{fontSize: '1.2rem'}}>Sibling: The Companion</h4>
                    <p style={{opacity: 0.7}}>One younger brother, currently charting his own path in higher education.</p>
                  </div>
               </div>
            </div>
            <div className="b7-reveal">
               <div className="b7-card-leaf" style={{borderRadius: '0 60px 0 60px'}}>
                  <h3 style={{marginBottom: '20px'}}>Our Ethos</h3>
                  <p style={{fontStyle: 'italic'}}>
                    "We are a family that celebrates modern dreams while staying tightly knit through our traditional values. Honesty and respect are our non-negotiables."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* HOBBIES WITH CAPTIONS */}
      <section className="b7-section" style={{padding: '120px 20px'}}>
         <h2 style={{fontSize: '3.5rem', textAlign: 'center', marginBottom: '20px'}}>Beyond the Screens</h2>
         <p style={{textAlign: 'center', color: 'var(--b7-clay)'}}>What keeps me inspired when I'm not architecting systems.</p>
         
         <div className="b7-hobbies-grid">
            {hobbies.map((h, i) => (
              <div key={i} className="b7-hobby-card b7-reveal">
                 <img src={h.img} alt={h.title} />
                 <div className="b7-hobby-overlay">
                    <h3 style={{color: 'white', fontSize: '1.5rem'}}>{h.title}</h3>
                    <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem'}}>{h.caption}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="b7-section b7-reveal" style={{textAlign: 'center', padding: '150px 20px'}}>
         <h2 style={{fontSize: '4rem', fontWeight: 900, marginBottom: '40px'}}>Begin a New Chapter</h2>
         <button style={{
           background: 'var(--b7-sage-deep)', 
           color: 'white', 
           border: 'none', 
           padding: '20px 50px', 
           borderRadius: '100px', 
           fontSize: '1.2rem',
           fontWeight: 700,
           cursor: 'pointer',
           boxShadow: '0 20px 40px rgba(112, 130, 56, 0.3)'
         }}>
           Start a Conversation
         </button>
      </section>

      <footer style={{padding: '60px', textAlign: 'center', borderTop: '1px solid var(--b7-sand)'}}>
         <p>© 2025 ARSHAD AHMED | DESIGNED WITH SOUL</p>
      </footer>

      <style>{`
        .b7-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s var(--b7-ease);
        }
        .b7-reveal.b7-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Biodata7;
