import { SCALING_FACTOR } from './constants';

export const calculateOrbit = (planet, time, timeScale) => {
  // Semi-major axis (logarithmic scale for visibility)
  // We use log of the radius to compress the massive distances
  const scaledOrbitRadius = Math.log(planet.orbitRadius * SCALING_FACTOR.orbitLogBase) * SCALING_FACTOR.orbit;

  // Angular velocity (rad/day)
  // orbitalPeriod is in days
  const angularSpeed = (2 * Math.PI) / planet.orbitPeriod;

  // Current angle
  const angle = time * angularSpeed;

  // Position
  // x = r * cos(theta)
  // z = r * sin(theta) (using z for scaling depth in 3D)
  // Apply eccentricity (simplified model: offsetting center)

  const x = Math.cos(angle) * scaledOrbitRadius;
  const z = Math.sin(angle) * scaledOrbitRadius; // Circular for simplicity, can add eccentricity factor

  return { x, z, angle, radius: scaledOrbitRadius };
};

export const calculateRotation = (planet, time) => {
  // rotationPeriod is in hours
  // Convention: 1 day = 24 hours. The time input is in "simulation days".
  // Rotations per simulation day = 24 / rotationPeriod
  const rotationsPerDay = 24 / planet.rotationPeriod;
  const rotationAngle = time * rotationsPerDay * (2 * Math.PI);

  return rotationAngle;
};

export const getScaledSize = (diameter) => {
  // Linear scale for planet sizes relative to each other
  return diameter * SCALING_FACTOR.diameter;
};
