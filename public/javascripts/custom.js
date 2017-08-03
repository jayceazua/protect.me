var buttonScanner = document.getElementById('networkTable');
var tableHead = document.getElementById('tableHead');
var speeder = document.getElementById('mbsSpeed1');
var tbody = document.getElementById('tbody');


//IIFE - this hides the element of the table head
(function hide () {tableHead.style.display = 'none'}());
// (function hideAgain () {speeder.style.display = 'none'}());



// once clicked it will appear along with the results
buttonScanner.onclick = setTimeout(() => {
	if (tableHead.style.display === 'none') {
		tableHead.style.display = 'table-header-group';
	} else {
		tableHead.style.display = 'none';
	}
}, 4000)



//display loading image 
buttonScanner.onclick = () => {
	var img = document.createElement('IMG');
	img.setAttribute('src', 'img/wifiLoader.gif');
	img.setAttribute('id', 'imgLoader')
	img.setAttribute('width', 304);
	img.setAttribute('height', 228);
	tbody.append(img);
	
	setTimeout(() =>{
		document.getElementById('imgLoader').style.display = 'none'
	}, 3500);
}
