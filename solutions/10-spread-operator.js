// BEGIN
const make = (name, additional = {}) => {
  return {
    name,
    state: 'moderating',
    createdAt: Date.now(),
    ...additional,
  };
};

export default make;
// END