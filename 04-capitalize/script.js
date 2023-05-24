/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/
// Протестируйте решение, вызывая функцию с разными аргументами:
function capitalize(str) {
  let CapStr = "";
  for ( i = 0; i < str.length; i++ ) {
    if (str[i - 1] === " " || i === 0) {
      CapStr += str[i].toUpperCase();
    }
    else {
      CapStr += str[i];
    }
  }
  return CapStr;
}

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"