var leftMenuButton = document.querySelector('.mobile-nav__left');
var rightMenuButton = document.querySelector('.mobile-nav__right');

var leftNavigation = document.querySelector('.navigation');
var rightAchievment = document.querySelector('.header-top-wrapper');

//show menu on laptop and up

resizeMenu();

window.addEventListener('resize',function(){
	resizeMenu();
});

function resizeMenu(){
	if (innerWidth < 900){
		leftNavigation.classList.add('hide');
		rightAchievment.classList.add('hide');
	}else{
		leftNavigation.classList.remove('hide');
		rightAchievment.classList.remove('hide');
	}
}




//open menu

leftMenuButton.onclick = function(event){
	event = event || window.event;
	
	if(rightAchievment.classList.contains('hide')){
		leftNavigation.classList.toggle('hide');
		document.querySelector('.mobile-nav__left').classList.toggle('is-open-cross');	
	}else{
		rightAchievment.classList.add('hide');
		document.querySelector('.mobile-nav__right').classList.remove('is-open');
		leftNavigation.classList.toggle('hide');
		document.querySelector('.mobile-nav__left').classList.toggle('is-open-cross');
	}
}

rightMenuButton.onclick = function(event){
	event = event || window.event;
	
	if(leftNavigation.classList.contains('hide')){
		rightAchievment.classList.toggle('hide');
		document.querySelector('.mobile-nav__right').classList.toggle('is-open');
	}else{
		leftNavigation.classList.add('hide');
		document.querySelector('.mobile-nav__left').classList.remove('is-open-cross');
		document.querySelector('.mobile-nav__right').classList.toggle('is-open');
		rightAchievment.classList.toggle('hide');
	}
}




/*window.addEventListener('scroll',function(){
	//console.log(event);
	//console.log(document.querySelector('.navigation').offsetTop);
});*/

























