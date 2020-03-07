/* eslint-disable */
/**
 * FORMULAS - ASTRODYNAMICS
 */

/**
 * Absolute Magnitude of Sun I band
 * @id: TFAD_0
 *
 * @param Vrot - Observed Maximum Rotation Velocity
 * @param i - Galactic Inclination
 *
 * @result MI - Iband Absolute Magnitude
 */
export const absoluteMagnitudeOfSun1Band = (Vrot: number, i: number): number =>
  -7.68 * Math.log10((2 * Vrot) / Math.sin(i)) - 2.58;

/**
 * Absolute Visual Magnitude of Cepheid Variables
 * @id: TFAD_1
 *
 * @param pd - Pulsation Period
 *
 * @result Mv - Absolute Visual Magnitude
 */
export const absoluteVisualMagnitudeOfCepheidVariables = (pd: number): number =>
  -2.76 * Math.log10(pd) - 1.4;

/**
 * Relativistic Pressure
 * @id: TFAD_2
 *
 * @param h - Planck Constant
 * @param c - Speed of Light
 * @param p - Density
 * @param mn - Neutron Mass
 * @param mnPrefix - Neutron Mass Prefix
 *
 * @result P - Relativistic Pressure
 */
export const relativisticPressure = (
  h: number,
  c: number,
  p: number,
  mn: number
) => (mnPrefix: number): number =>
  (((h / (2 * Math.PI)) * c * Math.pow(3 * Math.pow(Math.PI, 2), 1 / 3)) / 4) *
  Math.pow(p / (mn * mnPrefix), 4 / 3);

/**
 * Black Hole Evaporation Time
 * @id: TFAD_4
 *
 * @param m - Mass of Body
 * @param mPrefix - Mass of Body Prefix
 * @param mo - Solar Mass
 * @param moPrefix - Solar Mass Prefix
 *
 * @result Te - Evaporation Time
 */
export const blackHoleEvaporationTime = (m: number, mo: number) => (
  mPrefix: number,
  moPrefix: number
): number => ((Math.pow(m, 3) * mPrefix) / Math.pow(mo, 3)) * moPrefix * 10e66;

/**
 * Neutron Star Degeneracy Pressure by Non-Relativistic Neutrons
 * @id: TFAD_5
 *
 * @param h - Planck Constant
 * @param mn - Neutron Mass
 * @param mnPrefix - Neutron Mass Prefix
 * @param p - Density
 *
 * @result p - Degeneracy Pressure
 */
export const neutronStarDegeneracyPressureByNonRelativisticNeutrons = (
  h: number,
  mn: number,
  p: number
) => (mnPrefix: number): number =>
  (Math.pow(3 * Math.pow(Math.PI, 2), 2 / 3) / 5) *
  ((Math.pow((h / 2) * Math.PI, 2) / mn) * mnPrefix) *
  Math.pow((p / mn) * mnPrefix, 5 / 3);

/**
 * Gravitational Wave Luminosity
 * @id: TFAD_6
 *
 * @param G - Constant of Gravitation
 * @param c - Speed of Light
 * @param a - Mass Separation
 * @param m1 - First Orbiting Mass
 * @param m2 - Second Orbiting Mass
 * @param aPrefix - Mass Separation Prefix
 * @param m1Prefix - First Orbiting Mass Prefix
 * @param m2Prefix - Second Orbiting Mass Prefix
 *
 * @result Lg - Gravitational Wave Radiation
 */
export const gravitationalWaveLuminosity = (
  G: number,
  c: number,
  a: number,
  m1: number,
  m2: number
) => (aPrefix: number, m1Prefix: number, m2Prefix: number): number =>
  ((32 / 5) *
    (Math.pow(G, 4) / Math.pow(c, 5)) *
    (Math.pow(m1 * m1Prefix, 2) *
      Math.pow(m2 * m2Prefix, 2) *
      (m1 * m1Prefix + m2 * m2Prefix))) /
  Math.pow(a * aPrefix, 5);

/**
 * Cosmology Critical Density
 * @id: TFAD_8
 *
 * @param H - Hubble Value
 * @param G - Constant of Gravitation
 *
 * @result ρcrit - Critical Density
 */
