require('./style.less');

const LISTENER_NAMES = ['animationstart', 'MSAnimationStart', 'webkitAnimationStart'];
export function listen(callback) {
  let animationName = 'anchorStartingWithHash';

  let eventHandler = (event) => {
    if (event.animationName === animationName) {
      callback(event.target);
    }
  };

  let listeners = setTimeout(() => {
    for (let listenerName of LISTENER_NAMES) {
      document.addEventListener(listenerName, eventHandler, false);
    }
  }, 0);

  return {
    clearListeners: () => {
      clearTimeout(listeners);
      for (let listenerName of LISTENER_NAMES) {
        document.removeEventListener(listenerName, eventHandler);
      }
    }
  };

}