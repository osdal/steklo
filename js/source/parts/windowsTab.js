function wimdowsTab () {
	
}

let windowTabsHeaderContainer = document.querySelector('.glazing_slider'),
	windowTabsHeader = document.querySelectorAll('.glazing_slider a'),
	windowTabsTree = document.querySelector('.row.tree'),
	windowTabsAluminum = document.querySelector('.row.aluminum'),
	windowTabsPlastic = document.querySelector('.row.plastic'),
	windowTabsFrench = document.querySelector('.row.french'),
	windowTabsRise = document.querySelector('.row.rise');

console.log(windowTabsHeader);



windowTabsHeaderContainer.addEventListener('click', function (event) {
	for (let i = 0; i < windowTabsHeader.length; i++) {
		if (event.target == windowTabsHeader[i]) {
			windowTabsHeader[i].classList.add('active');
			for (let k = i; k < windowTabsHeader.length; k++) {
				
				windowTabsHeader[k].classList.remove('active');
			}
			
		}
	}
});






// module.exports = forms;