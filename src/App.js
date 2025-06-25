import React, { useState, useEffect, useRef } from 'react';
import aboutBg from './assets/about-old.jpg'; // At the top of App.js
import wholeBg from './assets/home-gen.png'; // At the top of App.js
import dance1 from './assets/1.jpg';
import dance2 from './assets/2.jpg';
import dance3 from './assets/3.jpg';
import dance4 from './assets/4.jpg';
import dance5 from './assets/5.jpg';
import dance6 from './assets/6.jpg';
import dance7 from './assets/7.jpg';
import dance8 from './assets/8.jpg';
import dance9 from './assets/9.jpg';
import dance10 from './assets/10.jpg';
import dance11 from './assets/11.jpg';
import dance12 from './assets/12.jpg';
import dance13 from './assets/13.jpg';
import dance14 from './assets/14.jpg';
import dance15 from './assets/15.jpg';
import dance16 from './assets/16.jpg';
import logo from './assets/logo.png';
import './index.css';

const style = `
  html {
    scroll-behavior: smooth;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .gallery-pop {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  animation: fadeSlideIn 0.6s ease forwards;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

  .gallery-pop:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    z-index: 2;
    position: relative;
  }
`;
const images = [
  dance1, dance2, dance3, dance4, dance5, dance6, dance7, dance8, dance9,
  dance10, dance11, dance12, dance13, dance14, dance15, dance16
];

