import * as anchorListener from './anchor-listener/anchor-listener';
import * as documentUtils from './document-utils';

let startsWith = (str, char) => {
  return str.indexOf(char) === 0;
};

export function transformAnchor(anchor) {
  let hash = '#';
  if (startsWith(anchor.hash, hash)) {
    let url = documentUtils.getLocationUrl();
    anchor.href = url.split(hash)[0] + hash + anchor.href.substr(anchor.href.indexOf(hash) + 1);
  }
}

export function transformAnchors() {
  if (documentUtils.isBaseTagUsed()) {
    anchorListener.listen(transformAnchor);
  }
}