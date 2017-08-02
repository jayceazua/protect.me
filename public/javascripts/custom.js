var buttonScanner = document.getElementById('networkTable');
var tableHead = document.getElementById('tableHead');

function hide () {tableHead.style.display = 'none'}

hide();

buttonScanner.onclick = () => {
	if (tableHead.style.display === 'none') {
		tableHead.style.display = 'table-header-group';
	} else {
		tableHead.style.display = 'none';
	}
}