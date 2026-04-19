// BEGIN
const pick = (obj, keys) => {
  const result = {};
  
  for (const key of keys) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  
  return result;
};

export default pick;
// END