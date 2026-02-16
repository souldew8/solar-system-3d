import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CameraController = ({ selectedPlanetRef, controlsRef }) => {
  const { camera } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    if (selectedPlanetRef?.current) {
        // Smoothly follow the selected planet
        // Get world position of the planet
        const planetPos = new THREE.Vector3();
        selectedPlanetRef.current.getWorldPosition(planetPos);

        // Ideally, we want the camera to be offset by some amount from the planet
        // We can just update the controls target to the planet position
        controlsRef.current.target.lerp(planetPos, 0.1);
        
        controlsRef.current.update();
    }
  });

  return (
    <OrbitControls 
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={500}
        minDistance={2}
    />
  );
};

export default CameraController;
