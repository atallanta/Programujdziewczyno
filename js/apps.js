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
	dropdown.style.display = 'none';
	//koniec
})
    });