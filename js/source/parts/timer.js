function timer () {
	
}

let deadline = '2019-07-04',
		seconds = null,
		minutes = null,
		hours = null,
		days = null;


	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		if (t > 0) {
			seconds = Math.floor((t / 1000) % 60);
			minutes = Math.floor((t / 1000 / 60) % 60);
			hours = Math.floor((t / (1000 * 60 * 60)));
			days = Math.floor(hours / 24);
			console.log(days);
		} else {
			seconds = '0';
			minutes = '0';
			hours = '0';
			days = '0';
		}

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds			
		};
	}

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			days = timer.querySelector('.days'),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

console.log(days);

		function updateClock() {
			let t = getTimeRemaining(endtime);

			if (t.days < 10) {
				days.innerHTML = '0' + t.days;
			} else {
				days.innerHTML = t.days;
			}
			if (t.hours < 10) {
				hours.innerHTML = '0' + t.hours;
			} else {
				hours.innerHTML = t.hours;
			}
			if (t.minutes < 10) {
				minutes.innerHTML = '0' + t.minutes;
			} else {
				minutes.innerHTML = t.minutes;
			}
			if (t.seconds < 10) {
				seconds.innerHTML = '0' + t.seconds;
			} else {
				seconds.innerHTML = t.seconds;
			}


		}


		let timeInterval = setInterval(updateClock, 1000);
		updateClock();

	}

	setClock('timer', deadline);


// module.exports = timer;