// console-output-stream.js
export default () => {
  return {
    send(line) {
      console.log(line);
    }
  };
};
