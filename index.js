// var box3 =document.getElementsByTagName('seconds');

function time() {
	var date = new Date();
	var min = date.getMinutes();
	let sec = date.getSeconds(),
	    hr = date.getHours();
	    if(sec < 10){
	    	return "0" + min;
	    }
}
setInterval(function() {
	time();
},1000);

document.getElementById('seconds').InnerHTML=sec.time();