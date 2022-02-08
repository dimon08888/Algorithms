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

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let result = [0, 0];
//     apples.forEach((apple) => {
//         let distance = apple + a;
//         if (distance >= s && distance <= t) result[0] += 1;
//     })
//     oranges.forEach((orange) => {
//         let distance = orange + b;
//         if (distance >= s && distance <= t) result[1] += 1;
//     })
//
//     result.forEach((result) => console.log(result));
// }

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(
    apples.map(apple => apple + a).filter(apple => apple >= s && apple <= t).length,
  );
  console.log(
    oranges.map(orange => orange + b).filter(orange => orange >= s && orange <= t).length,
  );
}
