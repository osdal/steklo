function picturies () {

	
	
}


	let picturies_img = document.querySelectorAll('.works img.small-img'),
			picturies_lupa = document.querySelectorAll('.works .wow'),
			picturies_container = document.querySelector('.works');
		console.log(picturies_lupa);
		picturies_container.addEventListener('click', function(event) { 
			for (let i = 0; i < picturies_img.length; i++) {
				if (event.target == picturies_img[i]) {
					picturies_lupa[i].classList.add('show');
				}
			}
		});

		for (let i = 0; i < picturies_lupa.length; i++) {
			picturies_lupa[i].addEventListener('click', function(event) {
				if (event.target == picturies_lupa[i]) {
					picturies_lupa[i].classList.remove('show');
					picturies_lupa[i].classList.add('hide');
				}
			});
		}

// exports.module = picturies;

