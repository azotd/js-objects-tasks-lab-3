import _ from 'lodash';

// BEGIN
export default function countWords(sentence) {
  if (!sentence) return {};
  const result = {};
  const words = sentence.toLowerCase().split(' ');
  for (const word of words) {
    result[word] = Object.hasOwn(result, word) ? result[word] + 1 : 1;
  }
  return result;
}
// END