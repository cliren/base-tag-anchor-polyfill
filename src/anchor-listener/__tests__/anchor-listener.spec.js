import {listen} from '../anchor-listener';

//TODO: CSS animations are not working in phantomJS
xdescribe('Anchor Listener', () => {
  let callbackSpy, listener, el;

  let addAnchor = function(path, text) {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", path);
    anchor.innerHTML = text;
    el.append(anchor);
  };

  beforeEach(() => {
    jasmine.clock().install();
    el = $('<div></div>').appendTo('body');
    callbackSpy = jasmine.createSpy();
    listener = listen(callbackSpy);
    jasmine.clock().tick(101);
  });

  afterEach(() => {
    listener.clearListeners();
    el.remove();
    jasmine.clock().uninstall();
  });

  it('Adding a new anchor tag does not call callback ', () => {
    addAnchor('/index.html', 'New');

    expect(callbackSpy).not.toHaveBeenCalled();

  });

});