export const cosmologyCriticalDensity = (H: number, G: number): number =>
  (3 * Math.pow(H, 2)) / (8 * Math.PI * G);

/**
 * Cosmological Curvature Density Parameter
 * @id: TVAD_9
 *
 * @param k - Curvature
 * @param c - Speed of Light
 * @param R - Cosmic Scale Factor
 * @param H - Hubble Value
 *
 * @result Ωk - Curvature Density parameter
 */
export const cosmologicalCurvatureDensityParameter = (
  k: number,
  c: number,
  R: number,
  H: number
): number => -(k * Math.pow(c, 2)) / (Math.pow(R, 2) * Math.pow(H, 2));

/**
 * Cosmological Lambda Density Parameter
 * @id: TVAD_10
 *
 * @param A - Cosmological Constant
 * @param H - Hubble Parameter
 *
 * @result ΩΛ - Lambda Density Parameter
 */
export const cosmologicalLambdaDensityParameter = (
  A: number,
  H: number
): number => A / (3 * Math.pow(H, 2));

/**
 * Eddington Luminosity Limit
 * @id: TVAD_11
 *
 * @param G - Constant of Gravitation
 * @param M - Stellar Mass
 * @param mp - Mass of Proton
 * @param c - Speed of Light
 * @param oT - Thomson Cross Section
 * @param MPrefix - Stellar Mass Prefix
 *
 * @result LE - Eddington Limiting Luminosity
 */
export const eddingtonLuminosityLimit = (
  G: number,
  M: number,
  mp: number,
  c: number,
  oT: number
) => (MPrefix: number): number =>
  (4 * Math.PI * G * (M * MPrefix) * mp * c) / oT;

/**
 * Eddington Luminosity Limit Based on Solar Mass
 * @id: TVAD_12
 *
 * @param M - Stellar Mass
 * @param Mo - Solar Mass
 *
 * @result LE - Eddington Limiting Luminosity
 */
export const eddingtonLuminosityLimitBasedOnSolarMass = (
  M: number,
  Mo: number
): number => 1.26 * 10e31 * (M / Mo);

/**
 * Black Hole Gravitational Redshift
 * @id: TVAD_14
 *
 * @param c - Speed of Light
 * @param G - Gravitational Constant
 * @param M - Mass of Body
 * @param r - Distance from Mass Center
 * @param MPrefix - Mass of Body Prefix
 * @param rPrefix - Distance from Mass Center Prefix
 *
 * @result v∞/vr: v∞ - Frequency at Infinity | vr - Frequency at r
 */
export const blackholeGravitationalRedshift = (
  c: number,
  G: number,
  M: number,
  r: number
) => (MPrefix: number, rPrefix: number): number =>
  Math.sqrt(
    Math.abs(1 - (2 * G * (M * MPrefix)) / (r * rPrefix * Math.pow(c, 2)))
  );

/**
 * Luminosity of Cepheid Variable
 * @id: TVAD_15
 *
 * @param Pd - Pulsation Period
 *
 * @result log10(L)/Lo: L - Mean Cepheid Luminosity | Lo - Solar Luminosity
 */
export const luminosityOfCepheidVariable = (Pd: number): number =>
  1.15 * Math.log10(Pd) + 2.47;

/**
 * Chandrasekhar Mass
 * @id: TVAD_16
 *
 * @param Mo - Solar Mass
 *
 * @result Mch - Chandrasekhar Mass
 */
export const chandrasekharMass = (Mo: number): number => 1.46 * Mo;

/**
 * Hubble Parameter at Redshift
 * @id: TVAD_18
 *
 * @param H - Hubble Parameter At Present Epoch
 * @param z - Redshift
 *
 * @result H(z) - Hubble Constant At Redshift
 */
export const hubbleParameterAtRedshift = (H: number, z: number): number =>
  H * Math.pow(1 + z, 3 / 2);

/**
 * Hubble Law Radial Velocity
 * @id: TVAD_20
 *
 * @param H - Hubble Parameter
 * @param d - Proper Distance
 * @param dPrefix - Proper Distance Prefix
 *
 * @result Vr - Radial Velocity
 */
