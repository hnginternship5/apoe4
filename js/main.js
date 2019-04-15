window.onscroll = function(){
scrollUp();};

//create scroll function, if user scrolls 40px from top, scroll button becomes visible

function scrollUp(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		document.getElementById("scrollBut").style.display = "block";
	}
	else {
		document.getElementById("scrollBut").style.display = "none";
	}
};
//create function which takes user to the top upon clicking

function scrollToTop(){
	document.body.scrollTop =  0;
	document.documentElement.scrollTop = 0;
}