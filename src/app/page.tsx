'use client';

import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollIndicator from '../components/ScrollIndicator';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        } else {
          navbar.style.background = 'rgba(26, 26, 46, 0.8)';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Add animation classes on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.skill-card, .project-card, .about-card, .contact-card').forEach(el => {
      observer.observe(el);
    });

    // Mobile menu toggle (placeholder for mobile functionality)
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', function() {
        // Add mobile menu functionality here if needed
        console.log('Mobile menu toggle clicked');
      });
    }

    // Add floating animation to profile card
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
      setInterval(() => {
        (profileCard as HTMLElement).style.transform = 'translateY(' + (Math.sin(Date.now() * 0.001) * 5) + 'px)';
      }, 16);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollIndicator />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <h1>Transforming Ideas into <span className="highlight">Digital Reality</span><br />in 48 Hours</h1>
              <p className="subtitle">FULL-STACK WEB DEVELOPER & RAPID SOLUTION ARCHITECT</p>
              <p className="description">
                Delivering high-impact websites and web applications with lightning-fast turnaround.
                Specialized in React, JavaScript, Python, and Tailwind CSS for optimal performance and stunning design.
              </p>
              <a href="#projects" className="cta-button">See My Work in Action</a>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-image">
                  <img src="/assets/images/profile.jpg" alt="Profile Image" style={{ width: '180px', height: '230px', objectFit: 'cover', borderRadius: '30%', border: '3px solid var(--primary-color)' }} />
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Professional Profile Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon"><img src="/assets/images/js.png" alt="JavaScript" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <h3 className="skill-name">JavaScript</h3>
              <p className="skill-level">Advanced Level</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><img src="/assets/images/react.png" alt="React" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <h3 className="skill-name">React</h3>
              <p className="skill-level">Expert Level</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><img src="/assets/images/python.jpeg" alt="Python" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <h3 className="skill-name">Python</h3>
              <p className="skill-level">Advanced Level</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><img src="/assets/images/mongodb.png" alt="MongoDB" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <h3 className="skill-name">MongoDB</h3>
              <p className="skill-level">Intermediate Level</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><img src="/assets/images/html.png" alt="HTML" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <h3 className="skill-name">HTML/CSS</h3>
              <p className="skill-level">Advanced Level</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><img src="/assets/images/tailwind.png" alt="Tailwind CSS" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <h3 className="skill-name">Tailwind CSS</h3>
              <p className="skill-level">Expert Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="about-card">
                <div className="about-placeholder" style={{ padding: 0 }}>
                  <img src="/assets/images/profile.jpg" alt="About Image" style={{ width: '180px', height: '240px', objectFit: 'cover', borderRadius: '12px', border: '2px solid var(--primary-color)' }} />
                </div>
              </div>
            </div>
            <div className="about-text">
                <h3>Speed Meets Excellence</h3>
              <p>
                I specialize in rapid website development without compromising on quality. My unique approach
                delivers professional, high-performance websites within 48 hours, helping businesses and individuals
                establish their online presence quickly and effectively.
              </p>
              <p>
                With expertise in React, JavaScript, Python, and Tailwind CSS, I create responsive, modern websites
                that drive results. My streamlined development process ensures quick turnaround while maintaining
                the highest standards of code quality and user experience.
              </p>
              <p>
                What sets me apart is my commitment to both speed and excellence. Every project receives the perfect
                blend of rapid development and meticulous attention to detail, resulting in websites that not only
                launch quickly but perform exceptionally well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/images/project1.PNG" alt="E-commerce Platform" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div className="project-content">
                <h3 className="project-title">decent landing page for <br />tailors</h3>
                <p className="project-description">
                  A comprehensive web application built with React.
                  This project showcases my ability to create frontend with clean architecture and user-friendly interfaces.
                </p>
                <div className="project-links">
                  <a href="https://bondstailors.com/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="https://github.com/karthik449213/gentstailors.git" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/images/project2.PNG" alt="Mobile-First Dashboard" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div className="project-content">
                <h3 className="project-title">landing page for <br />unisex salon</h3>
                <p className="project-description">
                  An innovative mobile-first application built with React and Tailwind CSS. Features include
                  real-time data updates and interactive visualizations for better user engagement.
                </p>
                <div className="project-links">
                  <a href="https://fashionbox.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="https://github.com/karthik449213/elegance.git" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/images/project3.PNG" alt="Social Media Platform" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div className="project-content">
                <h3 className="project-title">Landing Page</h3>
                <p className="project-description">
                  A feature-rich landing page built with React.
                </p>
                <div className="project-links">
                  <a href="https://scissorsman.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="https://github.com/karthik449213/scissorsman.git" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-card">
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Ready to Launch Your Project?</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Need a professional website delivered in 48 hours? Let&apos;s discuss your project and make it happen.
                Your vision + my expertise = exceptional results, delivered at speed.
              </p>
              <div className="contact-info">
                <a href="mailto:karthikpiinasi@gmail.com" className="contact-item">
                  <div className="contact-icon">@</div>
                  <span>karthikpiinasi@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/karthik-m-279754326" className="contact-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon">Li</div>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/karthik449213" className="contact-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon">Gh</div>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Karthikeya Muchintala | Rapid Web Development Solutions | Delivering Excellence in 48 Hours</p>
        </div>
      </footer>
    </>
  );
}
