userName.onblur = function() {
	if (userName.value == "") {
		userName.classList.add('invalid');
		error.innerHTML = 'Пожалуйста, введите имя.';
	}
};

// удаление сообщения об ошибке
userName.onfocus = function() {
	if (this.classList.contains('invalid')) {
		this.classList.remove('invalid');
		error.innerHTML = "";
	}
};

// удаление сообщения об ошибке
add_comments__input.onfocus = function() {
	if (this.classList.contains('invalid')) {
		this.classList.remove('invalid');
		error_comment.innerHTML = "";
	}
};

function add_comment() {
	
	let form = document.getElementById('add_comments');
	let commentsList = document.getElementById('comments_list');
	let userNameValue = form.userName.value;
	let dateCom = form.commentDate.value; 
	let todayDate = new Date();
	let time = todayDate.toLocaleTimeString();
	let textComment = form.add_comments__input.value;

	if (userNameValue == "") {
		userName.classList.add('invalid');
		error.innerHTML = 'Пожалуйста, введите имя.';
		return false;
	}

	if (textComment == "") {
		add_comments__input.classList.add('invalid');
		error_comment.innerHTML = 'Комментарий не может быть пустым';
		return false;
	}

	if (new Date(todayDate.setHours(0,0,0,0)) - new Date(dateCom).setHours(0,0,0,0) === 0) {
		dateCom = "Сегодня, " + time;
	} else if (new Date(todayDate.setHours(0,0,0,0)) - new Date(dateCom).setHours(0,0,0,0) === 86400000) {
		dateCom = "Вчера, " + time;
	} else if (dateCom == "") {
		dateCom = "Сегодня, " + time;
	}
	else {
		dateCom = dateCom + " " + time;
	}

	let newComment = document.createElement('div');
	newComment.className = "comments_list__comment";

	let newCommentInfo = document.createElement('div');
	newCommentInfo.className = "comments_list__info";
	newCommentInfo.innerHTML = "<strong>" + userNameValue + "</strong> <br> <i>" + " " + dateCom + "</i>";

	let newCommentText = document.createElement('div');
	newCommentText.className = "comments_list__text";
	newCommentText.innerHTML = textComment;

	let likeButton = document.createElement('button');
	likeButton.className = "like_button";
	likeButton.value = 'unlike';

	let removeButton = document.createElement('button');
	removeButton.className = "remove_button";

	commentsList.append(newComment);
	newComment.append(newCommentInfo);
	newComment.append(newCommentText);
	newComment.append(likeButton);
	newComment.append(removeButton);

	return false;
} 


comments_list.onclick = function(event) {
	if (event.target.className == 'remove_button') {
		let comm = event.target.closest('.comments_list__comment');
		comm.remove();
	} else if (event.target.className == 'like_button') {
		let like = event.target.closest('.like_button');
		if (like.value == 'unlike') {
			like.closest('.like_button').style.background = 'url(img/like.png) 0 0/contain no-repeat';
			like.closest('.like_button').value = 'like';
		} else {
			like.closest('.like_button').style.background = 'url(img/unlike.png) 0 0/contain no-repeat';
			like.closest('.like_button').value = 'unlike';
		}
		
	}
};

