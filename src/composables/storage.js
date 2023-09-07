const setStorage = (ref, value) => {
  localStorage.setItem(ref, value);
};

const getStorage = (ref) => {
  const value = localStorage.getItem(ref);
  return value;
};

const removeStorage = (ref) => {
  localStorage.removeItem(ref);
};

export default { setStorage, getStorage, removeStorage };
