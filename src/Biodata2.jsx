import React from 'react';
import './Biodata2.css';

const Biodata2 = () => {
  return (
    <div className="b2-body">
      {/* HERO WITH MARQUEE */}
      <section className="b2-hero">
        <div className="b2-marquee">
          ARSHAD AHMED — SOFTWARE ARCHITECT — FITNESS JUNKIE — TRAVELER — ARSHAD AHMED — SOFTWARE ARCHITECT — FITNESS JUNKIE — TRAVELER —
        </div>
        <div className="b2-profile-pic">
           <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974" alt="Arshad" />
        </div>
      </section>

      {/* CORE INFO */}
      <section className="b2-section">
        <h2 className="b2-title">THE<br />STATISTICS</h2>
        <div className="b2-grid">
           <div className="b2-item">
             <span className="b2-label">Vitals</span>
             <span className="b2-value">28 YRS / 5'11"</span>
           </div>
           <div className="b2-item">
             <span className="b2-label">Base</span>
             <span className="b2-value">Bangalore, IN</span>
           </div>
           <div className="b2-item">
             <span className="b2-label">Discipline</span>
             <span className="b2-value">Lead Engineering</span>
           </div>
           <div className="b2-item">
             <span className="b2-label">Heritage</span>
             <span className="b2-value">United Roots</span>
           </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="b2-section">
        <h2 className="b2-title" style={{color: 'var(--b2-pink)'}}>THE<br />FOUNDATION</h2>
        <div style={{fontSize: '3rem', fontWeight: 900, maxWidth: '900px'}}>
             FAMILY IS EVERYTHING. RAISED BY A GOVT OFFICIAL AND A SUPER-MOM. WE VALUE HONESTY OVER EVERYTHING.
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="b2-section" style={{textAlign: 'center', background: 'var(--b2-neon)', color: '#000'}}>
         <h2 style={{fontSize: '10vw', margin: 0}}>CONNECT?</h2>
         <p style={{fontSize: '2rem', fontWeight: 900}}>IF YOU VIBE WITH THE MISSION.</p>
      </section>

      <footer style={{padding: '40px', textAlign: 'center'}}>
        <p>© 2025 ARSHAD AHMED // ALL RIGHTS RESERVED</p>
      </footer>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700;900&display=swap');
      `}</style>
    </div>
  );
};

export default Biodata2;
