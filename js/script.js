let btnContinue = document.querySelectorAll('.blogs__btn');

btnContinue.forEach((item) => {
	item.addEventListener('click', function (event) {
		let description = event.target.nextSibling.parentElement.children[2];
		description.classList.add('open');
	})
});