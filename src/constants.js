export const BREAKPOINTS = {
  phone: 600,
  tablet: 1100,
  laptop: 1500,
};

export const QUERIES = {
  tabletAndLarger: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
  laptopAndLarger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  desktopAndLarger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const PLANET_COLORS = {
  mercury: 'hsla(194, 48%, 49%, 1.00)',
  venus: 'hsla(33, 82%, 61%, 1.00)',
  earth: 'hsla(263, 67%, 51%, 1.00)',
  mars: 'hsla(10, 63%, 51%, 1.00)',
  jupiter: 'hsla(2, 68%, 53%, 1.00)',
  saturn: 'hsla(17, 73%, 47%, 1.00)',
  uranus: 'hsla(169, 73%, 44%, 1.00)',
  neptune: 'hsla(222, 87%, 56%, 1.00)',
};