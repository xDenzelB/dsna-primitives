
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
