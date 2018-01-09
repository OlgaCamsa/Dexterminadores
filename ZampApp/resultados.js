
/*var url = "http://www.mocky.io/v2/5a3cf50f310000b517b59365";

document.getElementById("boton1").onclick = function() {
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function () {
		if(this.status == 200){
			console.log("Exito!", this.response);
			document.getElementById("flipper1").innerHTML = this.response;
		}else{
			console.log("No es éxito");
		}
	}
	request.send();
}
*/

var xmlhttp = new XMLHttpRequest();
var url = "./listaDeProductos.json";

xmlhttp.onload = function() {
	if (this.readyState == 4) {
        if (this.status == 200) {
            console.log('Exito')
        	var myArr = JSON.parse(this.responseText);
        	ShowLista(myArr);
        }
        else{
     		alert('Un error');
        }
    }
    else {
    	alert('La página se está cargando');
    }
};
xmlhttp.open("POST", url, true);
xmlhttp.send();

function ShowLista(arr) {
	var front = [];
	var back = [];
	for (let i = 0; i < (arr.length); i++){
		front[i] = '<h3>' + arr[i].nombre + '</h3>' + '<img style = height:150px; src="' + arr[i].foto + '">' + '<br>' + '<p>' + arr[i].precio.toFixed(2) + " €" + '</p>';
		document.getElementsByClassName("front")[i].innerHTML = front[i];
		back[i] = '<a href=""><h3>' + "Descripción" + '</h3>' + '<p>' + arr[i].descripción + '</p>' + '<br>' + '<h3>' + "Restaurante" + '</h3>' + '<p>' + arr[i].restaurante + '</p></a>';
		document.getElementsByClassName("back")[i].innerHTML = back[i];
	}
}

/*class Productos {
	constructor(){
		this.nombre = 
		this.precio =
		this.restaurante =
		this.foto = 
	}
}*/


// JsHome angel, filtros
function FiltrosInputs() {
    nombre = '';
	seleccionado = false;
}
function FiltrosSelects() {
    nombre = '';
	valor = '';
}
CogerFiltros = function (evnt) {
    evnt.preventDefault();
    var arrInputs = document.getElementsByClassName('filtro')[0].getElementsByTagName('input');
	for (i = 0; i < arrInputs.length; i++) {
		arrFiltrosInputs[i] = new FiltrosInputs;
        arrFiltrosInputs[i].nombre=arrInputs[i].id;
		arrFiltrosInputs[i].seleccionado=arrInputs[i].checked;
	}
	var arrOtros = document.getElementsByClassName('filtro')[0].getElementsByTagName('select');
	for (i = 0; i < arrOtros.length; i++) {
		arrFiltrosSelects[i] = new FiltrosSelects;
        arrFiltrosSelects[i].nombre=arrOtros[i].id;
        arrFiltrosSelects[i].valor=arrOtros[i].value;		
	}
    request.open("POST", "http://www.mocky.io/v2/5a538681300000862a1ebfbf");
    request.onload = function () {
        console.log('request: ', request);
    };  
    request.send(arrFiltros);
}

var arrFiltrosInputs = [];
var arrFiltrosSelects = [];
var request = new XMLHttpRequest();
var arrInputs = document.getElementsByClassName('filtro')[0].getElementsByTagName('input');
var arrOtros = document.getElementsByClassName('filtro')[0].getElementsByTagName('select');
var btnFiltro=document.getElementById('btnFiltro');
btnFiltro.onclick = CogerFiltros;