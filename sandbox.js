
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

function fizzBuzz(number) {
  const results = [];
  for (let i = 1; i <= number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(i);
    }
  }


  return results;
}

console.log(fizzBuzz(15));

function anagrams(wordOne, wordTwo) {
  const arr1 = wordOne.split('').sort().join('');
  const arr2 = wordTwo.split('').sort().join('');

  return arr1 === arr2 ? true : false;

 
}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));

function uniqueString(strings) {
  const orderedUnique = strings.map((s) => [...new Set(s)].sort());
  const duplicate = [...new Set(...orderedUnique)];

  return strings.find((string) => {
    return duplicate.indexOf(string[0]) === -1;
  });
}
console.log(uniqueString(['Aa', 'aaa', 'aaaa', 'BbBb', 'Aaa', 'AaAaAa', 'a']));
console.log(uniqueString(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'caba']));


function uniqueCharr(string) {
  const chars = string.split('').sort();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const prev = chars[i - 1];
    const next = chars[i + 1];
    if(current === prev && current === next) return current;
  }

  return '_';
}

console.log(uniqueCharr('abdacbad'));
console.log(uniqueCharr('abacabaabacaba'));
console.log(uniqueCharr('abacbad'));
