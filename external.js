function luckyNum(){
	var r;
	r=Math.floor(Math.random()*10);
	document.getElementById("demo").innerHTML =r;
	var page=document.getElementById("demo");
	page.style.backgroundColor='olive';
	page.style.color='white';
	
	
	if(r<5){
		page.style.backgroundColor='olive'
	}
	else{
		page.style.backgroundColor='red'
	}
}

function changeCss(){
	var x=document.getElementById('menu');
	x.className='list showlist';
	x.style.color='black'; 
	x.style.fontFamily='arial';
	x.style.fontSize='larger';
	
	
}
function hide(){
	document.getElementById('menu').className='list hideList ';
	
}

function swap(){
	var img=document.getElementById('img-swap');
	img.setAttribute('src','problem-solving.png');
	img.setAttribute('alt','puzzle solve');
	
}

function bigText(){
	document.getElementById('news-text').style.fontSize='30px';
	
}
function restMode(){
	document.getElementById('news-text').style.fontSize='16px';
	document.getElementById('news').className='card';
}
function nightMode(){
	document.getElementById('news').className='card night';
	
}