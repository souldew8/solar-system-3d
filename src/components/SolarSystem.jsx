import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PLANET_DATA } from '../core/constants';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Sun from './Sun';
import Planet from './Planet';
import Starfield from './Starfield';
import CameraController from './CameraController';
import InfoPanel from './InfoPanel';
import ControlPanel from './ControlPanel';

const TimeManager = ({ timeSpeed, setGlobalTime }) => {
    useFrame((state, delta) => {
        setGlobalTime(prev => prev + (delta * timeSpeed));
    });
    return null;
};

const SolarSystem = () => {
    const [globalTime, setGlobalTime] = useState(0);
    const [timeSpeed, setTimeSpeed] = useState(1); // 1 day per second
    const [showOrbits, setShowOrbits] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [selectedPlanetData, setSelectedPlanetData] = useState(null);
    const selectedPlanetRef = useRef(null);
    const controlsRef = useRef(null);

    const handlePlanetClick = (data, ref) => {
        setSelectedPlanetData(data);
        selectedPlanetRef.current = ref.current;
    };

    return (
        <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
            <Canvas camera={{ position: [0, 50, 100], fov: 45 }} logarithmicDepthBuffer>
                <Sun />
                <Starfield />
                
                {PLANET_DATA.map((planet) => (
                    <Planet 
                        key={planet.name}
                        data={planet}
                        time={globalTime}
                        timeScale={timeSpeed} // Pass speed if needed for smoother local calculations
                        onPlanetClick={handlePlanetClick}
                        isSelected={selectedPlanetData?.name === planet.name}
                        showOrbit={showOrbits}
                        showLabel={showLabels}
                    />
                ))}

                <CameraController selectedPlanetRef={selectedPlanetRef} controlsRef={controlsRef} />
                <TimeManager timeSpeed={timeSpeed} setGlobalTime={setGlobalTime} />
                
                <EffectComposer>
                    <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.025} height={300} intensity={0.5} />
                </EffectComposer>
            </Canvas>

            <InfoPanel 
                planet={selectedPlanetData} 
                onClose={() => {
                    setSelectedPlanetData(null);
                    selectedPlanetRef.current = null;
                }} 
            />

            <ControlPanel 
                timeSpeed={timeSpeed}
                setTimeSpeed={setTimeSpeed}
                showOrbits={showOrbits}
                setShowOrbits={setShowOrbits}
                showLabels={showLabels}
                setShowLabels={setShowLabels}
            />
        </div>
    );
};

export default SolarSystem;
