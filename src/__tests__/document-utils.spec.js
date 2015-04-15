import * as documentUtils from '../document-utils';

describe('DocumentUtils', () => {
  let el;

  beforeEach(() => {
    el = $('<div></div>').appendTo('body');
    let a = $('<a href="#">Test</a>');
    el.append(a);
  });

  afterEach(() => {
    el.remove();
  });

  it('getTagsByName returns all matching tags', () => {
    let links = documentUtils.getTagsByName('a');

    expect(links.length).toBe(1);
  });

  it('getAllAnchorsStaringWithHash', () => {
    expect(documentUtils.getAllAnchorsStaringWithHash().length).toBe(1);
  });

  it('getLocationUrl', () => {
    expect(documentUtils.getLocationUrl()).toBeDefined();
  });

  describe('isBaseTagUsed', function() {

    let addBaseTag = (href) => {
      let tagName = 'base';
      let tag = document.createElement(tagName);
      tag.setAttribute('href', href);
      document.getElementsByTagName('head')[0].appendChild(tag);
      return tag;
    };

    it('is true when a base tag is found', function() {
      let baseTag = addBaseTag('/');

      expect(documentUtils.isBaseTagUsed()).toBe(true);

      document.getElementsByTagName('head')[0].removeChild(baseTag);
    });

    it('is false when a base tag is not found', function() {
      expect(documentUtils.isBaseTagUsed()).toBe(false);
    });
  });
});