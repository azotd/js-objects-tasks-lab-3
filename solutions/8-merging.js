import _ from 'lodash';

// BEGIN
const fill = (obj, keys, data) => {
  if (keys.length === 0) {
    Object.assign(obj, data);
  } else {
    for (const key of keys) {
      if (Object.hasOwn(data, key)) {
        obj[key] = data[key];
      }
    }
  }
};

export default fill;
// END