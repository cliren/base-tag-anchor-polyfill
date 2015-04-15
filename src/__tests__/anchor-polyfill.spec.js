import * as anchorPolyFill from '../anchor-polyfill';
import * as documentUtils from '../document-utils';
import * as anchorListener from '../anchor-listener/anchor-listener';

describe('AnchorPolyFill', () => {
  let url;

  beforeEach(() => {
    url = 'http://foo/';
    spyOn(documentUtils, 'getLocationUrl').and.returnValue(url);
  });

  describe('transformAnchor', function() {
    let anchor;

    beforeEach(function() {
      anchor = {
        hash: '#',
        href: '#'
      }
    });

    it('prepends anchor href with location url that starts with # ', function() {
      anchorPolyFill.transformAnchor(anchor);

      expect(anchor.href).toEqual(url + '#');
    });

    it('does not alter href that does not start with # ', function() {
      anchor.href = '/index.html#';
      anchor.hash = '/index.html#';
      anchorPolyFill.transformAnchor(anchor);

      expect(anchor.href).toEqual('/index.html#');
    });
  });

  describe('transformAnchors', function() {

    it('when base tag is present', function() {
      let listenSpy = spyOn(anchorListener, 'listen');
      spyOn(documentUtils, 'isBaseTagUsed').and.returnValue(true);

      anchorPolyFill.transformAnchors();

      expect(listenSpy).toHaveBeenCalled();
    });

    it('when base tag is not present', function() {
      let listenSpy = spyOn(anchorListener, 'listen');
      spyOn(documentUtils, 'isBaseTagUsed').and.returnValue(false);

      anchorPolyFill.transformAnchors();

      expect(listenSpy).not.toHaveBeenCalled();
    });

  });

});