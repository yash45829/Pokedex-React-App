const useDebounce = (cb, delay = 1000) => {
  let timerId;

  return (...arg) => {
    console.log(...arg);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
};
export default useDebounce;

//debounce function is to create delay in in updating state searchterm
//  so that many network request at same are avoided.
