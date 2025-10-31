'use client';

import Spline from '@splinetool/react-spline/next';
import './globals.css';

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#">Dynamic New Production</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#features">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn btn-primary">Let’s Talk</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-3d" aria-hidden="true">
            <Spline scene="https://app.spline.design/community/file/355705e7-5f04-4051-93d5-5007f7034ada" />
            <div className="hero-3d-overlay" />
          </div>
          <div className="container hero-inner">
            <h1 className="hero-title">Dynamic New Production – Create. Innovate. Deliver.</h1>
            <p className="hero-subtitle">For story‑driven thinkers and visual dreamers—people who see the world through narratives and design. We value creativity, authenticity, and strategy to transform ideas into impactful visual stories.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Start a project</a>
              <a href="mailto:dnpstudio.arts@gmail.com" className="btn btn-ghost">Email us</a>
              <a href="#portfolio" className="btn btn-ghost">View work</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">Dynamic New Production</div>
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#features">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-social">
            <a href="mailto:dnpstudio.arts@gmail.com" aria-label="Email">Email</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="https://www.linkedin.com/company/dnp-studio/" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.instagram.com/dynamic_new_production/" aria-label="Instagram">Instagram</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <small>© {new Date().getFullYear()} Dynamic New Production. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}


