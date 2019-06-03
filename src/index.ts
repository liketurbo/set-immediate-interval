const setImmediateInterval = (
  callback: () => void,
  ms: number
): NodeJS.Timeout => {
  callback();
  return setInterval(callback, ms);
};

export default setImmediateInterval;
