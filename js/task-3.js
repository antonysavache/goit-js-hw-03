function filterArray(numbers, value) {
  // Создаем пустой массив для хранения подходящих чисел
  const filteredNumbers = [];
  
  // Используем цикл для перебора каждого элемента массива numbers
  for (const number of numbers) {
    // Проверяем, больше ли текущее число, чем value
    if (number > value) {
      // Если число больше value, добавляем его в новый массив
      filteredNumbers.push(number);
    }
  }
  
  // Возвращаем новый массив с подходящими числами
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]