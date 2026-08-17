import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Competitive from './components/Competitive/Competitive';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/* Cursor trail */
function CursorTrail() {
  const TRAIL_COUNT = 6;
  const trails = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(Array(TRAIL_COUNT).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf;
    const animate = () => {
      positions.current[0] = { ...mouse.current };
      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions.current[i] = {
          x: positions.current[i].x + (positions.current[i - 1].x - positions.current[i].x) * 0.35,
          y: positions.current[i].y + (positions.current[i - 1].y - positions.current[i].y) * 0.35,
        };
      }
      trails.current.forEach((el, i) => {
        if (el) {
          el.style.left = positions.current[i].x + 'px';
          el.style.top  = positions.current[i].y + 'px';
        }
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => trails.current[i] = el}
          className="cursor-dot"
          style={{
            width:  `${(TRAIL_COUNT - i) * 3}px`,
            height: `${(TRAIL_COUNT - i) * 3}px`,
            background: `rgba(56, 189, 248, ${0.45 - i * 0.07})`,
          }}
        />
      ))}
    </>
  );
}

export default function App() {
  return (
    <>
      {/* Animated mesh background */}
      <div className="bg-mesh" aria-hidden="true">
        <div className="bg-mesh-blob3" />
      </div>

      <CursorTrail />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Competitive />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
