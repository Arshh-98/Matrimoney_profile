import React, { useEffect } from 'react';
import './Biodata1.css';

const Biodata1 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.b1-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="b1-body">
      {/* HERO */}
      <section className="b1-hero">
        <div className="b1-reveal">
          <span className="b1-badge">Seeking a life partner</span>
          <h1 className="b1-title">Arshad Ahmed</h1>
          <p className="b1-subtitle">A blend of tradition, tech, and a love for the great outdoors.</p>
        </div>
      </section>

      {/* VISUALS */}
      <section className="b1-image-grid b1-reveal">
        <div className="b1-img-wrapper">
          <img src="https://images.unsplash.com/photo-1519085185750-7ad95c8c7280?auto=format&fit=crop&q=80&w=1974" alt="Professional" />
        </div>
        <div className="b1-img-wrapper">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070" alt="Nature" />
        </div>
        <div className="b1-img-wrapper">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" alt="Code" />
        </div>
      </section>

      {/* DETAILS */}
      <div className="b1-grid">
        <div className="b1-card b1-reveal">
          <h3 style={{marginBottom: '20px', fontSize: '1.5rem'}}>Basic Essence</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px'}}>
             <div className="b1-stat-circle">
               <span style={{fontSize: '1.5rem', fontWeight: 700}}>28</span>
               <span style={{fontSize: '0.7rem', color: 'var(--b1-text-secondary)'}}>YEARS</span>
             </div>
             <div className="b1-stat-circle">
               <span style={{fontSize: '1.5rem', fontWeight: 700}}>5'11</span>
               <span style={{fontSize: '0.7rem', color: 'var(--b1-text-secondary)'}}>HEIGHT</span>
             </div>
          </div>
          <p style={{marginTop: '20px', color: 'var(--b1-text-secondary)'}}>
            Based in Bangalore. Born into a respected family with deep roots in cultural values.
          </p>
        </div>

        <div className="b1-card b1-reveal">
          <h3 style={{marginBottom: '20px', fontSize: '1.5rem'}}>Profession</h3>
          <p style={{fontWeight: 600, color: 'var(--b1-primary)'}}>Senior Software Engineer</p>
          <p style={{marginTop: '10px'}}>Graduated with honors in CS. Currently architecting scalable systems for a global tech leader.</p>
        </div>

        <div className="b1-card b1-reveal">
          <h3 style={{marginBottom: '20px', fontSize: '1.5rem'}}>Family Profile</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '10px'}}><strong>Father:</strong> Retd. Govt Officer</li>
            <li style={{marginBottom: '10px'}}><strong>Mother:</strong> Home Maker</li>
            <li style={{marginBottom: '10px'}}><strong>Sibling:</strong> 1 Younger Brother</li>
          </ul>
        </div>

        <div className="b1-card b1-reveal" style={{background: 'var(--b1-primary)', color: 'white'}}>
          <h3 style={{marginBottom: '20px', fontSize: '1.5rem'}}>Expectations</h3>
          <p>Looking for someone who is independent yet family-oriented, appreciates intellectual conversations, and shares a love for travel and fitness.</p>
        </div>
      </div>

      <footer style={{padding: '60px', textAlign: 'center', color: 'var(--b1-text-secondary)'}}>
        <p>Curated with care | Arshad Ahmed</p>
      </footer>
    </div>
  );
};

export default Biodata1;
