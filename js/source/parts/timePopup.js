function timePopup () {

       
	
}


 let delay_popup = 60000,
    popup = document.getElementsByClassName('popup')[0],
    popup_close_popup = document.querySelector('.popup .popup_close');

    setTimeout("popup.style.display='block'", delay_popup);

    popup_close_popup.addEventListener('click', function(event) {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });


// module.exports = timePopup;