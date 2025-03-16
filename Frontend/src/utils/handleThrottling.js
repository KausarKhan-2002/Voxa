export const handleThrottling = (callback, delay) => {
  let lastTime = 0; // private variable to track current time

  return () => {
    const now = new Date().getTime();

    if (now - lastTime >= delay) {
      lastTime = now; // add current time
      callback(); // call api if user click according to the delay
    }
  };
};