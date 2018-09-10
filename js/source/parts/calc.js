let sectionGlazzing = document.getElementsByTagName('section')[0],
	popup_calc = document.querySelector('.popup_calc'),
	popup_calc_content =document.querySelector('.popup_calc_content'),
	calcButtons = document.getElementsByClassName('glazing_price_btn'),
	balcon_icons = document.querySelector('.balcon_icons'),
	balcon_icons_img = document.querySelectorAll('.balcon_icons img');
	


sectionGlazzing.addEventListener('click', function (event) {
	for (let i = 0; i < calcButtons.length; i++) {
				if (event.target == calcButtons[i]) {
					popup_calc.style.display = 'block';
				}
	}
});




	function enlargeBalconImg (b) {

		if (!balcon_icons_img[b].classList.contains('big_img')) {
			balcon_icons_img[b].classList.add('big_img');
		}
		
	}

	balcon_icons.addEventListener('click', function (event) {
			let target = event.target;
				
				for (var ii = 0; ii < balcon_icons_img.length; ii++) {
					if (target == balcon_icons_img[ii]) {
						enlargeBalconImg (ii);
						break;
						
					}
				}
				if (ii == 0) {
					for (let i = 1; i = balcon_icons_img.length; i++) {
						if (balcon_icons_img[i].classList.contains('big_img')) {
							balcon_icons_img[i].classList.remove('big_img');
						}
					}
				} else if (ii > 0 && ii < balcon_icons_img.length) {
					for (let i = ii + 1; i = balcon_icons_img.length; i++) {
					 	balcon_icons_img[i].classList.remove('big_img');
					 } 
					for (let i = 0; i < ii; i++) {
					 	balcon_icons_img[i].classList.remove('big_img');
					 }
				} else if (ii == balcon_icons_img.length) {
					for (let i = 0; i < balcon_icons_img.length - 1; i++) {
					 	balcon_icons_img[i].classList.remove('big_img');
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

