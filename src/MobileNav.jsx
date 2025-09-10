import React, { useState, useEffect } from 'react';

const MobileNav = ({ cartCount, visible, onCartClick, onPlantsClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile || !visible) return null;

  return (
    <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px', // 👈 separates the buttons
  padding: '10px 20px 30px',
  backgroundColor: '#4CAF50',
  borderRadius: '0px',


}}>
  <div style={{
    width: '90%',
    backgroundColor: '#45a049',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    <button onClick={onPlantsClick} style={{
      width: '100%',
      padding: '10px',
      fontSize: '18px',
      border: '2px solid white', // 👈 adds visual separation
      borderRadius: '5px',
      backgroundColor: '#45a049',
      color: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)' // 👈 optional depth

    }}>
      Plants
    </button>
  </div>

  <div style={{
    width: '90%',
    backgroundColor: '#45a049',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    position: 'relative'
  }}>
    <button onClick={onCartClick} style={{
      width: '100%',
      padding: '10px',
      fontSize: '18px',
      border: '2px solid white', // 👈 adds visual separation
      borderRadius: '5px',
      backgroundColor: '#45a049',
      color: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)' // 👈 optional depth

    }}>
      Cart
    </button>
    {cartCount > 0 && (
      <span style={{
        position: 'absolute',
        top: '4px',     // 👈 moves it down into the button
        right: '4px',   // 👈 moves it left into the button
        backgroundColor: 'red',
        color: 'white',
        fontSize: '14px',
        padding: '2px 6px',
        borderRadius: '50%',
        zIndex: 1       // 👈 ensures it sits above the button
      }}>
        {cartCount}
      </span>
    )}
  </div>
</div>
)}

export default MobileNav;
