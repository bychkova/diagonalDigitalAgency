var videoLink = document.querySelector('.experience-video-open');
var video = document.querySelector('.experience-video-vimeo');
var closeVideo = document.querySelector('.experience-video-close')

videoLink.onclick = function(event){
	event = event || window.event;
	event.preventDefault();
	
	video.classList.remove('hide-video');
	
}

video.onclick = function(event){
	event = event || window.event;
	video.classList.add('hide-video');
}

closeVideo.onclick = function(event){
	event = event || window.event;
	video.classList.add('hide-video');
}

