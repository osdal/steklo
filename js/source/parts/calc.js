let sectionGlazzing = document.getElementsByTagName('section')[0],
	popup_calc = document.querySelector('.popup_calc'),
	popup_calc_content =document.querySelector('.popup_calc_content'),
	calcButtons = document.getElementsByClassName('glazing_price_btn'),
	balcon_icons = document.querySelector('.balcon_icons'),
	balcon_icons_img = document.querySelectorAll('.balcon_icons img');
	// big_img = ;


sectionGlazzing.addEventListener('click', function (event) {
	for (let i = 0; i < calcButtons.length; i++) {
				if (event.target == calcButtons[i]) {
					popup_calc.style.display = 'block';
				}
	}
});


function enlargeBalconImg (a) {
		
		for (let i = a; i < balcon_icons_img.length; i++) {
			balcon_icons_img[i].classList.remove('show');
			balcon_icons_img[i].classList.add('hide');
		}

	}

	enlargeBalconImg(1);

	function reduceBalconImg (b) {

		if (balcon_icons_img[b].classList.contains('hide')) {
			hideBalconImg(0);
			balcon_icons_img[b].classList.remove('hide');
			balcon_icons_img[b].classList.add('show');
		}
		
	}

	balcon_icons_img.addEventListener('click', function (event) {
			let target = event.target;
				if (target.className == 'info-header-tab') {
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				}
	});

	info.addEventListener('click', function (event) {
			let target = event.target;
				if (target.className == 'info-header-tab') {
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				}
	});


/*balcon_icons.addEventListener('click', function (event) {
	for (let i = 0; i < balcon_icons_img.length; i++) {
				if (event.target == balcon_icons_img[i]) {
					balcon_icons_img[i].classList.add('big_img');
				}
	}
});*/

console.log(balcon_icons);