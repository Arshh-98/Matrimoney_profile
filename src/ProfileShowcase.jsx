import React, { useEffect } from "react";
import "./App.css";
import heroImg from "./assets/hero.png";
import filmImg from "./assets/film.png";
import theaterImg from "./assets/theater.png";
import commercialImg from "./assets/commercial.png";

export default function ProfilePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">J. K. HOLTE</div>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#work" className="nav-link">Work</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-label">Actor & Model</span>
          <h1 className="hero-title">John K.<br />Holte</h1>
          <p className="hero-description">
            I’m a storyteller fueled by passion and precision. A versatile actor 
            dedicated to bringing depth and authenticity to every role, from the 
            silver screen to the grand stage.
          </p>
          <a href="#contact" className="nav-link" style={{ borderBottom: '1px solid var(--accent)', paddingBottom: '5px' }}>
            Book Representation
          </a>
        </div>
        <div className="hero-image-container">
          <img src={heroImg} alt="John K. Holte" className="hero-image" />
          <div className="hero-image-overlay"></div>
        </div>
      </section>

      {/* CATEGORIES / ABOUT */}
      <section id="work" className="section-padding container">
        <div className="reveal">
          <h2 style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}>Selected Works</h2>
          <div className="categories">
            <div className="category-card reveal">
              <img src={filmImg} alt="Film" />
              <div className="category-overlay">
                <h3 className="category-title">Film</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Leading Roles & Method Acting</p>
              </div>
            </div>
            <div className="category-card reveal">
              <img src={theaterImg} alt="Theater" />
              <div className="category-overlay">
                <h3 className="category-title">Theater</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Classical & Contemporary Stage</p>
              </div>
            </div>
            <div className="category-card reveal">
              <img src={commercialImg} alt="Commercial" />
              <div className="category-overlay">
                <h3 className="category-title">Commercial</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Brand Representation & Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding contact-section container">
        <div className="reveal">
          <span className="hero-label">Available for work</span>
          <h2 className="contact-title">Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h4>Management</h4>
              <p>AA Management<br />500 Terry Francine Street<br />San Francisco, CA 94158</p>
            </div>
            <div className="contact-item">
              <h4>Contact</h4>
              <p>Tel: 123-456-7890<br />Email: info@jkholte.com</p>
            </div>
            <div className="contact-item">
              <h4>Social</h4>
              <p>Instagram<br />LinkedIn<br />IMDb</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>© 2026 John K. Holte. Portfolio for Actor & Model. Developed by Antigravity.</p>
        </div>
      </footer>
    </div>
  );
}
