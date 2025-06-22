
import React from 'react';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #fff7ed, #ffe0e0)', color: '#333' }}>
      <header style={{ background: '#c62828', color: '#fff', padding: '1rem 2rem' }}>
        <h1 style={{ margin: 0 }}>Natya Sangeet</h1>
        <nav>
          <a href="#about" style={{ margin: '0 1rem', color: '#fff' }}>About</a>
          <a href="#classes" style={{ margin: '0 1rem', color: '#fff' }}>Classes</a>
          <a href="#gallery" style={{ margin: '0 1rem', color: '#fff' }}>Gallery</a>
          <a href="#contact" style={{ margin: '0 1rem', color: '#fff' }}>Contact</a>
        </nav>
      </header>

      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#fff3e0' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#d84315' }}>Welcome to Natya Sangeet</h2>
        <p style={{ fontSize: '1.2rem' }}>A classical Bharatanatyam dance school rooted in tradition and grace</p>
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#c62828', color: 'white', border: 'none', borderRadius: 4 }}>Join Us</button>
      </section>

      <section id="about" style={{ padding: '2rem' }}>
        <h3>About Us</h3>
        <p>Founded by renowned gurus, Natya Sangeet has trained students for over two decades in the traditional Bharatanatyam style.</p>
      </section>

      <section id="classes" style={{ backgroundColor: '#fff', padding: '2rem' }}>
        <h3>Classes & Schedule</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['Beginner', 'Intermediate', 'Advanced'].map(level => (
            <div key={level} style={{ flex: '1 1 200px', background: '#fff7f0', padding: '1rem', borderRadius: '8px', border: '1px solid #ffccbc' }}>
              <h4 style={{ color: '#c62828' }}>{level}</h4>
              <p>Weekly {level.toLowerCase()} classes focusing on rhythm, technique, and expression.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" style={{ padding: '2rem', backgroundColor: '#ffe0b2' }}>
        <h3>Gallery</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4].map(n => (
            <img key={n} src={`https://via.placeholder.com/300x200?text=Dance+${n}`} alt={`Dance ${n}`} style={{ borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }} />
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '2rem' }}>
        <h3>Contact Us</h3>
        <p>Email: contact@natyasangeet.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Chennai, Tamil Nadu</p>
      </section>

      <footer style={{ background: '#c62828', color: '#fff', textAlign: 'center', padding: '1rem' }}>
        © 2025 Natya Sangeet. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
