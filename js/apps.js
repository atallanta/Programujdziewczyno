console.log('działa');
'use strict';
document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań

      //Zadanie 1
      var forDropdown = document.querySelector('.for-dropdown');
      var dropdown = document.querySelector('.dropdown');

      console.log(forDropdown, dropdown);

      forDropdown.addEventListener('mouseover', function(){
      	dropdown.style.display = 'block';
      });

      forDropdown.addEventListener('mouseout', function(){
      	dropdown.style.display = 'none';})
	//koniec

	//Zadanie 2
	var buttons = document.querySelectorAll('.read-more');

	function showHide() {
		var paragraphOverButton = this.previousElementSibling;
		if (paragraphOverButton.style.display === 'none' || paragraphOverButton.style.display ==='') {
			paragraphOverButton.style.display = 'block';
			this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
		} else {
			paragraphOverButton.style.display = 'none';
			this.innerHTML = 'WIĘCEJ <span class ="glyphicon glyphicon-chevron-down"></span>';
		}
	}
	
	for (var i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('click', showHide);
	}
	//koniec

	//Zadanie 3

	var menu = document.querySelector('.navbar');
	console.log(menu);

	window.addEventListener('scroll', function(){
		menu.style.borderBottom = '1px solid #7f7f7f';
	});
	//koniec

	//Zadanie 4

	var backButton = document.querySelector('.back-button');
	console.log(backButton);

backButton.addEventListener('click', function(){
	window.scroll(0,0);
});
//koniec

//Zadanie 5

var items = document.querySelectorAll('.slider li');
var dots = document.querySelectorAll('.dot');
console.log(items, dots);

function toggleSlide(slideNumber){
	for (var i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active');
		items[i].classList.remove('visible'); 
	}
dots[slideNumber].classList.add('active');
items[slideNumber].classList.add('visible');
} 

dots[0].addEventListener('click', function(){toggleSlide(0)});
dots[1].addEventListener('click', function(){toggleSlide(1)});
dots[2].addEventListener('click', function(){toggleSlide(2)});


//koniec

//Zadanie 6

var addButton = document.getElementById('addButton');
var taskList = document.getElementById('taskList');
var taskContent = document.getElementById('taskContent');

// function addTask() {
// 	var newTask = document.createElement('li');
// 	newTask.innerHTML = taskContent.value;
// 	taskList.appendChild(newTask);
// 	taskContent.value = '';
	
// }
// addButton.addEventListener('click', addTask);
function deleteTask(){
	this.parentElement.parentNode.removeChild(this.parentElement);
}

/*
	<ul >
		<li>
			<div>Treść</div>
			<button class="btn delet-btn" onClick="jakaśFunkcja">Usuń</button>
		</li>		
	</ul>
*/



function addTaskWithDeleteButton(){	
	//div
var newTaskContent = document.createElement('div');
	newTaskContent.innerHTML = taskContent.value;
	
	//button
var deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'Usuń';
	deleteButton.classList.add('btn', 'delete-btn');
	deleteButton.addEventListener('click', deleteTask);
	
	// li
var newTask = document.createElement('li');	
	newTask.appendChild(newTaskContent);
	newTask.appendChild(deleteButton);

	//ul
	taskList.appendChild(newTask);
	taskContent.value = '';

}
addButton.addEventListener('click', addTaskWithDeleteButton)
//koniec

})