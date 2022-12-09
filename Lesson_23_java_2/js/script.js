"use strict";


// ================JS ДЗ №1 - Операторы=====================
console.log(typeof('35' + - "22"));
console.log('35' + - "22");
console.log('35' - "22");

console.log('35' * "22");

// console.log('558' > 22++);

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

console.log( !false && 11 || 18 && !'');

let name = 0;
console.log(name ?? "Без имени")

// ================JS ДЗ №2 - Условный оператор=====================

if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}


if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}


let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);


if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}



// ================JS ДЗ №3 - Циклы=====================

for(let someNum = 0; someNum < 6; someNum++){
	if (someNum == 0) continue;
	console.log(someNum);
}

// Задача №3
let num = 0
while(num < 3){
	console.log(`Число: ${num}`);
	num++;
}

if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}

// Задача №4
// Цикл №1
breakPoint: for (let num = 5; num < 8; num++) {
	//Цикл №2
	for (let size = 0; size < 4; size++) {
		if (size == 1) {
			break breakPoint;
			}
		console.log(size);
	}
	console.log(`я родительский цикл: ${num}`);
}

// ================JS ДЗ №4 - Числа=====================

let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne); // Выведет 1 что не верно


let value = parseFloat("135.58px");
console.log(value);


let valuE = 58 + "Фрилансер";
if (isNaN(valuE)) {
	console.log('Результат выражения NaN');
}


let maxNum = Math.max(-5, 10.2, 9.4, 3);
console.log(maxNum);


let myPeopleGo = Math.floor(58.858);
console.log(myPeopleGo);


// ================JS ДЗ №5 - Строки=====================

let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
console.log(text);


let texT = 'фрилансер';
console.log(texT[5]);


let teXt = 123 + (Number("456"));
console.log(teXt);


let tExt = 'фрилансер';
console.log(tExt.toLocaleUpperCase());

let sumText = 'фрилансер';
console.log(sumText.indexOf('лан'));
console.log(sumText.includes('лан'));


console.log(sumText.includes('лан', 4));
