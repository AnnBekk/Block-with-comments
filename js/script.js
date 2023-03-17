// let dateCom = document.querySelector('input[type="date"]'); // ""

// let inputName = document.querySelector('input[name="userName"]');
userName.onblur = function() {
	if (userName.value == "") {
		userName.classList.add('invalid');
		error.innerHTML = 'Пожалуйста, введите имя.'
	}
};

// удаление сообщения об ошибке
userName.onfocus = function() {
	if (this.classList.contains('invalid')) {
		this.classList.remove('invalid');
		error.innerHTML = "";
	}
};

