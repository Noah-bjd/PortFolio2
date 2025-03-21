import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

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
        // Prevent default scroll behavior
        event.preventDefault();

        // Adjust the scroll position of the right-side container
        scrollRef.current.scrollTop += event.deltaY;

        // Trigger the infinite scroll logic
        handleScroll();
      }
    },
    [handleScroll]
  );

  // Set initial height and scroll position
  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = backupHeight;
      }
    }
  }, [backupHeight]);

  // Attach global scroll event listener
  useLayoutEffect(() => {
    window.addEventListener('wheel', handleGlobalScroll, { passive: false });

    // Cleanup
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