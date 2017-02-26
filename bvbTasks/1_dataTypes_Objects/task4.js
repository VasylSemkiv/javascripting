// 4. Функция получает на вход три числа и возвращает их среднее значение.

function averageArgs(args) {

	var sum = Number(args);
	for (var i = 1; i < arguments.length; i++) {
    sum += Number(arguments[i]);
  }
	return sum / arguments.length;

}

averageArgs(1,2,3);