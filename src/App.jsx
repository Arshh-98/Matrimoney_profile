import React, { useState } from "react";
import Biodata from "./Biodata";
import Biodata1 from "./Biodata1";
import Biodata2 from "./Biodata2";
import Biodata3 from "./Biodata3";
import Biodata4 from "./Biodata4";
import Biodata5 from "./Biodata5";
import Biodata6 from "./Biodata6";
import Biodata7 from "./Biodata7";
import "./index.css";

function App() {
  const [variant, setVariant] = useState(0); // Default to the new v2 Zen

  const variants = [
    { name: "Glass (Main)", color: "#ff4d6d" },
    { name: "Pristine", color: "#11161cff" },
    { name: "Avant-Garde", color: "#39ff14" },
    { name: "Luxury Gold", color: "#c5a059" },
    { name: "Cyberpunk", color: "#00ff00" },
    { name: "Zen/Organic v1", color: "#94a684" },
    { name: "Magazine", color: "#000000" },
    { name: "Zen/Organic v2", color: "#708238" }
  ];

  const renderVariant = () => {
    switch (variant) {
      case 0: return <Biodata />;
      case 1: return <Biodata1 />;
      case 2: return <Biodata2 />;
      case 3: return <Biodata3 />;
      case 4: return <Biodata4 />;
      case 5: return <Biodata5 />;
      case 6: return <Biodata6 />;
      case 7: return <Biodata7 />;
      default: return <Biodata7 />;
    }
  };

  return (
    <div className="App">
      {/* Scrollable Switcher Overlay */}
      {/* <div style={{
        position: 'fixed', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 10000,
        display: 'flex',
        gap: '8px',
        padding: '8px',
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(15px)',
        borderRadius: '50px',
        border: '1px solid rgba(255,255,255,0.15)',
        maxWidth: '95vw',
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
        {variants.map((v, i) => (
          <button 
            key={i}
            onClick={() => setVariant(i)}
            style={{
              padding: '10px 18px', 
              borderRadius: '25px', 
              border: 'none', 
              cursor: 'pointer',
              background: variant === i ? v.color : 'rgba(255,255,255,0.05)',
              color: (variant === i && (i === 2 || i === 4)) ? 'black' : 'white',
              fontWeight: 700,
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s'
            }}
          >
            {v.name}
          </button>
        ))}
      </div> */}

      {renderVariant()}
    </div>
  );
}

export default App;
