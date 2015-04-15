export const ANCHOR_SELECTOR = "a[href^='\#']";

export function getTagsByName(name) {
  return document.getElementsByTagName(name);
}

export function getLocationUrl() {
  return window.location.href;
}

export function getAllAnchorsStaringWithHash() {
  return document.querySelectorAll(ANCHOR_SELECTOR)
}

export function isBaseTagUsed() {
  return getTagsByName('base').length > 0;
}
