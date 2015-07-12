
var $btns = document.getElementsByClassName('btn');

function attachEvent() {
	$addEvent($btns, 'click', printMsg, null);
}

function printMsg() {
	alert()
}