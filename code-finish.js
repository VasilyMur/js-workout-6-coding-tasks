// 1. Сколько раз каждый элемент встречается в массиве:
// {kiwi: 3, apple: 2, orange: 1}

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const countWord = (list) => {
  const count = {};

  list.forEach(f => {
    if (!count[f]) {
      count[f] = 1;
    } else {
      count[f] ++;
    }
  });

  return count;
};

// console.log(countWord(fruits));

// 2. Создать массив который содержит только уникальные значения
// ['kiwi', 'apple', 'orange']

const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const uniqueItems = (list) => {
  const unique = {};

  list.forEach(item => {
    unique[item] = true;
  });

  return Object.keys(unique);
}

// console.log(uniqueItems(myFruits));

// 3. Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст, 
// а значение - массив студентов
// { 
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }
const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

const groupStudents = (list) => {
  const grouped = {};

  list.forEach(s => {
    if (!grouped[s.age]) {
      grouped[s.age] = [s];
    } else {
      grouped[s.age].push(s);
    }
  });

  return grouped;
}

// console.log(groupStudents(students));

// 4. Написать функцию, которая принимает два аргумента: 
// массив из уникальных целых чисел и сумму в виде целого числа. 
// Если сумма двух любых чисел массива из аргумента равна числу, 
// которое приходит вторым аргументом, функция должна 
// вернуть новый массив из этих двух чисел в любом порядке. 
// Если решения нет, вернуть пустой массив.

// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

const findPairs = (nums, target) => {

  for (let i = 0; i < nums.length; i++) {
    const numFirst = nums[i];
    
    for (let j = i + 1; j < nums.length; j++) {
      const numSecond = nums[j];

      if (numFirst + numSecond === target) {
        return [numFirst, numSecond];
      }
    }
  }

  return [];
}

// console.log(findPairs(myNumbers, sum));

// 5. Получить единый массив из любимых пицц каждого друга
// ['cheese', 'pepperoni', 'meat', 'fish']
const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];

const pizzas = friends.reduce((accum, current) => {
  return [...accum, ...current.pizzas];
}, []);

// console.log(pizzas);

// 6. Записать строку (символы строки) в обратном порядке (2 способа)
// pizza => azzip
const myStr = 'pizza';

const reverseString = (str) => {
  const reversed = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  };

  return reversed.join('');
};

// Либо можно использовать метод reverse
const reverseString2 = (str) => {
  return str.split('').reverse().join('');
};

// console.log(reverseString2(myStr));


