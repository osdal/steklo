function decorationTabs () {
	
}

let decorationTabContainer = document.querySelector('.decoration_slider'),
	decorationTabLink = document.querySelectorAll('.decoration_tab a'),
	decorationTab = document.querySelectorAll('.decoration_tab'),
	decorationTabContent = [
							document.querySelector('.internal'),
							document.querySelector('.external'),
							document.querySelector('.rising'),
							document.querySelector('.roof')
							];



decorationTabContainer.addEventListener('click', function(event) {
	for (let i = 0; i < decorationTab.length; i++) {
		if (event.target == decorationTabLink[i]) {
			decorationTab[i].classList.add('after_click');
			decorationTabContent[i].classList.add('show');
			for (let k = i + 1; k < decorationTab.length; k++) {
				decorationTab[k].classList.remove('after_click');
				decorationTabContent[k].classList.remove('show');
				decorationTabContent[k].classList.add('hide');
			}
			for (let k = 0; k < i; k++) {
				decorationTab[k].classList.remove('after_click');
				decorationTabContent[k].classList.remove('show');
				decorationTabContent[k].classList.add('hide');
			}
		}
	}
});



// module.exports = decorationTabs;