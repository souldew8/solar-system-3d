import React from 'react';

const ControlPanel = ({ 
  timeSpeed, 
  setTimeSpeed, 
  showOrbits, 
  setShowOrbits, 
  showLabels, 
  setShowLabels 
}) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      padding: '15px',
      background: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      borderRadius: '8px',
      backdropFilter: 'blur(5px)',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <h3 style={{ margin: 0, fontSize: '1rem' }}>Simulation Controls</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => setTimeSpeed(0)} style={btnStyle(timeSpeed === 0)}>Pause</button>
        <button onClick={() => setTimeSpeed(1)} style={btnStyle(timeSpeed === 1)}>1x</button>
        <button onClick={() => setTimeSpeed(10)} style={btnStyle(timeSpeed === 10)}>10x</button>
        <button onClick={() => setTimeSpeed(100)} style={btnStyle(timeSpeed === 100)}>100x</button>
      </div>

      <div style={{ marginTop: '5px' }}>
        <label style={{ display: 'block', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={showOrbits} 
            onChange={(e) => setShowOrbits(e.target.checked)} 
            style={{ marginRight: '8px' }}
          />
          Show Orbits
        </label>
        <label style={{ display: 'block', marginTop: '5px', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={showLabels} 
            onChange={(e) => setShowLabels(e.target.checked)} 
            style={{ marginRight: '8px' }}
          />
          Show Labels
        </label>
      </div>
    </div>
  );
};

const btnStyle = (isActive) => ({
  background: isActive ? '#4B70DD' : '#333',
  border: '1px solid #555',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: isActive ? 'bold' : 'normal'
});

export default ControlPanel;
