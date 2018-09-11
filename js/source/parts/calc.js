let dataForms = {
				shape: null,
				width_window: null,
				height_window: null,
				wether: null,
				name: null,
				phone: null
				},
	sectionGlazzing = document.getElementsByTagName('section')[0],
	popup_calc = document.querySelector('.popup_calc'),
	popup_calc_content =document.querySelector('.popup_calc_content'),
	calcButtons = document.getElementsByClassName('glazing_price_btn'),
	balcon_icons = document.querySelector('.balcon_icons'),
	balcon_icons_img = document.querySelectorAll('.balcon_icons img'),
	big_img = document.querySelectorAll('.big_img img'),
	width = document.getElementById('width'),
	height = document.getElementById('height'),
	popup_calc_button = document.querySelector('.popup_calc_button'),
	popup_calc_profile = document.querySelector('.popup_calc_profile'),
	inputs_calc = document.querySelectorAll('.popup_calc_profile label input'),
	popup_calc_profile_content = document.getElementsByClassName('popup_calc_profile_content')[0],
	cold = document.getElementById('cold'),
	warm = document.getElementById('warm'),
	popup_calc_profile_button = document.getElementsByClassName('popup_calc_profile_button')[0],
	popup_calc_end = document.getElementsByClassName('popup_calc_end')[0],
	endForm = document.querySelector('.popup_calc_end form'),
	popup_calc_close = document.getElementsByClassName('popup_calc_close')[0],
	popup_calc_end_close = document.getElementsByClassName('popup_calc_end_close')[0],
	popup_calc_profile_close = document.getElementsByClassName('popup_calc_profile_close')[0];
	
	
function clearingDataForms () {
	for (var key in dataForms) {
		delete dataForms[key];
	}
}

sectionGlazzing.addEventListener('click', function (event) {
	for (let i = 0; i < calcButtons.length; i++) {
				if (event.target == calcButtons[i]) {
					popup_calc.style.display = 'block';
				}
	}
});

	function reduceBalconImg (a) {
		if (balcon_icons_img[a].classList.contains('big_img')) {
			balcon_icons_img[a].classList.remove('big_img');
		}
	}


	function enlargeBalconImg (b) {

		if (!balcon_icons_img[b].classList.contains('big_img')) {
			balcon_icons_img[b].classList.add('big_img');
		}
		
	}

	function showBigImg (c) {
		big_img[c].classList.add('show');
		big_img[c].classList.remove('hide');
	}

	function hideBigImg (d) {
		big_img[d].classList.remove('show');
		big_img[d].classList.add('hide');
	}
// Выбор формы балкона и его размеров
	balcon_icons.addEventListener('click', function (event) {
			let target = event.target;
				
				for (var ii = 0; ii < balcon_icons_img.length; ii++) {
					if (target == balcon_icons_img[ii]) {
						
						enlargeBalconImg (ii);
						dataForms.shape = ii;
						break;						
					}
				}
				
				for (let i = (ii + 1); i < balcon_icons_img.length; i++) {
					reduceBalconImg (i);
				}

				for (let i = 0; i < ii; i++) {
					reduceBalconImg (i);
				}

			showBigImg (ii);

				for (let i = (ii + 1); i < balcon_icons_img.length; i++) {
					hideBigImg (i);
				}

				for (let i = 0; i < ii; i++) {
					hideBigImg (i);
				}
				
	});


width.addEventListener('input', function(input) {
        		dataForms.width_window = this.value;
        		return this.value = this.value.match(/^\d+$/);
});

height.addEventListener('input', function(input) {
				dataForms.height_window = this.value;
	  			return this.value = this.value.match(/^\d+$/);
});

popup_calc_close.addEventListener('click', function() {
	popup_calc.style.display = 'none';
	clearingDataForms ();
});


popup_calc_button.addEventListener('click', function () {
	popup_calc.style.display = 'none';
	popup_calc_profile.classList.remove('popup_calc_profile');
	popup_calc_profile.classList.add('popup_calc_profile_show');
});

popup_calc_profile_close.addEventListener('click', function() {
	popup_calc.style.display = 'none';
	popup_calc_profile.classList.add('popup_calc_profile');
	popup_calc_profile.classList.remove('popup_calc_profile_show');
	clearingDataForms ();
});

popup_calc_profile_content.addEventListener('click', function (event) {
	if (event.target == cold) {
		dataForms.wether = 'cold';
		cold.classList.add('clicked_cold');
		warm.classList.remove('clicked_warm');
	} else if (event.target == warm) {
		dataForms.wether = 'warm';
		cold.classList.remove('clicked_cold');
		warm.classList.add('clicked_warm');
	}

});



popup_calc_profile_button.addEventListener('click', function () {
	popup_calc_profile.classList.remove('popup_calc_profile_show');
	popup_calc_profile.classList.add('popup_calc_profile');
	popup_calc_end.classList.remove('popup_calc_end');
	popup_calc_end.classList.add('popup_calc_end_show');
})


endForm.user_name.addEventListener('input', function(input) {
				dataForms.name = this.value;
				console.log(dataForms);
	  			});
	
endForm.user_phone.addEventListener('input', function(input) {
				dataForms.name = this.value;
				console.log(dataForms);
	  			return this.value = this.value.match(/^\d+$/);
	  		});

let messageCalc = {};
  
messageCalc.loading = 'Идет отправка';
messageCalc.success = "Отправлено";
messageCalc.failure = "Ошибка";

statusMessageCalc = document.createElement('div');
statusMessageCalc.classList.add('status');

endForm.addEventListener('submit', function(event) {
	//Ajax
			  let request = new XMLHttpRequest();
			  request.open('POST', 'server.php', true);
	  
			  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  
			  request.send(dataForms);

			  request.onreadystatechange = function() {
				  if (request.readyState < 4) {
					  statusMessageCalc.innerHTML = messageCalc.loading;
				  } else if (request.readyState == 4){
					  if (request.status == 200 && request.status < 300) {
						  	statusMessageCalc.innerHTML = '';
						 	endForm.appendChild(statusMessageCalc);
						  	statusMessageCalc.innerHTML = messageCalc.success;
						  // Добавляем контент на страницу
						  
						   
					  } else {
						  statusMessageCalc.innerHTML = messageCalc.failure;
					  }
				  }
			  };

			});

for (let i = 0; i <  endForm.length; i++) {
							  
				  endForm.elements[i].value = ''; 
				  // Очищаем поля ввода

			  } 

popup_calc_end_close.addEventListener('click', function() {
	popup_calc_end.classList.add('popup_calc_end');
	popup_calc_end.classList.remove('popup_calc_end_show');
	clearingDataForms();
});	

