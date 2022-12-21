"use strict";


// ================JS ДЗ №1 - Операторы=====================

// // Задача №1
// function showName() {
// 	console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');


// // Задача №2
// showMessage();
// function showMessage() {
// 	console.log('Сообщение');
// }

// // Задача №3

// let showMesSage = function () {
// 	console.log('Привет');
// }
// showMesSage();


// // Задача №4

// let showText;
// if (2 > 1) {
// 	showText = function() {
// 		console.log('Сообщение, сообщение');
// 	}
// }
// showText();


// ==============






// ================JS ДЗ №2 - Массивы=====================
// Задача №1.
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);


// // Задача №2.
// let users = ['Ваня', 'Иштван'];
// console.log(users);
// users.push('Оля');
// console.log(users);
// // users[1] = 'Куку'
// users.splice(1, 1, 'Петя');
// console.log(users);
// // let removeVar = users.splice(0,1);
// let removeVar = users.shift();
// console.log(users);
// console.log(removeVar);
// users.splice(0, 0, 'Маша', 'Паша');
// console.log(users);


// // Задача №3.
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let removeItemArr = arr.splice(1, 1);
// console.log(removeItemArr);


// // Задача №4.
// let str = 'Ваня,Иштван,Оля';
// console.log(str);
// let newArr = str.split(',');
// console.log(newArr);







// ================JS ДЗ №3 - DOM=====================

// Задача №1.
// const element = document.querySelector('[data-say-hi]');
// const elementContent = element.textContent;
// console.log(elementContent);




// Задача №2.
// const ulItems = document.querySelectorAll('.list li')[1];
// console.log(ulItems);  // получим из list li с индексом 1

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
// const like = document.querySelectorAll('.like');
// console.log(like);

// Задача №4.
// Куда добавится <li>Текст</li> ?
// const list = document.querySelector('ul');
// list.insertAdjacentHTML(
// 	'beforeend',
// 	'<li>Текст</li>'
// );





// ================JS ДЗ №4 - размеры прокрутка и координаты=====================


// // Задача №1.
// const mainElement = document.documentElement;   //берем тег html т.е. полностью наш документ
// const mainElementWidth = mainElement.clientWidth;
// console.log(mainElementWidth);
// const windowWidth = window.innerWidth;
// console.log(windowWidth);
// const width = windowWidth - mainElementWidth;
// console.log(width);

// // Задача №2.
// function setScrollToOptions() {
// 	window.scrollTo({
// 		top: 100,
// 		left: 0,
// 		behavior: "smooth"
// 	});
// }
// setTimeout(setScrollToOptions, 1000);

// const windowScrollTop = window.pageYOffset;
// console.log(windowScrollTop);


// // Задача №3.
// const itemOne = document.querySelector('.subscribe');
// const coordOne = itemOne.getBoundingClientRect();
// console.log(coordOne);


// const itemTwo = document.querySelector('.page__block');
// const coordTwo = itemTwo.getBoundingClientRect();
// console.log(coordTwo);

// const itemThree = document.querySelector('.page__dz-2');
// const coordThree = itemThree.getBoundingClientRect();
// console.log(coordThree);

