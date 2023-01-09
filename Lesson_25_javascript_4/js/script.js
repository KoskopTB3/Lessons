"use strict";


window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');        //добавили класс loaded
}


const searchBody = document.querySelector('.search');

document.addEventListener("click", search);

function search(event) {
	if (event.target.closest('.search__icon')) {
		searchBody.classList.toggle('open');
	}
	if (!event.target.closest('.search')) {
		searchBody.classList.remove('open');
	}
}
// =========================

const txtItem = document.querySelector('.search__input');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.search__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}