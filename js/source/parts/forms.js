function forms () {
	
}

let mainForms = document.getElementsByClassName('form main_form');

let messageMainForms = {};
  
messageMainForms.loading = 'Идет отправка';
messageMainForms.success = "Отправлено";
messageMainForms.failure = "Ошибка";

statusMessageMainForms = document.createElement('div');
statusMessageMainForms.classList.add('status');


for (let i = 0; i < mainForms.length; i++) {
mainForms[i].user_phone.addEventListener('input', function(input) {
	  			return this.value = this.value.match(/^\d+$/);
	  		});
}

for (let i = 0; i < mainForms.length; i++) {
	mainForms[i].addEventListener('submit', function (event) {
				  event.preventDefault();

		  
				  //Ajax
				  let request = new XMLHttpRequest();
				  request.open('POST', 'server.php', true);
		  
				  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  
				  let formDataMainForms = new FormData(mainForms[i]);
				  
		  
				  request.send(formDataMainForms);
				  request.onreadystatechange = function() {
					  if (request.readyState < 4) {
						  statusMessageMainForms.innerHTML = messageMainForms.loading;
					  } else if (request.readyState == 4){
						  if (request.status == 200 && request.status < 300) {
							 statusMessageMainForms.innerHTML = '';
							 mainForms[i].appendChild(statusMessageMainForms);
							 statusMessageMainForms.innerHTML = messageMainForms.success;

							  // Добавляем контент на страницу
							  
							   
						  } else {
							  statusMessageMainForms.innerHTML = messageMainForms.failure;
						  }
					  }
				  };

				  for (let i = 0; i <  formDataMainForms.length; i++) {
								  
								  formDataMainForms.elements[i].value = ''; 
								  // Очищаем поля ввода

				  } 
				 
	});
}




 // module.exports = forms;