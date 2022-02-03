function duplicateCharacter(str) {
  return new Set(str).size !== str.length;
}
// console.log(duplicateCharacter('Hello'));

function changeSpace(str) {
  return str.split('').map(el => (el === ' ' ? (el = '%20') : el));
}

// console.log(changeSpace(' Vasiliy Alibabaevich'));
function isPolindrom(str) {
  if (str[0] === str[str.length - 1]) {
    return str.length === 1 ? true : isPolindrom(str.slice(1, -1));
  }
  return false;
}

// console.log(isPolindrom('racecar1'));

function shortStr(str) {
  const result = [];
  const obj = str.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const arrayKeyValue = Object.entries(obj);
  for (const [key, value] of arrayKeyValue) {
    result.push(`${key}${value}`);
  }
  return result.join('');
}

// console.log(shortStr('aaaabbcccccce'));
