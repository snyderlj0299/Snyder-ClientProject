
//Drink Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.drink>.accordion').addEventListener('click', function(){
		document.querySelector('.drink>article').classList.toggle('show');
		document.querySelector('.drink span').classList.toggle('rotate');
	});
});
//Food Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.food>.accordion').addEventListener('click', function(){
		document.querySelector('.food>article').classList.toggle('show');
		document.querySelector('.food span').classList.toggle('rotate');
	});
});
//Bakery Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.bakery>.accordion').addEventListener('click', function(){
		document.querySelector('.bakery>article').classList.toggle('show');
		document.querySelector('.bakery span').classList.toggle('rotate');
	});
});