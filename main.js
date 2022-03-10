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

//     result.forEach((result) => console.log(result));
// }

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(
    apples.map(apple => apple + a).filter(apple => apple >= s && apple <= t).length,
  );
  console.log(
    oranges.map(orange => orange + b).filter(orange => orange >= s && orange <= t).length,
  );
}

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 === 4 || grades[i] % 5 === 3) {
        grades[i] = grades[i] + (5 - (grades[i] % 5));
      }
    }
  }
  return grades;
}

// console.log(gradingStudents([73, 67, 38, 33]));

function oddCount(n) {
  return Math.floor(n / 2);
}

// console.log(oddCount(15));

function save(sizes, hd) {
  let sum = 0;
  let count = 0;

  for (const size of sizes) {
    if (sum + size > hd) break;
    sum += size;
    count++;
  }
  return count;
}

// console.log(save([4, 4, 4, 3, 3], 12));

function smash(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (str.length === 0) {
      str = arr[i].trim();
    } else {
      str = str.trim() + ' ' + arr[i];
    }
  }
  return str;

  // return arr.join(' ');
}

// console.log(smash(['hello', 'world', 'привет']));

function isPolindromVersion3(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr === str.split('').reverse().join('');
}

// console.log(isPolindromVersion3('racecar'));

function fizzBuzz(num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// console.log(fizzBuzz(100));

const fibanacci = num => {
  // const result = [0, 1];
  // for (let i = 2; i <= num; i++) {
  //     const first = result[i - 1];
  //     const second = result[i - 2];
  //     result.push(first + second);
  // }
  // return result[num];
  if (num < 2) return num;
  return fibanacci(num - 1) + fibanacci(num - 2);
};

// console.log(fibanacci(10))

function doubleChar(str) {
  return str
    .split('')
    .map(el => el + el)
    .join('');
}

// console.log(doubleChar('Adidas'));

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(bird => !geese.includes(bird));
}

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    count = String(i).includes('5') ? count : count + 1;
  }
  return count;
}

// console.log(dontGiveMeFive(4,17));

function addTwoNumbers(num1, num2) {
  const arr1 = Number(num1.reverse().join(''));
  const arr2 = Number(num2.reverse().join(''));
  const sum = String(arr1 + arr2);
  return sum
    .split('')
    .map(el => Number(el))
    .reverse();
}

// console.log(addTwoNumbers([2,4,3], [5,6,4])) 342 + 465 =  807 -> [7,0,8]
