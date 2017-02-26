// Функция получает на вход число и возвращает его квадрат. Если передано не число, то она запрашивает правильное значение у пользователя.

function squareNumber(arg1) {

	if ( typeof arg1 == 'number' ) {

		return arg1 * arg1;

  } else {

	  do {

        arg2 = prompt('Введіть правильне число');
        
    } while( isNaN(arg2)  === true);

    return arg2 * arg2;

  } 
  
}

squareNumber('3');
