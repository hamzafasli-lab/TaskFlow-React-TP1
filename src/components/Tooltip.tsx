import { useState, useRef, useEffect, useLayoutEffect } from 'react';

export default function Tooltip() {
  // 1. State for the tooltip coordinates
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [useLayout, setUseLayout] = useState(false);
  
  // 2. Ref to target the button we want to measure
  const buttonRef = useRef<HTMLButtonElement>(null);

  // This is the logic that calculates the position
  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Position it 8px below the button
      setPosition({ 
        top: rect.bottom + 8, 
        left: rect.left 
      });
    }
  };

  // 3. The "Flashy" version
  useEffect(() => {
    if (!useLayout) {
      updatePosition();
    }
  }, [useLayout]);

  // 4. The "Smooth" version (Partie 7.3)
  useLayoutEffect(() => {
    if (useLayout) {
      updatePosition();
    }
  }, [useLayout]);

  return (
    <div style={{ padding: '2rem', border: '1px solid #ccc', margin: '1rem' }}>
      <button 
        onClick={() => {
          setPosition({ top: 0, left: 0 }); // Reset to force the jump
          setUseLayout(prev => !prev);
        }}
      >
        Mode: {useLayout ? 'useLayoutEffect (No Flash)' : 'useEffect (Flash)'}
      </button>

      <br /><br />
   

      {/* The reference point */}
      <button ref={buttonRef}>Survolez-moi</button>

      {/* The Tooltip itself */}
      <div style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        background: position.top === 0 ? 'red' : '#333',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        pointerEvents: 'none',
        zIndex: 1000
      }}>
        {position.top === 0 ? 'FLAAAASH (0,0)' : 'Positionnée !'}
      </div>
    </div>
  );
}