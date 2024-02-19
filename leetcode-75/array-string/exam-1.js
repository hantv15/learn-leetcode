/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  const word1ToArray = word1.split("");
  const word2ToArray = word2.split("");
  const newArray = [];
  const minLengthArray = Math.min(word1ToArray.length, word2ToArray.length);

  console.log("minLengthArray: ", minLengthArray);

  for (let i = 0; i < minLengthArray; i++) {
    newArray.push(word1ToArray[i], word2ToArray[i]);
  }

  console.log("newArray: ", newArray);

  const wordSlice1 = word1ToArray.slice(minLengthArray);
  const wordSlice2 = word2ToArray.slice(minLengthArray);

  console.log("wordSlice1: ", wordSlice1);
  console.log("wordSlice2: ", wordSlice2);

  newArray.push(...wordSlice1, ...wordSlice1);

  return newArray.join("");
};

console.log(mergeAlternately("abc", "pqrs"));
