import { css } from "@emotion/react";

export const globalStyles = css`
/* antonio-500 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/antonio-v21-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* league-spartan-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/league-spartan-v14-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* league-spartan-800 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 800;
  src: url('/fonts/league-spartan-v14-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

:root {
  /* COLORS */
  --c-mercury: hsla(194, 48%, 49%, 1.00);
  --c-venus: hsla(33, 82%, 61%, 1.00);
  --c-earth: hsla(263, 67%, 51%, 1.00);
  --c-mars: hsla(10, 63%, 51%, 1.00);
  --c-jupiter: hsla(2, 68%, 53%, 1.00);
  --c-saturn: hsla(17, 73%, 47%, 1.00);
  --c-uranus: hsla(169, 73%, 44%, 1.00);
  --c-neptune: hsla(222, 87%, 56%, 1.00);

  --c-bg: hsla(240, 67%, 8%, 1.00);
  --c-text-primary: hsla(0, 0%, 100%, 1.00);
  --c-text-secondary: hsla(240, 6%, 54%, 1.00);
  --c-text-tetiary: hsla(240, 17%, 27%, 1.00);

  /* FONT SIZES */
  --fs-h1: calc(80 / 16 * 1rem);
  --h1-line-height: calc(103/ 80);

  --fs-h2: calc(40 / 16 * 1rem);
  --h2-line-height: calc(52 / 40);
  --h2-letter-spacing: -1.5;

  --fs-h3: calc(12 / 16 * 1rem);
  --h3-line-height: calc(25 / 12);
  --h3-letter-spacing: 2.6;

  --fs-h4: calc(11 / 16 * 1rem);
  --h4-line-height: calc(25 / 11);
  --h4-letter-spacing: 1;

  --fs-body: calc(14 / 16 * 1rem);
  --body-line-height: calc(25 / 14);

  --fs-temp-header: calc(28 / 16 * 1rem);
  --temp-letter-spacing: -1.05;
}

/* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

/* 3. Enable keyword animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  /* 4. Add accessible line-height */
  line-height: var(--body-line-height);
  color: var(--c-text-primary);
  font-size: var(--fs-body);
  font-family: "League Spartan";
  font-weight: 400;
  background-image: url(/background-stars.svg);
  background-color: var(--c-bg);
  
  /* 5. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}
h1 {
  font-size: var(--fs-h1);
  line-height: var(--h1-line-height);
  font-family: 'Antonio';
}
h2 {
  font-size: var(--fs-h2);
  line-height: var(--h2-line-height);
  letter-spacing: var(--h2-letter-spacing);
  font-family: 'Antonio';
}
h3 {
  font-size: var(--fs-h3);
  line-height: var(--h3-line-height);
  letter-spacing: var(--h3-letter-spacing);
  font-weight: 800;
}
h4 {
  font-size: var(--fs-h4);
  line-height: var(--h4-line-height);
  letter-spacing: var(--h4-letter-spacing);
  font-weight: 800;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/*
  10. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;