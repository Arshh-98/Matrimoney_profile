import React from 'react';
import './Biodata4.css';

const Biodata4 = () => (
  <div className="b4-body">
    <div className="b4-scanline"></div>
    
    <section className="b4-hero">
      <div className="b4-glitch">ARSHAD_AHMED.sys</div>
      <p style={{marginTop: '20px'}}>/ / VERSION 2.8.0_HEIGHT_511_LOCATION_BLR</p>
      <div className="b4-box" style={{marginTop: '50px', maxWidth: '600px'}}>
        <p> INITIALIZING_BIO_SEQUENCE...</p>
        <p> OCCUPATION: LEAD_SOFTWARE_ARCHITECT</p>
        <p> HOBBIES: [ "FITNESS", "CODE", "ADVENTURE" ]</p>
      </div>
    </section>

    <section className="b4-container">
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
        <div className="b4-box">
          <img className="b4-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" alt="Arshad" />
        </div>
        <div>
          <div className="b4-box">
            <h3>USER_CORE_DATA</h3>
            <p>NAME: ARSHAD AHMED</p>
            <p>AGE: 28</p>
            <p>ORIGIN: NORTH INDIA / BLR BASED</p>
          </div>
          <div className="b4-box">
            <h3>ANCESTRAL_LOGS</h3>
            <p>PATERNAL: GOVT SERVICE_CLASS</p>
            <p>MATERNAL: DOMESTIC_ENGINEER</p>
            <li style={{listStyle: 'none'}}>SUB_UNITS: 1_BROTHER</li>
          </div>
        </div>
      </div>
      
      <div className="b4-box" style={{textAlign: 'center', marginTop: '60px', borderColor: '#ff00ff', color: '#ff00ff'}}>
        <h2>SYSTEM_EXPECTATION: ESTABLISH_STABLE_PARTNERSHIP_PROTOCOL</h2>
        <p style={{marginTop: '20px'}}>SEEKING: INDEPENDENT_VARIABLE_WITH_SHARED_VALUES</p>
      </div>
    </section>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;700&display=swap');
    `}</style>
  </div>
);

export default Biodata4;
