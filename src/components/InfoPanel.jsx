import React from 'react';

const InfoPanel = ({ planet, onClose }) => {
  if (!planet) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      padding: '20px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      width: '300px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        ✕
      </button>

      <h2 style={{ marginTop: 0, borderBottom: `2px solid ${planet.color}` }}>{planet.name}</h2>
      <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{planet.description}</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.85rem' }}>
        <div><strong>Diameter:</strong></div>
        <div>{planet.diameter.toLocaleString()} km</div>

        <div><strong>Day Length:</strong></div>
        <div>{Math.abs(planet.rotationPeriod)} hrs</div>

        <div><strong>Orbit Period:</strong></div>
        <div>{planet.orbitPeriod} days</div>

        <div><strong>Orbit Radius:</strong></div>
        <div>{planet.orbitRadius} million km</div>

        <div><strong>Temperature:</strong></div>
        <div>{planet.temp ? planet.temp : 'N/A'} °C</div>
      </div>
    </div>
  );
};

export default InfoPanel;
