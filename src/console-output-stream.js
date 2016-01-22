// console-output-stream.js
'use strict';
export default () => {
  return {
    send(line) {
      console.log(line);
    }
  };
};
