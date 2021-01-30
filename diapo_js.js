
var img = document.getElementById('img'),
	button_pp = document.getElementById('button_pp'), //button play/pause
	i=1, //for the names of images
	timer; //for timeInterval

function playPause() {
	if(button_pp.value == 'play')
	{
		timer = setInterval(right,2000);
		setButtonImage('pause');
	}
	else
	{
		setButtonImage('play');
		clearInterval(timer);
	}
}

function stop() {
	i=1;
	clearInterval(timer);
	setButtonImage('play');
	setImage(i);
}

function left() {
    (i==1) ? i=5 : i--;
	setImage(i);
}

function right() {
	(i==5) ? i=1 : i++;
	setImage(i);
	$('#img').css('display', 'none');
	$('#img').fadeIn(500,'swing');
}

function setImage(i) {
	var src = "images/"+i+".jpg"; 
	img.setAttribute("src", src);
}

function setButtonImage(imageText) {
	var image="<img src=\"SVGs/"+imageText+"-solid.svg\" class=\"iconsSVG\">";
	button_pp.innerHTML=image;
	button_pp.value = imageText;
}