

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

$("#responsiveBusqueda").click(function(){
	$("#divEscondido").toggle();
})

/*SLIDERS*/

var slider = new Slider("#ex8", {
	tooltip: 'always'
});

$("#ex2").slider({});

/*FIN SLIDERS*/


/*FILTROS*/

var myArr;
var requestFiltro = new XMLHttpRequest();
var url = "./listaDeProductos.json";
requestFiltro.onload = function() {
	if (this.readyState == 4) {
		if (this.status == 200) {
			console.log('Exito 2')
			myArr = JSON.parse(this.responseText);
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
requestFiltro.open("POST", url, true);
requestFiltro.send();



var valores={};
var listaFiltrada = [];

function ShowLista(arr) {

	$('#botonFiltro').click(function(evnt){
		$(".divTableBody").empty();
		evnt.preventDefault();

		$('.filtro select').each(function(){
			valores[this.name]=this.value;
		})

		$('.filtro input:checked[type=checkbox]').each(function(){
			valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
		})

		$('.filtro input').not('.filtro input[type=checkbox]').each(function(){
			valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
		})

		for(i=0; i<myArr.length;i++){
			if ((Object.values(myArr[i])[6] == valores.cantidad)&&
				(myArr[i].categoria == valores.categoria)&&
				(myArr[i].preferencia == valores.preferencia)){
				listaFiltrada.push(myArr[i]);
			}						
		};
		

		/*for (let i=0; i<(myArr.length); i++){
			for (let k = 0; k < Object.keys(valores).length; k++){
				for(let j=0; j<(valores[Object.keys(valores)[k]].split(",").length);j++){
					if((valores[Object.keys(valores)[k]].split(",")[j]==myArr[i][Object.keys(valores)[k]])){
						listaFiltrada.push(myArr[i]); 
					}

				}
			}
		}*/
		

		var flipper = [];

		for (plato in listaFiltrada){
			flipper[plato] = document.createElement("div");
			flipper[plato] = '<div class="divTableCell">' + '<div class="flipper"><div class="front">' + 
			'<h3>' + listaFiltrada[plato].nombre + '</h3>' + 
			'<img src="' + listaFiltrada[plato].foto + '">' + '<br>' + 
			'<div class="precio">' + '<p>' + listaFiltrada[plato].precio.toFixed(2) + " €" + '</p>' + '</div>' + '</div>' + 
			'<div class="back">' + '<a href=""><h3>' + "Descripción" + '</h3>' + 
			'<p>' + listaFiltrada[plato].descripción + '</p>' + '<br>' + 
			'<h3>' + "Restaurante" + '</h3>' + 
			'<p>' + listaFiltrada[plato].restaurante + '</p>' + 
			'<div class="precio">' + '<p>' + listaFiltrada[plato].precio.toFixed(2) + " €" + '</p>' + '</div>' + '</a></div></div>' + 
			'<input type="number" size="3" name="num" min="1" max="100" value="0"/>' +
			'<button class="añadir"></button></div>';

			$(".divTableBody").append(flipper[plato]);
		}

		listaFiltrada.splice(0,listaFiltrada.length);
		console.log(valores);
	}

	);
};

/*FIN FILTROS*/




// JsHome angel, filtros
/*function FiltrosInputs() {
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
    request.send(arrFiltrosInputs, arrFiltrosSelects);
}

var arrFiltrosInputs = [];
var arrFiltrosSelects = [];
var request = new XMLHttpRequest();
var arrInputs = document.getElementsByClassName('filtro')[0].getElementsByTagName('input');
var arrOtros = document.getElementsByClassName('filtro')[0].getElementsByTagName('select');
var btnFiltro=document.getElementById('btnFiltro');
btnFiltro.onclick = CogerFiltros;*/


/*FUNCCION DE LOS FILTROS*/
