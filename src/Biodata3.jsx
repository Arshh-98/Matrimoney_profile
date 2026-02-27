import React from 'react';
import './Biodata3.css';

const Biodata3 = () => (
  <div className="b3-body">
    <section className="b3-hero">
      <div className="b3-header">
        <h1 className="b3-name">Arshad Ahmed</h1>
        <p style={{marginTop: '20px', letterSpacing: '2px'}}>A LEGACY OF VALUES & MODERN VISION</p>
      </div>
    </section>

    <section className="b3-section">
      <div className="b3-grid">
        <div className="b3-img-frame">
          <img src="https://images.unsplash.com/photo-1519085185750-7ad95c8c7280?auto=format&fit=crop&q=80&w=1974" alt="Arshad" />
        </div>
        <div>
          <h2 className="b3-title">The Profile</h2>
          <div className="b3-grid" style={{gridTemplateColumns: '1fr', gap: '30px'}}>
            <div className="b3-card">
              <span className="b3-label">Identity</span>
              <p style={{fontSize: '1.5rem'}}>28 Years Old • 5'11" • Bangalore</p>
            </div>
            <div className="b3-card">
              <span className="b3-label">Profession</span>
              <p style={{fontSize: '1.5rem'}}>Senior Software Engineer</p>
            </div>
            <div className="b3-card">
              <span className="b3-label">Family Background</span>
              <p style={{fontSize: '1.2rem'}}>Father: Retd. Govt Officer<br/>Mother: Home Maker<br/>Sibling: 1 Younger Brother</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="b3-section" style={{background: 'var(--b3-navy)', color: 'white', textAlign: 'center'}}>
      <h2 style={{fontSize: '3rem', color: 'var(--b3-gold)'}}>Values</h2>
      <p style={{maxWidth: '800px', margin: '40px auto', fontSize: '1.4rem', lineHeight: '1.8'}}>
        "I value profound honesty, cultural roots, and the pursuit of excellence. I am looking for a partner who believes in building a home filled with mutual respect and intellectual growth."
      </p>
    </section>
  </div>
);

export default Biodata3;
