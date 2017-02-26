// 1. Функция получает на вход два аргумента и если оба из них числа, то возвращает сумму этих чисел. Во всех остальных случаях возвращать NaN.

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function sumNumbers(arg1, arg2) {

	if (( isNumeric(arg1) == true ) && ( isNumeric(arg2) == true )) {
		return arg1 + arg2;
  } else {
	  return NaN;
  }
  
}

sumNumbers(3, 2);

