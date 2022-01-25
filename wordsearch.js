const wordSearch = (letters, word) => {
  if (!word || word.length === 0 || !letters || letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  // this ^ is a string
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let element = '';
    for (let j = 0; j < letters.length; j++) {
      element += letters[j][i];
    }
    verticalJoin.push(element);
  }
  // we want first index of each array, then second
  
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;

};
const letters = [];
const word = '';
console.log(wordSearch(letters, word));

module.exports = wordSearch;