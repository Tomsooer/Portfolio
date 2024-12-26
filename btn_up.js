// Button Up (.btn_up)

const btnUp = document.createElement('button');
btnUp.classList.add('btn_up');
document.body.appendChild(btnUp);

// Click event handler for the button
btnUp.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// Scroll event handler for the window
window.addEventListener('scroll', function () {
	if (window.scrollY > 200) {
		btnUp.classList.add('active');
	} else {
		btnUp.classList.remove('active');
	}
});
