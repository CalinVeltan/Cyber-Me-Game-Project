var arr = [];

arr[0]= new Image();
arr[0].src = "image1.png";

arr[1]= new Image();
arr[1].src = "image2.png";

arr[2]= new Image();
arr[2].src = "image3.png";



function takeTime(){
setTimeout(function(){change();},document.getElementById("formTime").value*3600000);
}

// Function that will make a change at the pictures that describe the status of the habbit.
function change() {

	
	if (confirm("Did you finished habbit"+""+"?") === true) {
		score = score + 5;
		localStorage.setItem(scoreLS, score);
		List();
		pictureChoice = arr[1].src;
		Edit();
		pictureChoice = arr[0].src;
		List();
	}
	else {
		pictureChoice = arr[2].src;
		score = score - 2;
		localStorage.setItem(scoreLS, score);
		Edit();
		pictureChoice = arr[0].src;
		List();
	}

// Function that clear the content of the input fields when the are clicked.
function clearContent(element){
	element.value="";
}

// Function that hide the table and make visible the input filds.
function hideTable() {
	document.getElementById("tableWrapper").style.visibility ='hidden';
	document.getElementById("tableWrapper").style.display ='none';
	document.getElementById("changeWrapper").style.display ="block";
	document.getElementById("changeWrapper").style.visibility ="visible";
}

// Function that hide the input fileds and show the table.
function hideInputs(){
	document.getElementById("tableWrapper").style.visibility ='visible';
	document.getElementById("tableWrapper").style.display ='block';
	
}
