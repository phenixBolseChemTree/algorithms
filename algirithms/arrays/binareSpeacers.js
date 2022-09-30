const arr = [1, 4, 5, 6, 8, 11, 24 ,35 ,57 ,78 ,88 ,89 ,90 ,96];// ижектим массив в константу arr

//let count = 0; //создаем счетчик для подсчета итераций

const binarySpeacer = (array, item) => {    // обьявляем функцию с 2 переменными
let start = 0;                              // делаем перемненную начала она равна 0 ведь массив начинает идти с 0
let end = array.length;                     // делаем переменную конца она равна длине массива
let middle;                                 // позиция сдернего элемента
let found = false;                          // флаг нахождения элемента
let position = -1;                          // позиция элемента для возврата (если его нет возвращает -1)
while (found === false && start <= end) {   // цикл выполняется если эдемент не найден и если старт меньше
//  count++                                   // переменная подсчета итераций
  middle = Math.floor((start + end)) / 2    // находим центр массива округляя в меньшую сторону
  if (array[middle] === item) {             // если текущий центральный элемент равен по индексу искомому
    found = true;                           // флаг для сообщения что элемент найден
    position = middle;                      // позиция заменяется с -1 на центральное значение
    return position;                        // возврат позиции
  }
  if (item < array[middle]) {               // если искомое меньше центрального значения
    end = middle - 1                        // конец уменьшается на 1
  } else {
    start = middle + 1                      // начало увеличивается на 1
  }
}
return position;                            // возврат позиции
}