// 2. Функция на вход получает сумму кредита, годовую процентную ставку и количество лет. Необходимо рассчитать и вернуть сумму переплаты.

/*
	К = i / [1 - (1+i)^-n], где: 
	i - месячная ставка (годовая/12), 
	n - количество месяцев в сроке кредита, 
	^ - возведение в степень (степень отрицательная!) 
*/

function overpayment(creditAmount, annualRate, numberYears) {

	var monthlyRate = annualRate / 12;
	var numberMonth = numberYears * 12;
	var coefficient = monthlyRate / (1 -  Math.pow((1 + monthlyRate), -numberMonth));
	var overpayment = creditAmount * coefficient - creditAmount;

	return overpayment;

}

overpayment(30000, 0.1, 2);