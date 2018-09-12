function wimdowsTab () {
	
}

let windowTabsHeaderContainer = document.querySelector('.glazing_slider'),
	windowTabsHeader = document.querySelectorAll('.glazing_slider a'),
	windowTabsTree = document.querySelector('.row.tree'),
	windowTabs = [
			document.querySelector('.row.tree'),
			document.querySelector('.row.aluminum'),
			document.querySelector('.row.plastic'),
			document.querySelector('.row.french'),
			document.querySelector('.row.rise')
		];





windowTabsHeaderContainer.addEventListener('click', function (event) {
	for (let i = 0; i < windowTabsHeader.length; i++) {
		if (event.target == windowTabsHeader[i]) {
			windowTabsHeader[i].classList.add('active');
			windowTabs[i].classList.add('show');
			for (let k = i + 1; k < windowTabsHeader.length; k++) {
				windowTabsHeader[k].classList.remove('active');
				windowTabs[k].classList.remove('show');
				windowTabs[k].classList.add('hide');
			}
			for (let k = 0; k < i; k++) {
				windowTabsHeader[k].classList.remove('active');
				windowTabs[k].classList.remove('show');
				windowTabs[k].classList.add('hide');
			}
			
		}
	}
});






// module.exports = forms;