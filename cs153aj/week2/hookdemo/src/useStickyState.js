import  {useState,useEffect} from 'react';

function useStickyState(defaultValue, key) {

  // we initialize the state with the value in local storage
  // under that key, if there is something there; otherwise,
  // we use the default value.
  const [value, setValue] = useState(() => {
    // we pass in a function to useState which will generate
    // the initial state value and will be called only for
    // the first time the component is rendered!
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  // if key or value change, then after the componenent is rendered
  // the key/value pair will be stored in localstorage ..
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStickyState;
