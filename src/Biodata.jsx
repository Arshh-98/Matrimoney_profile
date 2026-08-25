import React, { useEffect, useState } from "react";
import "./Biodata.css";

const Biodata = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Album modal state
  const [showAlbum, setShowAlbum] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const albumImages = [
    `${import.meta.env.BASE_URL}PXL_20230311_121315152.webp`,
    `${import.meta.env.BASE_URL}IMG_20260219_233805_442.webp`,
    `${import.meta.env.BASE_URL}arshad_riding.webp`,
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop", // Music
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", // Fitness
  ];

  // Auto carousel effect
  useEffect(() => {
    if (!showAlbum) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % albumImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showAlbum, albumImages.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % albumImages.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + albumImages.length) % albumImages.length,
    );
  };

  return (
    <div className="biodata-body">
      {/* <button className="sticky-album-btn" onClick={() => setShowAlbum(true)}>
        View Album
      </button> */}
      {/* BACKGROUND DECOR */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* HERO SECTION */}
      <section className="bio-hero">
        <div className="hero-overlay-text">
          <span className="hero-label animate-on-scroll">
            Professional & Grounded
          </span>
          <h1 className="hero-title animate-on-scroll">
            ARSHAD
            <br />
            AHMED
          </h1>
          <p className="hero-description animate-on-scroll">
            Software Engineer | Musician | Fitness Enthusiast
          </p>
          <div className="scroll-indicator">
            <div className="mouse"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
        <div className="hero-image-vessel">
          <img
            src={`${import.meta.env.BASE_URL}PXL_20230311_121315152.webp`}
            // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            alt="Arshad Portrait"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="section-padding container">
        <div className="glass-card animate-on-scroll">
          <div className="stat-grid">
            <div className="stat-item">
              <span className="stat-label">Age</span>
              <span className="stat-value">27</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Height</span>
              <span className="stat-value">5'7"</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Location</span>
              <span className="stat-value">Bangalore</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Mother Tongue</span>
              <span className="stat-value">Urdu</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="section-padding container">
        <div className="flex-layout">
          <div className="content-half animate-on-scroll">
            <h2 className="section-title">Life Philosophy</h2>
            <p className="big-text">
              "I believe in a life of balance—pursuing high-impact work while
              staying deeply connected to family and values. For me, marriage is
              about building a legacy of growth and mutual respect."
            </p>
          </div>
          <div className="visual-half animate-on-scroll">
            <div className="visual-box animate-float">
              <img src={`${import.meta.env.BASE_URL}IMG_20260219_233805_442.webp`} alt="Mountain" />
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & CAREER */}
      <section className="section-padding container bg-darker">
        <h2 className="section-title text-center animate-on-scroll">
          Career & Education
        </h2>
        <div className="timeline-container">
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <h3>Senior Software Engineer</h3>
              <p className="dim-text">Gether | 2022 - Present</p>
              <p>
                Product based company based in Bangalore. Specializing in 3D
                Virtual Worlds.
              </p>
            </div>
          </div>
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <h3>B.Tech in Computer Science</h3>
              <p className="dim-text">Presidency University | 2017 - 2021</p>
              <p>Graduated with honors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES & HOBBIES TAGS */}
      <section className="section-padding container">
        <div className="glass-card animate-on-scroll">
          <h2 className="section-title">Core Traits</h2>
          <div className="tag-cloud">
            <span className="tag">Family First</span>
            <span className="tag">Instrumentalist</span>
            <span className="tag">Vocalist</span>
            <span className="tag">Fitness Enthusiast</span>
            <span className="tag">Tech Savvy</span>
            <span className="tag">Culinary Explorer</span>
            <span className="tag">Animal Lover</span>
            <span className="tag">Traveller</span>
            <span className="tag">Biker</span>
          </div>
        </div>
      </section>

      {/* DETAILED HOBBIES SECTION */}
      <section className="section-padding container hobbies-detailed">
        <h2 className="section-title text-center animate-on-scroll margin64">
          Interests
        </h2>

        {/* Row 1: Photo Left, Description Right */}
        <div className="hobby-row animate-on-scroll">
          <div className="hobby-image">
            <img src={`${import.meta.env.BASE_URL}arshad_with_guitar.webp`} alt="Music" />
          </div>
          <div className="hobby-desc">
            <h3>Musical Soul</h3>
            <p>
              I Sing & play two instruments. My Dad being a very good vocalist
              inspired me to explore the world of music. Being part of a college
              band was a defining experience that continues to influence my
              creative outlook.
            </p>
          </div>
        </div>

        {/* Row 2: Description Left/Above, Photo Right (As requested: description and photo on the right below) */}
        {/* User said: "photo on the left, description on right and then below description and photo on the right" */}
        <div className="hobby-row  animate-on-scroll">
          <div className="hobby-desc">
            <h3>Fitness & Discipline</h3>
            <p>
              I believe in staying physically active to maintain mental clarity.
              Fitness is more than just the gym; it's about the discipline and
              consistency that translates into every aspect of my professional
              and personal life. A healthy body houses a healthy mind.
            </p>
          </div>
          <div className="hobby-image">
            <img src={`${import.meta.env.BASE_URL}arshad_fitness.webp`} alt="Fitness" />
          </div>
        </div>
        <div className="hobby-row reverse  animate-on-scroll">
          <div className="hobby-desc">
            <h3>Travel</h3>
            <p>
              Travelling for me isn't just to get a break but to Learn & Evolve.
              Most of the things I've learnt come from one of the best treks
              I've been on, for instance the Patalsu Trek in Manali you see in
              the picture was one of them.
            </p>
          </div>
          <div className="hobby-image">
            <img src={`${import.meta.env.BASE_URL}arshad_trek.webp`} alt="Travel" />
          </div>
        </div>
        <div className="hobby-row   animate-on-scroll">
          <div className="hobby-desc">
            <h3>Biking</h3>
            <p>
              The open road is my sanctuary. Biking isn't just a hobby; it’s an
              expression of freedom and a test of endurance. It teaches me to
              stay present, embrace the elements, and enjoy the journey as much
              as the destination.
            </p>
          </div>
          <div className="hobby-image">
            <img src={`${import.meta.env.BASE_URL}arshad_riding.webp`} alt="Biking" />
          </div>
        </div>
      </section>

      {/* FAMILY SECTION */}
      <section className="section-padding container margin64">
        <div
          className="glass-card animate-on-scroll"
          style={{ textAlign: "center" }}>
          <h2 className="section-title">Family Roots</h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "var(--text-dim)",
            }}>
            Raised in a value-driven, close-knit family. Father is a Retired
            Professional completed his tenure in Saudi Lighting Riyadh as a
            Quality Inspector and Mother is a Govt Teacher. I have one younger
            sibling who is working at an MNC. We value tradition, honesty, and
            modern education.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding container text-center margin64">
        <div className="reveal animate-on-scroll">
          <h2 style={{ fontSize: "3rem", marginBottom: "30px" }}>
            Let's Start a Conversation
          </h2>
          <p className="dim-text">
            If our values align, I'd love to hear from you.
          </p>
          <div className="cta-button-group" style={{ marginTop: "40px" }}>
            <button
              className="cta-primary"
              onClick={() => setShowContact(true)}>
              Get In Touch
            </button>
            {/* <a
              href="/Arshad_Ahmed_Biodata.pdf"
              download
              className="cta-secondary"
              style={{ textDecoration: "none", display: "inline-block" }}>
              Download PDF
            </a> */}
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Arshad Ahmed</p>
      </footer>

      {/* ADDING ADDITIONAL DYNAMIC STYLES FOR ANIMATIONS */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .bg-glow-1 {
          position: fixed;
          top: -10%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(255, 77, 109, 0.1) 0%, transparent 70%);
          z-index: -1;
        }
        .bg-glow-2 {
          position: fixed;
          bottom: -10%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(114, 9, 183, 0.1) 0%, transparent 70%);
          z-index: -1;
        }
        .section-padding { padding: 80px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .flex-layout { display: flex; align-items: center; gap: 60px; }
        .content-half { flex: 1.5; }
        .visual-half { flex: 1; }
        .big-text { font-size: 1.8rem; font-weight: 300; line-height: 1.4; color: var(--text-main); }
        .visual-box { width: 100%; aspect-ratio: 1; border-radius: 30px; overflow: hidden; }
        .visual-box img { width: 100%; height: 100%; object-fit: cover; }
        .timeline-container { position: relative; padding-left: 40px; margin-top: 50px; }
        .timeline-container::before { content: ''; position: absolute; left: 0; top: 0; width: 2px; height: 100%; background: var(--glass-border); }
        .timeline-item { position: relative; margin-bottom: 40px; }
        .timeline-dot { position: absolute; left: -45px; top: 20px; width: 12px; height: 12px; background: var(--primary-accent); border-radius: 50%; box-shadow: 0 0 10px var(--primary-accent); }
        .cta-primary { 
          background: linear-gradient(90deg, var(--primary-accent), var(--secondary-accent));
          border: none; padding: 15px 40px; border-radius: 50px; color: white; font-weight: 700;
          cursor: pointer; transition: 0.3s; margin-right: 20px;
        }
        .cta-secondary {
          background: transparent; border: 1px solid var(--text-dim); padding: 15px 40px; border-radius: 50px;
          color: white; font-weight: 700; cursor: pointer; transition: 0.3s;
        }
        .cta-primary:hover { transform: scale(1.05); filter: brightness(1.1); }
        .text-center { text-align: center; }
        .section-title { font-size: 3rem; margin-bottom: 30px; font-weight: 800; color: white; }
        .dim-text { color: var(--text-dim); margin-bottom: 10px; }
        
        /* Mouse indicator */
        .scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; color: var(--text-dim); font-size: 0.8rem; }
        .mouse { width: 20px; height: 35px; border: 2px solid var(--text-dim); border-radius: 15px; position: relative; }
        .mouse::before { content: ''; position: absolute; left: 50%; top: 5px; width: 4px; height: 4px; background: var(--text-dim); border-radius: 50%; transform: translateX(-50%); animation: scroll 2s infinite; }
        @keyframes scroll { 0% { opacity: 1; top: 5px; } 100% { opacity: 0; top: 25px; } }

        @media (max-width: 968px) {
          .flex-layout { flex-direction: column; text-align: center; }
          .big-text { font-size: 1.4rem; }
          .hero-title { font-size: 4rem; }
          .section-title { font-size: 2.22rem; }
        }
      `}</style>
      {showContact && (
        <div className="contact-overlay" onClick={() => setShowContact(false)}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="contact-close"
              onClick={() => setShowContact(false)}>
              ×
            </button>
            <h2 className="popup-title">Connect with Me</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+917338421743">+91 7338421743</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:itsarshadahmed98@gmail.com">
                  itsarshadahmed98@gmail.com
                </a>
              </div>
            </div>
            <div className="whatsapp-button">
              <a
                href="https://wa.me/917338421743"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-link">
                <svg className="wa-icon" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.281.144.35.491 1.197.534 1.285.043.088.072.19.014.305s-.088.132-.175.231c-.087.099-.184.22-.263.295-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.288.065.397-.06c.108-.125.469-.545.594-.731.125-.185.251-.155.424-.092.174.063 1.103.52 1.29.614.188.094.312.14.358.214.046.074.046.427-.098.832z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
      {showAlbum && (
        <div className="album-overlay" onClick={() => setShowAlbum(false)}>
          <div className="album-popup" onClick={(e) => e.stopPropagation()}>
            <button className="album-close" onClick={() => setShowAlbum(false)}>
              ×
            </button>
            <div className="album-view">
              <img
                src={albumImages[currentIndex]}
                alt={`Album ${currentIndex + 1}`}
                className="album-img-main"
              />
              <button className="nav-btn prev" onClick={prevImage}>
                <svg viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button className="nav-btn next" onClick={nextImage}>
                <svg viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
            <div className="album-indicators">
              {albumImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`indicator ${idx === currentIndex ? "active" : ""
                    }`}
                  onClick={() => setCurrentIndex(idx)}></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biodata;
