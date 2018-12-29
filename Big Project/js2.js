
function show1(){
	document.getElementById('div1').style.display = "block";
	document.getElementById('img1').style.display = "block";
	document.getElementById('div2').style.display = "none";
	document.getElementById('img2').style.display = "none";
	change();
}

function show2(){
	document.getElementById('div2').style.display = "block";
	document.getElementById('img2').style.display = "block";
	document.getElementById('div1').style.display = "none";
	document.getElementById('img1').style.display = "none";
	change();
}
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
function dec1(){
	var text =document.getElementById('text');
	if(text.value>1){
		text.value--;
		if(text.value==1)
			document.getElementById('dec').style.cursor="not-allowed";
		if(text.value<5)
			document.getElementById('add').style.cursor="pointer";
	}
}
function add1(){
	var text =document.getElementById('text');
	if(text.value<5){
		text.value++;
		if(text.value==5)
			document.getElementById('add').style.cursor="not-allowed";
		if(text.value>1)
			document.getElementById('dec').style.cursor="pointer";
	}
}
function change(){
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var cap = document.getElementById('cap');
	if(document.getElementById('div1').style.display == "block")
		cap.innerHTML='"'+a1.innerHTML+'"';
	else if(document.getElementById('div2').style.display == "block")
		cap.innerHTML='"'+a2.innerHTML+'"';
} 
function show3() {
	document.getElementById('div3').style.display = "block";
}
function show4(){
	document.getElementById('div3').style.display = "none";
}
function show5(){
	document.getElementById("s").style.display = "block";
	document.getElementById("s1").style.display = "none";
	document.getElementById("box").style.display="block";
	document.getElementById("box1").style.display="none";
}
function show6(){
	document.getElementById("s1").style.display = "block";
	document.getElementById("s").style.display = "none";
	document.getElementById("box1").style.display="block";
	document.getElementById("box").style.display="none";
}
window.onload=function(){
	top1();
}
function show7(){
	var photo2 = document.getElementById('photo2');
  	var slider = document.getElementById('slider');
  	slider.style.display="block";
  	photo2.style.display="block";
}
function show8(){
	var photo2 = document.getElementById('photo2');
  	var slider = document.getElementById('slider');
  	slider.style.display="none";
  	photo2.style.display="none";
}
function show9(){
  	var Bimg = document.getElementById('Bimg');
  	var photo1 = document.getElementById('photo1');
  	var slider = document.getElementById('slider');
  	var box = document.getElementById('box');
  	var photo2 = document.getElementById('photo2');
  	var ev = ev||window.event;
  	//根据鼠标的位置判断放大镜的位置
  	var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
  	var top = ev.clientY - box.offsetTop - slider.offsetHeight/2-10;
  	var maxLeft = photo1.offsetWidth - slider.offsetWidth;
  	var maxTop = photo1.offsetHeight - slider.offsetHeight;
  	left = left>maxLeft?maxLeft:left<0?0:left;
  	top = top>maxTop?maxTop:top<0?0:top;
  	//设置放大镜的位置
  	slider.style.left = left + "px";
  	slider.style.top = top + "px";
  	//根据左侧放大镜的位置去计算右侧大图移动的比例
  	var w = left/maxLeft;
  	var h = top/maxTop;
  	//计算大图最大移动范围
  	var BimgLeft = photo2.offsetWidth - Bimg.offsetWidth;
  	var BimgTop = photo2.offsetHeight - Bimg.offsetHeight;
  	//计算大图移动距离，设置位置
  	Bimg.style.top = BimgTop*h+"px";
  	Bimg.style.left = BimgLeft*w+"px";
}
function show10(){
	var photo4 = document.getElementById('photo4');
  	var slider1 = document.getElementById('slider1');
  	slider1.style.display="block";
  	photo4.style.display="block";
}
function show11(){
	var photo4 = document.getElementById('photo4');
  	var slider1 = document.getElementById('slider1');
  	slider1.style.display="none";
  	photo4.style.display="none";
}
function show12(){
  	var Bimg = document.getElementById('Bimg1');
  	var photo1 = document.getElementById('photo3');
  	var slider = document.getElementById('slider1');
  	var box = document.getElementById('box1');
  	var photo2 = document.getElementById('photo4');
  	var ev = ev||window.event;
  	//根据鼠标的位置判断放大镜的位置
  	var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
  	var top = ev.clientY - box.offsetTop - slider.offsetHeight/2-10;
  	var maxLeft = photo1.offsetWidth - slider.offsetWidth;
  	var maxTop = photo1.offsetHeight - slider.offsetHeight;
  	left = left>maxLeft?maxLeft:left<0?0:left;
  	top = top>maxTop?maxTop:top<0?0:top;
  	//设置放大镜的位置
  	slider.style.left = left + "px";
  	slider.style.top = top + "px";
  	//根据左侧放大镜的位置去计算右侧大图移动的比例
  	var w = left/maxLeft;
  	var h = top/maxTop;
  	//计算大图最大移动范围
  	var BimgLeft = photo2.offsetWidth - Bimg.offsetWidth;
  	var BimgTop = photo2.offsetHeight - Bimg.offsetHeight;
  	//计算大图移动距离，设置位置
  	Bimg.style.top = BimgTop*h+"px";
  	Bimg.style.left = BimgLeft*w+"px";
}