function App() {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${wholeBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      fontFamily: `'Georgia', serif`,
      paddingBottom: '2rem'
    }}>
      <header style={{
        background: '#c62828',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Laasya Nrithya Kshethra</h1>
        </div>

        <nav style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '0.5rem'
        }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#classes" style={linkStyle}>Classes</a>
          <a href="#gallery" style={linkStyle}>Gallery</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </nav>
      </header>



      <section
        id="about"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '4rem 2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          color: 'white',
          gap: '2rem',
          scrollMarginTop: '80px'
        }}
        className="fade-in"
      >
        {/* Left: Text Content */}
        <div style={{ flex: '1 1 400px', maxWidth: '800px' }}>
          <h2
            style={{
              fontFamily: `'Tangerine', cursive`,
              fontSize: '3rem',
              marginBottom: '1rem'
            }}
          >
            About Bharatanatyam
          </h2>

          <p style={paraStyle}>
            Bharatanatyam is more than a dance — it is a sacred offering, a meditative discipline, and a living tradition passed down through generations. Originating over 2,000 years ago in the temples of South India, Bharatanatyam was traditionally performed by Devadasis as a form of spiritual worship.
          </p>

          <p style={paraStyle}>
            The name <strong>Bharatanatyam</strong> is derived from three key elements: <strong>Bhava</strong> (emotion), <strong>Raga</strong> (melody), and <strong>Tala</strong> (rhythm). Each gesture and movement expresses timeless tales from Indian epics and mythology.
          </p>

          <p style={paraStyle}>
            The dance reflects the <strong>Navarasas</strong> — nine emotions that shape the human experience: love, laughter, sorrow, courage, fear, disgust, wonder, peace, and anger.
          </p>

          <p style={paraStyle}>
            At <strong>Laasya Nrithya Kshethra</strong>, we honor this tradition while nurturing each dancer’s spirit. Through discipline, rhythm, and devotion, our students connect to a deeper cultural and artistic identity.
          </p>

          <p style={paraStyle}>
            Whether you are a beginner or an experienced performer, Bharatanatyam offers a path of expression, focus, and inner grace.
          </p>

          {/* Divider */}
          <div style={{
            margin: '2rem 0',
            textAlign: 'center',
            fontSize: '2rem'
          }}>
            🪷
          </div>

          {/* Quote */}
          <blockquote style={{
            fontStyle: 'italic',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1rem 1.5rem',
            borderLeft: '4px solid #ffc107',
            borderRadius: '6px'
          }}>
            “Where the hand goes, the eyes follow.
            Where the eyes go, the mind follows.
            Where the mind is, there is expression.
            Where there is expression, there is rasa.”
            <footer style={{ marginTop: '0.5rem', textAlign: 'right' }}>— *Natya Shastra*</footer>
          </blockquote>
        </div>

        {/* Right: Image */}
        <div style={{
          flex: '1 1 300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img
            src={aboutBg}
            alt="About Bharatanatyam"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}
          />
        </div>
      </section>


      <section id="achievements" style={{
        padding: '3rem 2rem',
        backgroundColor: 'transparent'
      }}>
        <h2 style={{ fontFamily: `'Tangerine', cursive`, fontSize: '2.8rem', textAlign: 'center' }}>
          Achievements & Milestones
        </h2>
        <ul style={{
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: '2',
          paddingLeft: '1rem'
        }}>
          <li>Karnataka State <strong>1st Rank</strong> in Post Vidwat Examination</li>
          <li>Junior Music Exam — <strong>74%</strong> (Karnataka Board)</li>
          <li>Junior Dance Exam — <strong>71.62%</strong> (Karnataka Board)</li>
          <li>Champion in solo/group Pre-University College dance fests</li>
          <li>Workshop on Indian Contemporary under <strong>Guru Charles.MA</strong></li>
          <li>Performed in 50+ temples: Tirupati, Chamundi Hills, Orissa, etc.</li>
          <li>Inter-Engineering College fest competition winner</li>
          <li>Senior Dance Level — <strong>70%</strong> (Karnataka Board)</li>
          <li>3rd Place in Dance Jathre by Shambhavi School (Vid. Smt. Vyjayanthi Kashi)</li>
          <li>Dance Teacher @ BGS World School (2017–18)</li>
          <li>Volunteer teacher at Government School as social service</li>
        </ul>
      </section>

      <section id="classes" style={{ padding: '2rem', backgroundColor: 'transparent' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'center' }}>Classes & Schedule</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {['Beginner', 'Intermediate', 'Advanced'].map(level => (
            <div key={level} style={{
              flex: '1 1 250px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4>{level}</h4>
              <p>Weekly {level.toLowerCase()} classes focusing on rhythm, technique, and expression.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" style={{ padding: '2rem' }}>
        <GalleryRouletteFour />
      </section>

      <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem' }}>Contact Us</h3>
        <p>Email: laasyanrithyakshethra@gmail.com</p>
        <p>Phone: +91 84317 76301</p>
        <p>Location: Bengaluru, Karnataka</p>
      </section>

      <footer style={{
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem'
      }}>
        © 2025 Laasya Nrithya Kshethra. All rights reserved.
      </footer>
    </div>
  );
}


function GalleryRouletteFour() {
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  function getItemsPerPage() {
    return window.innerWidth <= 600 ? 1 : 4;
  }

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = images.length;
  const containerRef = useRef(null);

  const nextIndex = (current) => (current + itemsPerPage) % totalImages;
  const prevIndex = (current) => (current - itemsPerPage + totalImages) % totalImages;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setStartIndex(prev => nextIndex(prev));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const visibleImages = [...images, ...images].slice(startIndex, startIndex + itemsPerPage);

  // Swipe gesture support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let endX = 0;

    const onTouchStart = (e) => startX = e.touches[0].clientX;
    const onTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) setStartIndex(prev => nextIndex(prev));
      else if (endX - startX > 50) setStartIndex(prev => prevIndex(prev));
    };

    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ textAlign: 'center' }}
      ref={containerRef}
    >
      <h3 style={{ fontSize: '2rem' }}>Gallery</h3>
      <div className="gallery-slide" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
        gap: '1rem',
        margin: '1.5rem auto',
        padding: '0 1rem',
        transition: 'transform 0.5s ease'
      }}>
        {visibleImages.map((img, i) => (
          <img
            key={`${startIndex}-${i}`} // force refresh animation on index change
            src={img}
            alt={`Dance ${startIndex + i}`}
            className="gallery-pop"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setStartIndex(prev => prevIndex(prev))} style={navButtonStyle}>Prev</button>
        <button onClick={() => setStartIndex(prev => nextIndex(prev))} style={navButtonStyle}>Next</button>
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        {Array.from({ length: Math.ceil(totalImages / itemsPerPage) }).map((_, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              margin: '0 4px',
              borderRadius: '50%',
              backgroundColor: i === Math.floor(startIndex / itemsPerPage) ? '#ffc107' : '#ccc'
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

const navButtonStyle = {
  margin: '0.5rem',
  padding: '0.6rem 1.2rem',
  backgroundColor: 'rgba(255,255,255,0.15)',
  color: 'white',
  border: '2px solid white',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '0.5rem',
  fontSize: '1rem'
};
const paraStyle = {
  lineHeight: '1.8',
  fontSize: '1.1rem',
  marginBottom: '1rem'
};


export default App;
