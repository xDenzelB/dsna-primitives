
function reverseWords(sentence) {
  return sentence.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords('alchemy rocks gold'));


function titleCase(sentence) {
  const splitSentence = sentence.split(' ');
  return splitSentence.map((word) => (word[0]).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(titleCase('alchemy ROCKS goLD'));

function oddishOrEvenish(number) {
  const stringArray = number.toString().split('');
  const numArray = stringArray.map(Number);
  const sum = numArray.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(oddishOrEvenish(121));

function at(arr, index) {
//   if (index > -1) {
//     return arr[index];
//   } else {
//     arr[arr.length + index];
//   }

  return index > -1 ? arr[index] : arr[arr.length + index];

}
console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));
