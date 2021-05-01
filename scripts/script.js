var slideIndex = JSON.parse(localStorage.getItem("curSlide"));
var sliding = JSON.parse(localStorage.getItem("sliding"));
//const nSlides = 3;

showSlide(slideIndex);
setBtnState(sliding);

let timer = setInterval(function(){
	if(sliding){
		slideIndex++;
		showSlide(slideIndex);
	}
},3000);
		  
function startOrStop(){
	
	if(sliding) {
		sliding = false;
	} else {
		sliding = true;
	}
	setBtnState(sliding);
	localStorage.setItem("sliding",JSON.stringify(sliding));
}

function setBtnState(state){
	var startStop = document.getElementById("startStop");
	if(state){
		startStop.innerText = 'Stop';
	} else {
		startStop.innerText = 'Start';		
	}
}

function changeSlide(n){
	slideIndex += n;
	//slideIndex %= nSlides;
	showSlide(slideIndex);
}

function setSlide(n){
	slideIndex = n;
	showSlide(slideIndex);
}

function showSlide(n){
	var i; 
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	
	if(n>slides.length){
		slideIndex = 1;
	}
	
	if(n<1){
		slideIndex=slides.length;
	}
	
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	
	for(i=0;i<dots.length;i++){
		dots[i].className=dots[i].className.replace("active","");
	}
	
	slides[slideIndex-1].style.display = " block";
	dots[slideIndex-1].className+=" active";
	
	localStorage.setItem("curSlide",JSON.stringify(slideIndex));
}

/*function loadState(){
	slideIndex = JSON.parse(localStorage.getItem("curSlide"));
	sliding = JSON.parse(localStorage.getItem("sliding"));
	showSlide(slideIndex);
	setBtnState(sliding);
}*/

function processKey(e){
     
    switch(e.key){
         
        case "ArrowLeft":  // если нажата клавиша влево
            changeSlide(-1);
            break;
		
        case "ArrowRight":   // если нажата клавиша вправо
            changeSlide(+1);
            break;
        
		case "Escape":
			window.close();
			break;
    }
}
 
addEventListener("keydown", processKey);