

function top1(){
	var head = document.getElementsByClassName('head')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop
		if(st>180){
			head.style.position = 'fixed';
		}else{
			head.style.position = 'static';
		}
	}
}
function show() {
	var select = document.getElementById("select");
	var money = document.getElementById("money");
	money.innerHTML="￥"+select.value;
}
// function show1(){
// 	document.getElementById("left").style.display="block";
// 	document.getElementById("right").style.display="block";
// }
// function dis() {
// 	document.getElementById("left").style.display="none";
// 	document.getElementById("right").style.display="none";
// }
function show2(index) {
	for (var i = 0; i < 6; i++) {
		if(i == index-1)
			document.getElementsByClassName("img1")[index-1].src="img/yellow.jpg";
		else
			document.getElementsByClassName("img1")[i].src="img/white.jpg";
	}
}
function show3() {
	var img = document.getElementById("active").firstChild;
	img.src = "img/yellow.jpg";
}
window.onload = function(){
	top1();
	show3();
}