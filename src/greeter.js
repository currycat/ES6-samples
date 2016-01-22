// greeter.js
'use strict';

export default (outputStream) => {
  let _message = 'Hello World!';
  return {
    greet() {
      outputStream.send(_message);
    },
    set message(message) {
      _message = message;
    },
    get message() {
      return _message;
    }
  };
};
