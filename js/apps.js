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

	

})