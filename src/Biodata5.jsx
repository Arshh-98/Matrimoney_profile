import React from 'react';
import './Biodata5.css';

const Biodata5 = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1519085185750-7ad95c8c7280?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
  ];

  return (
    <div className="b5-body">
      <div className="b5-blob"></div>
      
      <section className="b5-hero">
        <div className="b5-content">
          <span style={{letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem'}}>Serenity & Strength</span>
          <h1 className="b5-title">Arshad Ahmed</h1>
          <p style={{fontSize: '1.2rem', marginTop: '20px', color: 'var(--b5-dark)', opacity: 0.7}}>
            Software Engineer by day, Nature explorer by heart.
          </p>
        </div>
      </section>

      {/* HORIZONTAL GALLERY */}
      <section className="b5-section">
        <h2 style={{textAlign: 'center', marginBottom: '50px', fontWeight: 300}}>Glimpses of Life</h2>
        <div style={{display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '40px', scrollSnapType: 'x mandatory'}}>
          {images.map((img, i) => (
            <div key={i} style={{flex: '0 0 80%', scrollSnapAlign: 'center', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)'}}>
              <img src={img} style={{width: '100%', height: '500px', objectFit: 'cover'}} alt={`Life ${i}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="b5-section">
        <div className="b5-flex">
          <div className="b5-card">
            <h3>Core Vitals</h3>
            <div style={{marginTop: '30px', display: 'grid', gap: '15px'}}>
              <p><strong>Age:</strong> 28</p>
              <p><strong>Height:</strong> 5'11"</p>
              <p><strong>Work:</strong> Senior Lead, Engineering</p>
              <p><strong>Family:</strong> Close-knit, value-centered</p>
            </div>
          </div>
          <div style={{flex: 1}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 300}}>A Simple Life,<br/>High Thinking.</h2>
            <p style={{marginTop: '30px', lineHeight: '1.8'}}>
              I find peace in the sound of the ocean and the focus of a long run. Looking for a partner who values quiet moments as much as great ambitions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biodata5;
