// head-scratcher.js
'use strict';

export default () => {
  const self = {
    scratch(location) {
      console.log(`scratching ${location}`);
    },
    confused() {
      self.scratch('head');
    }
  };
  return self;
};
