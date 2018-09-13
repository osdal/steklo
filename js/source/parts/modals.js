function modals () {

		
				
			
		}


		let message = {};
		  
		message.loading = 'Идет отправка';
		message.success = "Отправлено";
		message.failure = "Ошибка";

		let modalFormCall = document.querySelector('.popup form'),
			modalFormEngineer = document.querySelector('.popup_engineer form'),
			modalFormCalc = document.querySelector('.popup_calc_end form');
			
			
			
		 	statusMessage = document.createElement('div');

		 	
		 	


		statusMessage.classList.add('status');



		modalFormCall.user_phone.addEventListener('input', function(input) {
			  			return this.value = this.value.match(/^\d+$/);
			  		});
			

		modalFormCall.addEventListener('submit', function (event) {
					  event.preventDefault();

			  
					  //Ajax
					  let request = new XMLHttpRequest();
					  request.open('POST', 'server.php', true);
			  
					  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			  
					  let formData = new FormData(modalFormCall);
					  
			  
					  request.send(formData);
					  request.onreadystatechange = function() {
						  if (request.readyState < 4) {
							  statusMessage.innerHTML = message.loading;
						  } else if (request.readyState == 4){
							  if (request.status == 200 && request.status < 300) {
								  statusMessage.innerHTML = '';
								 modalFormCall.appendChild(statusMessage);
								  statusMessage.innerHTML = message.success;
								  // Добавляем контент на страницу
								  
								   
							  } else {
								  statusMessage.innerHTML = message.failure;
							  }
						  }
					  };

					  for (let i = 0; i <  modalFormCall.length; i++) {
									  
									  modalFormCall.elements[i].value = ''; 
									  // Очищаем поля ввода

					  } 
					 
		 });
			  
			  		modalFormEngineer.user_phone.addEventListener('input', function(input) {
			  			return this.value = this.value.match(/^\d+$/);
			  		});
			  


		modalFormEngineer.addEventListener('submit', function (event) {
					  event.preventDefault();

			  
					  //Ajax
					  let request = new XMLHttpRequest();
					  request.open('POST', 'server.php', true);
			  
					  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			  
					  let formData = new FormData(modalFormEngineer);
					  
			  
					  request.send(formData);
					  request.onreadystatechange = function() {
						  if (request.readyState < 4) {
							  statusMessage.innerHTML = message.loading;
						  } else if (request.readyState == 4){
							  if (request.status == 200 && request.status < 300) {
								  statusMessage.innerHTML = '';
								  modalFormEngineer.appendChild(statusMessage);
								  statusMessage.innerHTML = message.success;
								  // Добавляем контент на страницу
								  
								 
							  } else {
								  statusMessage.innerHTML = message.failure;
							  }
						  }
					  };
					for (let i = 0; i <  modalFormEngineer.length; i++) {
									  
									  modalFormEngineer.elements[i].value = ''; 
									  // Очищаем поля ввода

					} 

				 });


		modalFormCalc.user_phone.addEventListener('input', function(input) {
			  			return this.value = this.value.match(/^\d+$/);
			  		});

		modalFormCalc.addEventListener('submit', function (event) {
					  event.preventDefault();

			  
					  //Ajax
					  let request = new XMLHttpRequest();
					  request.open('POST', 'server.php', true);
			  
					  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			  
					  let formData = new FormData(modalFormCalc);
					  
			  
					  request.send(formData);
					  request.onreadystatechange = function() {
						  if (request.readyState < 4) {
							  statusMessage.innerHTML = message.loading;
						  } else if (request.readyState == 4){
							  if (request.status == 200 && request.status < 300) {
								  statusMessage.innerHTML = '';
								  modalFormCalc.appendChild(statusMessage);
								  statusMessage.innerHTML = message.success;
								  // Добавляем контент на страницу
								  
								   
							  } else {
								  statusMessage.innerHTML = message.failure;
							  }
						  }
					  };

					  for (let i = 0; i <  modalFormCalc.length; i++) {
									  
									  modalFormCalc.elements[i].value = ''; 
									  // Очищаем поля ввода

					 } 
					 
				 });


 
// module.exports = modals;