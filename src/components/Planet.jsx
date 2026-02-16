import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { calculateOrbit, calculateRotation, getScaledSize } from '../core/orbitalMath';
import { MOON_DATA } from '../core/constants';
import OrbitRing from './OrbitRing';

const Planet = ({ data, time, timeScale, onPlanetClick, isSelected, showOrbit, showLabel }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const moonRef = useRef();
  
  // Calculate initial visual parameters
  const size = getScaledSize(data.diameter);
  const { radius } = calculateOrbit(data, 0, 0); // Get radius for the ring rendering
  
  useFrame(() => {
    if (!groupRef.current) return;

    // Calculate Orbit Position
    const { x, z } = calculateOrbit(data, time, timeScale);
    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
    
    // Rotation
    if (meshRef.current) {
      // Axial Tilt
      meshRef.current.rotation.z = data.axialTilt * (Math.PI / 180);
      
      // Self Rotation
      meshRef.current.rotation.y = calculateRotation(data, time);
    }

    // Moon Logic (Simplified: orbits the planet group)
    if (data.hasMoon && moonRef.current) {
        // Moon scales are tricky. We'll make it visible but not strictly 1:1 with planet scale logic if it gets too small
        const moonOrbitRadius = 3; // Fixed visual offset for visibility relative to Earth
        const moonSpeed = (2 * Math.PI) / MOON_DATA.orbitPeriod;
        const moonAngle = time * moonSpeed;
        
        moonRef.current.position.x = Math.cos(moonAngle) * moonOrbitRadius;
        moonRef.current.position.z = Math.sin(moonAngle) * moonOrbitRadius;
        moonRef.current.rotation.y += 0.01; // visual rotation
    }
  });

  return (
    <>
      {showOrbit && <OrbitRing radius={radius} />}
      
      <group ref={groupRef}>
        {/* Planet Mesh */}
        <mesh 
          ref={meshRef} 
          onClick={(e) => { e.stopPropagation(); onPlanetClick(data, groupRef); }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          <sphereGeometry args={[size, 64, 64]} />
          <meshStandardMaterial 
            color={data.color} 
            roughness={0.7}
            metalness={0.2}
            emissive={data.name === 'Sun' ? '#FFD700' : '#000000'}
            emissiveIntensity={data.name === 'Sun' ? 0.5 : 0}
          />
          {data.hasRings && (
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[size * 1.4, size * 2.2, 64]} />
                <meshStandardMaterial color={data.color} opacity={0.6} transparent side={THREE.DoubleSide} />
            </mesh>
          )}
        </mesh>

        {/* Label */}
        {showLabel && (
          <Text
            position={[0, size + 1.5, 0]}
            fontSize={1}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {data.name}
          </Text>
        )}

        {/* Moon */}
        {data.hasMoon && (
            <mesh ref={moonRef} position={[3, 0, 0]}>
                <sphereGeometry args={[getScaledSize(MOON_DATA.diameter), 32, 32]} />
                <meshStandardMaterial color={MOON_DATA.color} />
            </mesh>
        )}
      </group>
    </>
  );
};

export default Planet;
