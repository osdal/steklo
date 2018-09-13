function feedbacks () {
	


}


let questions = document.querySelector('.feedback_block h3'),
	askSpecialist = document.querySelector('.feedback_block a'),
	sectionFeedback = document.querySelector('section.feedback');


sectionFeedback.addEventListener('click', function(event) {
	if (event.target == questions || event.target == askSpecialist) {
		popup.style.display = 'block';
	}
});


// module.exports = feedbacks;
