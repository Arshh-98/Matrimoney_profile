import React, { useEffect } from 'react';
import './Biodata6.css';

const Biodata6 = () => {
  return (
    <div className="b6-body">
      {/* MAGAZINE HEADER */}
      <section className="b6-hero">
        <div className="b6-hero-text">
          <div className="b6-v-text">ISSUE NO. 01 — SPRING 2025</div>
          <h1 className="b6-main-title">ARSHAD<br/>AHMED</h1>
          <div style={{marginTop: '30px', maxWidth: '300px'}}>
             <p><strong>A Portrait of Ambition:</strong> How a Software Engineer balances high-stakes tech with family heritage.</p>
          </div>
        </div>
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <img className="b6-hero-img" src="https://images.unsplash.com/photo-1519085185750-7ad95c8c7280?auto=format&fit=crop&q=80&w=2000" alt="Main Model" />
          <div style={{
            position: 'absolute', 
            bottom: '20px', 
            right: '20px', 
            background: 'white', 
            padding: '20px', 
            fontSize: '0.7rem', 
            fontWeight: 800
          }}>
            THE LEAD ARCHITECT — BANGALORE
          </div>
        </div>
      </section>

      {/* PHOTO EDITORIAL GRID */}
      <section style={{padding: '100px 5%'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
           <div style={{gridColumn: 'span 2'}}>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1500" style={{width: '100%', height: '600px', objectFit: 'cover'}} alt="Landscape" />
           </div>
           <div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" style={{width: '100%', height: '600px', objectFit: 'cover'}} alt="Portrait" />
           </div>
           <div>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" style={{width: '100%', height: '400px', objectFit: 'cover'}} alt="Work" />
           </div>
           <div style={{gridColumn: 'span 2', background: '#f5f5f5', padding: '60px', display: 'flex', alignItems: 'center'}}>
              <p style={{fontSize: '2rem', fontWeight: 300, lineStyle: 'italic'}}>
                "I believe the quality of your life is determined by the quality of your relationships."
              </p>
           </div>
        </div>
      </section>

      {/* THE MANIFESTO */}
      <section className="b6-grid">
        <div className="b6-box-1">
           <span className="b6-big-num">28</span>
           <h3 style={{fontSize: '3rem', marginTop: '-40px'}}>YEARS OF FOCUS</h3>
           <p style={{marginTop: '20px'}}>Raised in a family where integrity is the first priority. A career built on constant learning and leadership at Bangalore's top tech firms.</p>
        </div>
        <div className="b6-box-2">
           <h4 style={{textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px'}}>Family & Roots</h4>
           <div style={{borderTop: '2px solid black', paddingTop: '20px'}}>
              <p>Father: Retd. Govt Officer (Grade A)</p>
              <p>Mother: The Emotional Anchor</p>
              <p>Sibling: One, Following the Lead</p>
           </div>
        </div>
      </section>

      <footer style={{padding: '60px', borderTop: '1px solid #eee', textAlign: 'center'}}>
         <p style={{fontSize: '0.8rem', letterSpacing: '4px'}}>© 2025 THE ARSHAD AHMED EDITORIAL</p>
      </footer>
    </div>
  );
};

export default Biodata6;
