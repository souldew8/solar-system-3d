import React from 'react';
import * as THREE from 'three';

const OrbitRing = ({ radius }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 128]} />
      <meshBasicMaterial color="#ffffff" opacity={0.15} transparent side={THREE.DoubleSide} />
    </mesh>
  );
};

export default OrbitRing;
