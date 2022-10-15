const getLocalData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (e) {
    return null;
  }
};

// to save data in the local storage

const saveDataToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export { getLocalData, saveDataToLocal };
