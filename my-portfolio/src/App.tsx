import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Left Side: Fixed Image */}
      <div className="left-side">
        <img
          src="https://via.placeholder.com/800x1200" // Replace with your image
          alt="Fixed Background"
          className="fixed-image"
        />
      </div>

      {/* Right Side: Content */}
      <div className="right-side">
        <InfiniteScrollLoop>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </InfiniteScrollLoop>
      </div>
    </div>
  );
};

// InfiniteScrollLoop Component
const InfiniteScrollLoop: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const surroundingBackup = 4; // Number of backup copies to render
  const backupHeight = height * surroundingBackup;

  // Handle scroll events
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height, backupHeight]);

  // Handle global scroll events
  const handleGlobalScroll = useCallback(
    (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollTop += event.deltaY;
        handleScroll();
      }
    },
    [handleScroll]
  );

  // Set initial height and scroll position
  useLayoutEffect(() => {
    if (contentRef.current) {
      const measuredHeight = contentRef.current.offsetHeight;
      setHeight(measuredHeight);

      // Wait for the next frame to ensure height is updated
      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = measuredHeight * surroundingBackup;
        }
      });
    }
  }, []);

  // Attach global scroll event listener
  useLayoutEffect(() => {
    window.addEventListener('wheel', handleGlobalScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleGlobalScroll);
    };
  }, [handleGlobalScroll]);

  return (
    <div
      className="infinite-scroll-loop-inner"
      ref={scrollRef}
      style={{ height: '100vh', overflowY: 'auto' }}
    >
      {/* Render surrounding backups */}
      {Array(surroundingBackup)
        .fill(null)
        .map((_, index) => (
          <div key={`backup-top-${index}`}>{children}</div>
        ))}
      {/* Render actual content */}
      <div ref={contentRef}>{children}</div>
      {/* Render surrounding backups */}
      {Array(surroundingBackup)
        .fill(null)
        .map((_, index) => (
          <div key={`backup-bottom-${index}`}>{children}</div>
        ))}
    </div>
  );
};

export default App;