/* eslint-disable import/prefer-default-export */
import { theme } from "twin.macro";

export const breakpoint = (key, bound = `min`) => {
  const screens = theme`screens`;

  if (!screens?.[key]) {
    return `@media `;
  }

  return `@media only screen and (${bound}-width: ${screens[key]}) `;
};

export const getColor = (color) => {
  if (color?.charAt(0) === `#`) {
    return color;
  }

  return theme`colors`[color] || null;
};

export const setTheme = () => {
  if (typeof window === `undefined`) return;

  if (
    localStorage.theme === `dark` ||
    (!(`theme` in localStorage) &&
      window.matchMedia(`(prefers-color-scheme: dark)`).matches)
  ) {
    document.documentElement.classList.add(`dark`);
    localStorage.setItem(`theme`, `dark`);
  } else {
    document.documentElement.classList.remove(`dark`);
    localStorage.setItem(`theme`, `light`);
  }
};

export const handleThemetoggle = () => {
  if (typeof window === `undefined` || !(`theme` in localStorage)) return;

  const colorTheme = localStorage.getItem(`theme`);

  if (colorTheme === `dark`) {
    document.documentElement.classList.add(`dark`);
    localStorage.setItem(`theme`, `dark`);
    return;
  }

  if (colorTheme === `light`) {
    document.documentElement.classList.remove(`dark`);
    localStorage.setItem(`theme`, `light`);
  }
};
