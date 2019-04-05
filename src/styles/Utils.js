import { css } from 'styled-components';

// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
export function getMediaQuery(size) {
  return (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `;
}

export const breakpoints = {
  s: 460,
  m: 768,
  l: 1024
};

export const media = {
  s: getMediaQuery(breakpoints.s),
  m: getMediaQuery(breakpoints.m),
  l: getMediaQuery(breakpoints.l)
};

export function matchMediaSize(size) {
  return window.matchMedia(`(min-width: ${size}px)`).matches;
}

export function isSmallScreen() {
  return window.matchMedia(`screen and (max-width: ${breakpoints.m}px)`).matches;
}

export default {
  getMediaQuery,
  breakpoints,
  media
};
