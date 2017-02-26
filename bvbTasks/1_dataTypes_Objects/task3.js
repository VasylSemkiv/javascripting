// 3. Функция получает на вход два числа и вычитает из большего меньшее.

function subtractFromMaxMin(a, b) {

	if (a > b) {
		return a - b;
	} else {
		return b - a;
	} 

}

subtractFromMaxMin(3, 7);