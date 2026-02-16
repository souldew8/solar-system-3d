export const SCALING_FACTOR = {
  // Scaling for visibility. 
  // Real diameter ratios preserved, but scaled up relative to orbit for visibility.
  diameter: 0.0001,
  orbit: 10, // Base scale for orbital distances
  orbitLogBase: 2.5, // Logarithmic base for orbit compression
};

export const PLANET_DATA = [
  {
    name: "Mercury",
    diameter: 4879, // km
    mass: 0.33, // 10^24 kg
    orbitRadius: 57.9, // 10^6 km
    orbitPeriod: 88, // days
    rotationPeriod: 1407.6, // hours
    axialTilt: 0.034, // degrees
    eccentricity: 0.205,
    color: "#A5A5A5",
    texture: "mercury.jpg",
    description: "The smallest planet in our solar system and closest to the Sun."
  },
  {
    name: "Venus",
    diameter: 12104,
    mass: 4.87,
    orbitRadius: 108.2,
    orbitPeriod: 224.7,
    rotationPeriod: -5832.5, // Retrograde
    axialTilt: 177.3,
    eccentricity: 0.007,
    color: "#E3BB76",
    texture: "venus.jpg",
    description: "Spinning in the opposite direction to most planets, Venus is the hottest planet."
  },
  {
    name: "Earth",
    diameter: 12742,
    mass: 5.97,
    orbitRadius: 149.6,
    orbitPeriod: 365.2,
    rotationPeriod: 23.9,
    axialTilt: 23.4,
    eccentricity: 0.017,
    color: "#22A6B3",
    texture: "earth.jpg",
    hasMoon: true,
    description: "Our home planet, the only place we know of so far that's inhabited by living things."
  },
  {
    name: "Mars",
    diameter: 6779,
    mass: 0.642,
    orbitRadius: 227.9,
    orbitPeriod: 687,
    rotationPeriod: 24.6,
    axialTilt: 25.2,
    eccentricity: 0.094,
    color: "#E05A47",
    texture: "mars.jpg",
    description: "Mars is a dusty, cold, desert world with a very thin atmosphere."
  },
  {
    name: "Jupiter",
    diameter: 139820,
    mass: 1898,
    orbitRadius: 778.6,
    orbitPeriod: 4331,
    rotationPeriod: 9.9,
    axialTilt: 3.1,
    eccentricity: 0.049,
    color: "#C99039",
    texture: "jupiter.jpg",
    description: "Jupiter is more than twice as massive as all the other planets combined."
  },
  {
    name: "Saturn",
    diameter: 116460,
    mass: 568,
    orbitRadius: 1433.5,
    orbitPeriod: 10747,
    rotationPeriod: 10.7,
    axialTilt: 26.7,
    eccentricity: 0.057,
    color: "#EAD6B8",
    texture: "saturn.jpg",
    hasRings: true,
    description: "Adorned with a dazzling, complex system of icy rings."
  },
  {
    name: "Uranus",
    diameter: 50724,
    mass: 86.8,
    orbitRadius: 2872.5,
    orbitPeriod: 30589,
    rotationPeriod: -17.2, // Retrograde
    axialTilt: 97.8,
    eccentricity: 0.046,
    color: "#D1F3F5",
    texture: "uranus.jpg",
    description: "Uranus rotates at a nearly 90-degree angle from the plane of its orbit."
  },
  {
    name: "Neptune",
    diameter: 49244,
    mass: 102,
    orbitRadius: 4495.1,
    orbitPeriod: 59800,
    rotationPeriod: 16.1,
    axialTilt: 28.3,
    eccentricity: 0.011,
    color: "#4B70DD",
    texture: "neptune.jpg",
    description: "Neptune is dark, cold and whipped by supersonic winds."
  }
];

export const MOON_DATA = {
  diameter: 3474,
  orbitRadius: 0.384, // 10^6 km relative to Earth
  orbitPeriod: 27.3,
  rotationPeriod: 655.7,
  color: "#CCCCCC"
};
