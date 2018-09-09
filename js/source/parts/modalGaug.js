
let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
	popup_engineer = document.querySelector('.popup_engineer'),
	popup_content = document.getElementsByClassName('.popup_content')[0],
	popup_dialog = document.querySelectorAll('.popup_dialog')[1],
	popup_form = document.querySelectorAll('.popup_form')[1],
	popup_close = document.getElementsByClassName('popup_close')[1];

	console.log(popup_form);
	
	popup_engineer_btn.addEventListener('click', function() {
		popup_engineer.style.display = 'block';


	});

	popup_close.addEventListener('click', function(){
		popup_engineer.style.display = 'none';
		
	});

	/*window.addEventListener('click', function(event) {
		if (event.target != popup_form) {
			popup_engineer.style.display = 'none';
		}
	});

	window.addEventListener('click', function(event){   
		  if (!popup_form.contains(event.target)){
		   	popup_engineer.style.display = 'block';
		  } else {
		  	popup_engineer.style.display = 'none';
		  }
	});
*/
	

function modalGauger () {

	
  }

  

  
  // module.exports = modalGauger;


