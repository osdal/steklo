
let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
	popup_engineer = document.querySelector('.popup_engineer'),
	popup_close = document.getElementsByClassName('popup_close')[1];

	
	
	popup_engineer_btn.addEventListener('click', function() {
		popup_engineer.style.display = 'block';


	});

	popup_close.addEventListener('click', function(){
		popup_engineer.style.display = 'none';
		
	});

popup_engineer.addEventListener('click', function () {
		if (event.target == popup_engineer) {
			popup_engineer.style.display = 'none';
		}

})
	
	

function modalGauger () {

	
  }

  

  
  // module.exports = modalGauger;


