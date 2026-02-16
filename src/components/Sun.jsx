import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Sun = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      <pointLight intensity={1.5} distance={2000} decay={2} color="#ffffff" />
      <ambientLight intensity={0.1} />
      <Sphere ref={meshRef} args={[2.5, 32, 32]}>
        <meshStandardMaterial 
          emissive="#FFD700" 
          emissiveIntensity={2} 
          color="#FFD700" 
          toneMapped={false} 
        />
      </Sphere>
    </group>
  );
};

export default Sun;