export const hubbleLawRadialVelocity = (H: number, d: number) => (
  dPrefix: number
): number => H * (d * dPrefix);

/**
 * Angular Radius of Einstein Ring
 * @id: TVAD_21
 *
 * @param G - Gravitational Constant
 * @param M - Lens Mass
 * @param c - Speed of Light
 * @param ds - Distance from Observer to Source
 * @param d - Distance from Observer to Lens
 * @param MPrefix - Lens Mass Prefix
 * @param dsPrefix - Distance from Observer to Source Prefix
 * @param dPrefix - Distance from Observer to Lens Prefix
 *
 * @result θ - Ring Angular Radius
 */
export const angularRadiusOfEinsteinRing = (
  G: number,
  M: number,
  c: number,
  ds: number,
  d: number
) => (MPrefix: number, dsPrefix: number, dPrefix: number): number =>
  Math.sqrt(
    (((4 * G * (M * MPrefix)) / Math.pow(c, 2)) *
      (ds * dsPrefix - d * dPrefix)) /
      (ds * dsPrefix * (d * dPrefix))
  );

/**
 * Black Hole Schwarzschild Radius
 * @id: TVAD_22
 *
 * @param G - Gravitational Constant
 * @param M - Mass of Body
 * @param c - Speed of Light
 * @param MPrefix - Mass of Body Prefix
 *
 * @result rs - Black Hole Schwarzschild Radius
 */
export const blackholeSchwarzschildRadius = (
  G: number,
  M: number,
  c: number
) => (MPrefix: number): number => (2 * G * (M * MPrefix)) / Math.pow(c, 2);

/**
 * Cosmological Redshift
 * @id: TVAD_23
 *
 * @param Aobs - Observed Wavelength
 * @param Aem - Emitted Wavelength
 *
 * @result z - Cosmology Redshift
 */
export const cosmologicalRedshift = (Aobs: number, Aem: number): number =>
  (Aobs - Aem) / Aem;

/**
 * Friedmann Equation
 * @id: TVAD_24
 *
 * @param G - Constant of Gravitation
 * @param p - Density
 * @param R - Cosmic Scale Factor
 * @param k - Curvature Parameter
 * @param c - Speed of Light
 * @param A - Cosmological Constant
 *
 * @result h - Friedmann Equation
 */
export const friedmannEquation = (
  G: number,
  p: number,
  R: number,
  k: number,
  c: number,
  A: number
): number =>
  ((8 * Math.PI) / 3) * G * p * Math.pow(R, 2) -
  k * Math.pow(c, 2) +
  (A * Math.pow(R, 2)) / 3;

/**
 * Friedmann Equation Based on Pressure
 * @id: TVAD_25
 *
 * @param G - Constant of Gravitation
 * @param p - Density
 * @param R - Cosmic Scale Factor
 * @param k - Curvature Parameter
 * @param c - Speed of Light
 * @param A - Cosmological Constant
 * @param P - Pressure
 *
 * @result h - Friedmann Equation Based on Pressure
 */
export const friedmannEquationBasedOnPressure = (
  G: number,
  p: number,
  R: number,
  k: number,
  c: number,
  A: number,
  P: number
): number =>
  ((-4 * Math.PI) / 3) * (G * R) * (p + (3 * P) / Math.pow(c, 2)) +
  (A * Math.pow(R, 2)) / 3;

/**
 * Black Hole Temperature
 * @id: TVAD_26
 *
 * @param h - Planck Constant
 * @param c - Speed of Light
 * @param G - Constant of Gravitation
 * @param M - Mass of Body
 * @param k - Boltzmann Constant
 * @param MPrefix - Mass of Body Prefix
 *
 * @result T - Temperature
 */
export const blackholeTemperature = (
  h: number,
  c: number,
  G: number,
  M: number,
  k: number
) => (MPrefix: number): number =>
  ((h / 2) * Math.PI * Math.pow(c, 3)) / (8 * Math.PI * G * (M * MPrefix) * k);
